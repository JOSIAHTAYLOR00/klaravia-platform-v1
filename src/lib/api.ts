export async function callGoogleSolarApi(lat: string, lng: string) {
  try {
    const response = await fetch(`https://4zpask5mw0.execute-api.us-east-2.amazonaws.com/dev/getGoogleSolarApi?lat=${lat}&lng=${lng}`)
    return response.json()
  } catch (error) {
    console.error("Error calling Google Solar API:", error)
    throw error
  }
}