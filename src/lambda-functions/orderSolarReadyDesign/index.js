const axios = require('axios');

exports.handler = async (event) => {
    const requestBody = JSON.parse(event.body);
    
    try{ 

    const getToken = async () => {
        const tokenUrl = "https://apicenter.eagleview.com/oauth2/v1/token";

        // Client credentials obtained during the API registration process
        const clientId = process.env.CLIENT_ID;
        const clientSecret = process.env.CLIENT_SECRET;

        // Preparing the Basic Authorization header
        const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

        // Payload for the request
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');

        try {
            const response = await axios.post(tokenUrl, params.toString(), {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Basic ${basicAuth}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            if (response.status === 200) {
                const token = response.data.access_token;
                return token; // Return the token directly
            } else {
                throw new Error('Failed to retrieve token');
            }
        } catch (error) {
            console.error(error);
            throw error; // Rethrow the error to be handled by the caller
        }
    };
    
    const token = await getToken(); // Await the token

    const orderSolarReadyDesign = async () => {
        try {
            const config = {
                method: 'post',
                url: 'https://apicenter.eagleview.com/solar/v1/solarready/single',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Use the awaited token
                },
                data: requestBody,
            };
            
            const response = await axios(config);

            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Methods": "POST, OPTIONS"
                },
                body: JSON.stringify(response.data),
            };
        } catch (error) {
            console.error(error);
            return {
                statusCode: error.response?.status || 500,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Methods": "POST, OPTIONS"
                  },
                body: JSON.stringify({
                    message: error.message,
                    details: error.response?.data || 'An error occurred while processing your SolarReady order request.',
                }),
            };
        }
    };


    const trackingId = await orderSolarReadyDesign().then((res) => JSON.parse(res.body).tracking_id);

    return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
          "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
        body: trackingId
    };
} catch (error) {
    // Handle any errors that occur during the API call
    return {
        statusCode: error.response?.status || 500,
        body: JSON.stringify({
            message: 'Error retreiving SolarReady order tracking id',
            error: error.message
        })
    };
}
};