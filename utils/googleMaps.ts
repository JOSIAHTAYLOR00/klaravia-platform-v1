async function getPredictions(input: string): Promise<google.maps.places.AutocompletePrediction[]> {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.AutocompleteService()
    service.getPlacePredictions(
      {
        input,
        componentRestrictions: { country: 'us' },
        types: ['geocode']
      },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          resolve(results)
        } else {
          reject(status)
        }
      }
    )
  })
}

async function getPlaceDetails(placeId: string): Promise<google.maps.places.PlaceResult> {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(
      document.createElement('div')
    )
    service.getDetails(
      {
        placeId,
        fields: ['address_components', 'formatted_address', 'geometry']
      },
      (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && place) {
          resolve(place)
        } else {
          reject(status)
        }
      }
    )
  })
}