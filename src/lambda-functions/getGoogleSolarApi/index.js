const axios = require('axios');

exports.handler = async (event) => {
  const { lat, lng } = event.queryStringParameters;
  try{
    const res = axios.get(`https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${lat}&location.longitude=${lng}&requiredQuality=HIGH&key=${process.env.GOOGLE_API_KEY}`);

    const googleRes = await res;

    console.log("Response from google::", googleRes);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Methods": "GET, OPTIONS"
    },
      body: JSON.stringify(googleRes)
  };

  } catch (error){
    console.error("Error getting google solar api response::", error)
    throw new Error (error);
  }
}