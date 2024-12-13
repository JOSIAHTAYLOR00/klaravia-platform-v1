const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const cognitoIdp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
  const defaultTableName = process.env.DEV_USER_TABLE_NAME; // Default table name
  const userAttributes = event.request.userAttributes;
  const timestamp = new Date().toISOString();

  // Determine group and table name based on custom:pool_group
  const poolGroup = userAttributes['custom:pool_group'] || 'dev_user'; // 'default' is a fallback group
  const tableName = process.env[`${poolGroup.toUpperCase()}_TABLE_NAME`] || defaultTableName;
  console.log('POOL GROUP:::', poolGroup)
  const newUser = {
    id: userAttributes['custom:user_id'], // Unique identifier for the user from Cognito
    email: userAttributes.email,
    phone_number: userAttributes.phone_number,
    first_name: userAttributes['custom:first_name'], // Null value as first name is not provided by Cognito and it's an optional field
    last_name: userAttributes['custom:last_name'], // Null value as last name is not provided by Cognito and it's an optional field
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  const newInstaller = {
    id: userAttributes.sub,
    email: userAttributes.email,
    company_name: userAttributes['custom:business_name'],
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  try {
    if (poolGroup === 'dev_installer') {
      // Create a new installer
      const putParams = {
        TableName: tableName,
        Item: newInstaller,
      };
      await dynamoDb.put(putParams).promise();
      console.log(`Installer created successfully in DynamoDB table ${tableName}`);
    } else {
      // Update an existing user
      const updateParams = {
        TableName: tableName,
        Key: { id: newUser.id },
        UpdateExpression: 'set #phone_number = :phone_number, #email = :email, #first_name = :first_name, #last_name = :last_name, #updatedAt = :updatedAt',
        ExpressionAttributeNames: {
          '#email': 'email',
          '#phone_number': 'phone_number',
          '#first_name': 'first_name',
          '#last_name': 'last_name',
          '#updatedAt': 'updatedAt',
        },
        ExpressionAttributeValues: {
          ':email': newUser.email,
          ':phone_number': newUser.phone_number,
          ':first_name': newUser.first_name,
          ':last_name': newUser.last_name,
          ':updatedAt': newUser.updatedAt,
        },
        ReturnValues: 'UPDATED_NEW',
      };
      console.log("UPDATE PARAMS:::", updateParams);
      
      await dynamoDb.update(updateParams).promise();
      console.log(`User updated successfully in DynamoDB table ${tableName}`);
    }
  } catch (error) {
    console.error('Error processing user in DynamoDB', error);
    throw new Error('Error processing user in DynamoDB');
  }

  // Now add the user to the correct Cognito group based on poolGroup
  const groupParams = {
    GroupName: poolGroup,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };

  try {
    await cognitoIdp.adminAddUserToGroup(groupParams).promise();
    console.log(`User ${event.userName} added to Cognito group ${poolGroup}`);
  } catch (error) {
    console.error(`Error adding user to Cognito group ${poolGroup}:`, error);
    throw new Error(`Error adding user to Cognito group ${poolGroup}`);
  }

  return event;
};