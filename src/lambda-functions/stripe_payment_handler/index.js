const AWS = require('aws-sdk');
const secretsManager = new AWS.SecretsManager();
let stripe; // Define stripe instance here to be initialized later

// Helper function to get secret from AWS Secrets Manager
const getSecret = async (secretName) => {
  try {
    const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
    if ('SecretString' in data) {
      return JSON.parse(data.SecretString);
    }
    console.log('Secret not found');
    throw new Error('Secret not found');
  } catch (error) {
    console.log(`Unable to retrieve secret: ${error.message}`);
    throw new Error(`Unable to retrieve secret: ${error.message}`);
  }
};

exports.handler = async (event) => {
  try {
    // Retrieve Stripe secret key from AWS Secrets Manager
    const secretName = 'prod/stripe_s_key'; // Replace with the name of your secret in AWS Secrets Manager
    const secrets = await getSecret(secretName);
    const stripeSecretKey = secrets.STRIPE_S_KEY;

    // Initialize Stripe with the secret key
    stripe = require('stripe')(stripeSecretKey);

    const { amount, currency, automatic_payment_methods } = JSON.parse(event.body);
    console.log('event body::', JSON.parse(event.body));
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods,
    });
    console.log('payment intent::', paymentIntent);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      },
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};