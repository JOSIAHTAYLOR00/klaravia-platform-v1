const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const cognitoIdp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
  const defaultTableName = process.env.USERS_TABLE_NAME; // Default table name
  const userAttributes = event.request.userAttributes;

  // Determine group and table name based on custom:pool_group
  const poolGroup = userAttributes['custom:pool_group'] || 'dev_user'; // 'default' is a fallback group
  const tableName = process.env[`${poolGroup.toUpperCase()}_TABLE_NAME`] || defaultTableName;

  const newUser = {
    id: userAttributes.sub, // Unique identifier for the user from Cognito
    first_name: null, // Null value as first name is not provided by Cognito and it's an optional field
    last_name: null, // Null value as last name is not provided by Cognito and it's an optional field
    birth_date: null, // Null value as birth date is not provided by Cognito and it's an optional field
    email: userAttributes.email,
    phone_number: null, // Null value as phone number is not provided by Cognito and it's an optional field
    utility_provider: null, // Null value as it's an optional field
    home_owner: false, // Default value, assuming false is the default
    home_has_foundation: false, // Default value, assuming false is the default
    electrical_system_status: 'NOT_SPECIFIED', // Default value, assuming 'NOT_SPECIFIED' is the default
    is_hoa_property: false, // Default value, assuming false is the default
    has_home_owners_insurance: false, // Default value, assuming false is the default
    address: null, // Null value as address ID is not provided by Cognito and it's an optional field
    installer: null, // Null value as installer ID is not provided by Cognito and it's an optional field
  };

  // Define the DynamoDB put operation
  const putParams = {
    TableName: tableName,
    Item: newUser,
  };

  try {
    // Write the new user to DynamoDB
    await dynamoDb.put(putParams).promise();
    console.log(`User created successfully in DynamoDB table ${tableName}`);
  } catch (error) {
    console.error('Error inserting user into DynamoDB', error);
    throw new Error('Error inserting user into DynamoDB');
  }

  // Now add the user to the correct Cognito group based on poolGroup
  if (poolGroup !== 'dev_user') { // Skip if the default pool group
    const groupParams = {
      GroupName: poolGroup,
      UserPoolId: event.userPoolId,
      Username: event.userName
    };

    try {
      await cognitoIdp.adminAddUserToGroup(groupParams).promise();
      console.log(`User ${event.userName} added to Cognito group ${poolGroup}`);
    } catch (error) {
      console.error(`Error adding user to Cognito group ${poolGroup}:`, error);
      throw new Error(`Error adding user to Cognito group ${poolGroup}`);
    }
  }

  return event;
};
