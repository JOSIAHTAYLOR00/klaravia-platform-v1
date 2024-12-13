const AWS = require('aws-sdk');
const secretsManager = new AWS.SecretsManager();
let stripe; // Define Stripe instance to initialize later

// Helper function to get secret from AWS Secrets Manager
const getSecret = async (secretName) => {
  try {
    const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
    if ('SecretString' in data) {
      return JSON.parse(data.SecretString);
    }
    throw new Error('Secret not found');
  } catch (error) {
    throw new Error(`Unable to retrieve secret: ${error.message}`);
  }
};

exports.handler = async (event) => {
  try {
    // Retrieve secrets from AWS Secrets Manager
    const secretName = 'prod/stripe_s_key'; // Replace with the name of your secret in AWS Secrets Manager
    const secrets = await getSecret(secretName);
    const stripeKey = secrets.STRIPE_S_KEY;
    const stripeSigningSecret = secrets.STRIPE_SIGNING_SECRET;

    // Initialize Stripe with the secret key
    stripe = require('stripe')(stripeKey);

    // Retrieve the Stripe signature from the event headers
    const sig = event.headers['Stripe-Signature'];

    let stripeEvent;

    // Verify the Stripe event using the signature and the endpoint secret
    stripeEvent = stripe.webhooks.constructEvent(event.body, sig, stripeSigningSecret);

    console.log('Webhook verified successfully.');

    // Log the relevant webhook information
    console.log('Event Type:', stripeEvent.type);
    console.log('Event ID:', stripeEvent.id);
    console.log('Event Data:', JSON.stringify(stripeEvent.data, null, 2));

    // Handle the event
    switch (stripeEvent.type) {
      case 'payment_intent.succeeded':
        console.log('PaymentIntent was successful!');
        break;
      // Handle other event types
      default:
        console.log(`Unhandled event type ${stripeEvent.type}`);
    }

    // Return a 200 response to indicate the webhook was handled successfully
    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };

  } catch (error) {
    console.error('Error verifying Stripe webhook:', error.message);
    // Return a 400 response to indicate the webhook was not processed correctly
    return {
      statusCode: 400,
      body: `Webhook Error: ${error.message}`,
    };
  }
};