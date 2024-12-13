const https = require('https');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const APPSYNC_API_ENDPOINT = process.env.APPSYNC_API_ENDPOINT;
const APPSYNC_API_KEY = process.env.APPSYNC_API_KEY;

const createMessageMutation = `
mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    userId
    klaravia_user_id
    content
    sender
    receiver
    createdAt
    updatedAt
    __typename
  }
}
`;

const executeGraphQLOperation = (query, variables) => {
  return new Promise((resolve, reject) => {
    const req = https.request(
      new URL(APPSYNC_API_ENDPOINT),
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': APPSYNC_API_KEY,
        },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(JSON.parse(data)));
      }
    );
    req.on('error', reject);
    req.write(JSON.stringify({ query, variables }));
    req.end();
  });
};

exports.handler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  try {
    const message = JSON.parse(event.body);

    const input = {
      id: uuidv4(),
      userId: message.Dynamo_User_Id,
      klaravia_user_id: message.Klaravia_user_id,
      content: message.Content,
      sender: message.Sender,
      receiver: message.Receiver,
      createdAt: new Date().toISOString(),
    };

    const result = await executeGraphQLOperation(createMessageMutation, { input });
    console.log('Message created via AppSync:', result);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: JSON.stringify({ message: 'Message created successfully', result })
    };
  } catch (error) {
    console.error('Error creating message:', error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: JSON.stringify({ message: 'Failed to create message', error: error.message })
    };
  }
};