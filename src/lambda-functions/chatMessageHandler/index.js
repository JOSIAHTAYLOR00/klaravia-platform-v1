const AWS = require('aws-sdk');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const qs = require('qs');

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const secretsManager = new AWS.SecretsManager();

exports.handler = async (event) => {
    console.log('Received DynamoDB Stream event:', JSON.stringify(event, null, 2));

    if (event.Records) {
        for (const record of event.Records) {
            if (record.eventName === 'INSERT') {
                const newMessage = AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage);
                if(newMessage.sender === 'user'){
                console.log('New message:', newMessage);

                // Map DynamoDB message data to Salesforce custom object fields
                const messageDataForSalesforce = {
                    "Content__c": newMessage.content,
                    "Sender__c": newMessage.sender,
                    "Receiver__c": newMessage.receiver,
                    "Created_At__c": newMessage.createdAt,
                    "Klaravia_User__c": newMessage.klaravia_user_id,
                    "dynamo_user_id__c": newMessage.userId
                };

                await syncMessageToSalesforce(messageDataForSalesforce);
            }
            }
        }
        return `Successfully processed ${event.Records.length} records.`;
    }
    return `No records to process.`;
};

async function syncMessageToSalesforce(messageData) {
    const salesforceInstanceUrl = process.env.SF_INSTANCE_URL;
    const accessToken = await getSalesforceAccessToken();

    try {
        const response = await axios.post(`${salesforceInstanceUrl}/services/data/v58.0/sobjects/Message__c/`, messageData, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });

        console.log('Message synced to Salesforce successfully:', response.data);
    } catch (error) {
        console.error('Error syncing message to Salesforce:', error);
        throw error; // Rethrow the error for AWS Lambda to handle it appropriately.
    }
}

async function getSalesforceAccessToken() {
    const secretName = process.env.SALESFORCE_SECRET_NAME;
    const secretData = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
    const secret = JSON.parse(secretData.SecretString);
    const privateKey = secret.salesforce_private_key;

    const token = jwt.sign({
        iss: process.env.SF_CONSUMER_KEY,
        sub: process.env.SF_USER_ID,
        aud: process.env.SF_LOGIN_URL,
        exp: Math.floor(Date.now() / 1000) + (60 * 60)  // 60 minutes from now
    }, privateKey, { algorithm: 'RS256' });

    try {
        const response = await axios.post(`${process.env.SF_LOGIN_URL}/services/oauth2/token`, qs.stringify({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: token
        }), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        return response.data.access_token;
    } catch (error) {
        console.error('Error obtaining Salesforce access token:', error);
        throw error; // Rethrow the error for AWS Lambda to handle it appropriately.
    }
}