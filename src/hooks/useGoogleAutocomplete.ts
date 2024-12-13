'use client'

import { useEffect, useRef, useState } from 'react'
import { Location } from '../types/address'
import { SERVICEABLE_STATES } from '../lib/constants'
import { extractAddressComponents } from '../lib/maps'

interface UseGoogleAutocompleteProps {
  onSubmit: (location: Location) => Promise<void>
  onError: (message: string) => void
  onStateError: () => void
}

export function useGoogleAutocomplete({
  onSubmit,
  onError,
  onStateError
}: UseGoogleAutocompleteProps) {
  const [address, setAddress] = useState('')
  const autocompleteRef = useRef<HTMLInputElement>(null)
  const autocompleteService = useRef<google.maps.places.Autocomplete>()

  useEffect(() => {
    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.Autocomplete(
        autocompleteRef.current as HTMLInputElement,
        {
          types: ['geocode'],
          componentRestrictions: { country: 'us' }
        }
      )
      autocompleteService.current.addListener('place_changed', onPlaceChanged)
    }
  }, [])

  const processPlace = async (place: google.maps.places.PlaceResult): Promise<boolean> => {
    if (!place?.address_components) return false

    const stateComponent = place.address_components.find(
      component => component.types.includes('administrative_area_level_1')
    )
    const state = stateComponent?.short_name

    if (state && !SERVICEABLE_STATES.includes(state)) {
      onStateError()
      return false
    }

    if (!place.geometry?.location) return false

    setAddress(place.formatted_address || '')
    
    try {
      await onSubmit(extractAddressComponents(place))
      return true
    } catch (error) {
      onError('We encountered an issue while looking up this address.')
      return false
    }
  }

  const onPlaceChanged = () => {
    if (!autocompleteService.current) return
    
    const place = autocompleteService.current.getPlace()
    if (place?.address_components) {
      processPlace(place)
    }
  }

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return
    e.preventDefault()

    const input = autocompleteRef.current
    if (!input?.value.trim()) return

    try {
      const predictions = await getPredictions(input.value)
      if (!predictions.length) {
        onError('No address found. Please try again.')
        return
      }

      const placeDetails = await getPlaceDetails(predictions[0].place_id)
      await processPlace(placeDetails)
    } catch (error) {
      onError('Unable to find address. Please try again or select from the dropdown.')
    }
  }

  return {
    address,
    setAddress,
    autocompleteRef,
    handleKeyPress
  }
}
