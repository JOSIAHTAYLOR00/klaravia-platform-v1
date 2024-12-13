const axios = require('axios');

exports.handler = async (event) => {
    const placeId = event.queryStringParameters.place_id;
    const apiKey = process.env.GOOGLE_API_KEY;
    
    if (!placeId || !apiKey) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'place_id query parameter and GOOGLE_API_KEY environment variable are required.' }),
        };
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}&reviews_sort=newest`;

    try {
        const response = await axios.get(url);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        console.error('Error fetching place details:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch place details' }),
        };
    }
};
