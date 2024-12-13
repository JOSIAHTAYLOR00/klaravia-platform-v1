const axios = require('axios');

exports.handler = async (event) => {
    const trackingId = event.queryStringParameters.trackingId;
    
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

    const getSolarReadyStatus = async () => {
      try {
          const config = {
              method: 'get',
              url: `https://apicenter.eagleview.com/solar/v1/solarready/status/${trackingId}`,
              headers: { 
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              },
          };
  
          const response = await axios(config);


          return {
              statusCode: 200,
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                "Access-Control-Allow-Methods": "GET, OPTIONS"
            },
              body: JSON.stringify({ status: response.data.status, jobStatus: response.data.jobs[0].status})
          };
      } catch (error) {
          // Handle any errors that occur during the API call
          return {
              statusCode: error.response?.status || 500,
              body: JSON.stringify({
                  message: 'Error getting the SolarReady status',
                  error: error.message
              })
          };
      }
  };

  const statusObject = await getSolarReadyStatus().then((res) => res.body);

    return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
      },
        body: statusObject
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