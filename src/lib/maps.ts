import {Location} from '@/types/address';

export function extractAddressComponents(place: google.maps.places.PlaceResult): Location {
  const getComponent = (type: string) => 
    place.address_components?.find(component => 
      component.types.includes(type))?.long_name || ''

  return {
    long_name: place.formatted_address || '',
    street: getComponent('route'),
    city: getComponent('locality'),
    postal_code: getComponent('postal_code'),
    county: getComponent('administrative_area_level_2'),
    state: getComponent('administrative_area_level_1'),
    lat: place.geometry?.location?.lat() || 0,
    lng: place.geometry?.location?.lng() || 0
  }
}