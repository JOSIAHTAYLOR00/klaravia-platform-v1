const axios = require('axios');

const getToken = async () => {
  const tokenUrl = "https://apicenter.eagleview.com/oauth2/v1/token";

  // Client credentials obtained during the API registration process
  const clientId = '0oasc1mrjzSMkvWxL2p7';
  const clientSecret = 'Ey2kbvZXHBENtqNT46qiQ5lRLmrZ86gHia0mYI4BQJVilbkpc_VUQImejtpU_ku5';

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

const retreiveAvailableProducts = async () => {
  const authToken = await getToken();

  try {
    const response = await axios.post(
      'https://sandbox.apicenter.eagleview.com/solar/v1/truedesign/productAvailability/available',
      {
        "address": "5970 Coker Ave, Cocoa, Florida 32927, US",
        "latitude": 0,
        "longitude": 0,
        "productList": [
          11,62,90,91
        ]
      },
      {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
        }
      }
    )
    return response.data
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const initializeSession = async () => {
  const authToken = await getToken();

  try {
    const response = await axios.post(
      'https://sandbox.apicenter.eagleview.com/solar/v1/truedesign/init',
      {
        "address": "5970 Coker Ave, Cocoa, Florida 32927, US",
        "latitude": 0,
        "longitude": 0,
        "productList": [
          11,62,90,91
        ]
      },
      {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
        }
      }
    )
    return response.data
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const orderTrueDesign = async () => {
  const authToken = await getToken();

  try {
    const response = await axios.post(
      'https://sandbox.apicenter.eagleview.com/v2/Order/PlaceOrder',
      {
        "OrderReports": [
            {
                "ReportAddresses": [
                    {
                        "Address": "102 Teal Dr",
                        "City": "Clute",
                        "State": "TX",
                        "Zip": "77531",
                        "Country": "US",
                        "Latitude": 29.035003,
                        "Longitude": -95.4216058,
                        "AddressType": 1,
                        "VerifierUsedId": null,
                        "MapperUsedId": null,
                        "VerificationResultTypeId": null
                    }
                ],
                "ReportAttibutes": null,
                "BuildingId": 4,
                "PrimaryProductId": 91,
                "DeliveryProductId": 8,
                "AddOnProductIds": null,
                "MeasurementInstructionType": 1,
                "ClaimNumber": null,
                "ClaimInfo": null,
                "BatchId": null,
                "CatId": null,
                "ChangesInLast4Years": false,
                "PONumber": null,
                "Comments": null,
                "ReferenceID": null,
                "InsuredName": null,
                "UpgradeFromReportId": null,
                "PolicyNumber": null
            }
        ],
        "PromoCode": null,
        "PlaceOrderUser": null,
        "CreditCardData": null
    },
      {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
        }
      }
    )
    return response.data
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// getToken().then(() => {retreiveAvailableProducts().then((res) => {console.log(res)})})

orderTrueDesign().then((res) => console.log(res))

// getToken().then((res) => {console.log(res)})