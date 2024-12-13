// Import axios
import axios from 'axios';

export const handler = async (event) => {
    // Extract lat and lng query parameters from the event
    const { lat, lng } = event.queryStringParameters;

    // Use lat and lng in your API endpoint or as parameters
    // Here's an example API endpoint that might use these parameters
    const apiEndpoint = `https://developer.nrel.gov/api/utility_rates/v3.json?api_key=DEMO_KEY&lat=${lat}&lon=${lng}`;

    try {
        // Call the API endpoint using axios
        const response = await axios.get(apiEndpoint);
        
        // Return the API response
        return {
            statusCode: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
              "Access-Control-Allow-Methods": "GET, OPTIONS"
          },
            body: response.data.outputs.residential
        };
    } catch (error) {
        // Handle any errors that occur during the API call
        return {
            statusCode: error.response?.status || 500,
            body: JSON.stringify({
                message: 'Error calling the API',
                error: error.message
            })
        };
    }
};