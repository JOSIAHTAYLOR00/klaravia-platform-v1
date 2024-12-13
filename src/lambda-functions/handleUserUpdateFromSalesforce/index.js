const https = require('https');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

// AppSync API endpoint and key from environment variables
const APPSYNC_API_ENDPOINT = process.env.APPSYNC_API_ENDPOINT;
const APPSYNC_API_KEY = process.env.APPSYNC_API_KEY;

// GraphQL mutation to update a User in DynamoDB through AppSync
const updateUserMutation = `
mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    first_name
    last_name
    birth_date
    email
    user_type
    phone_number
    address
    cognito_id
    home_number_of_stories
    roof_condition
    roof_material
    utility_provider
    home_owner
    home_has_foundation
    electrical_system_status
    is_hoa_property
    has_home_owners_insurance
    payment_method
    electric_bill
    estimatedAnnualUsage
    finalDesign {
      designPdf
      __typename
    }
    user_images
    projectStatus
    userStatus
    salesforceId
    installerSalesforceId
    signed_installer_contract
    electric_bill_reviewed
    google_system_size
    requires_battery
    total_system_cost
    site_survey_date
    installation_date
    final_payment_amount
    createdAt
    updatedAt
    __typename
  }
}
`;

// Function to execute the GraphQL mutation against the AppSync API
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
    // Step 1: Parse incoming data from the event body
    const userData = event;

    // Step 2: Build the input for the GraphQL mutation
    const input = {
      id: userData.dynamo_user_id,
      username: userData.username,
      first_name: userData.first_name,
      last_name: userData.last_name,
      birth_date: userData.birth_date,
      email: userData.email,
      user_type: userData.user_type,
      phone_number: userData.phone_number,
      address: userData.address,
      cognito_id: userData.cognito_id,
      home_number_of_stories: userData.home_number_of_stories,
      roof_condition: userData.roof_condition,
      roof_material: userData.roof_material,
      utility_provider: userData.utility_provider,
      home_owner: userData.home_owner,
      home_has_foundation: userData.home_has_foundation,
      electrical_system_status: userData.electrical_system_status,
      is_hoa_property: userData.is_hoa_property,
      has_home_owners_insurance: userData.has_home_owners_insurance,
      payment_method: userData.payment_method,
      electric_bill: userData.electric_bill,
      estimatedAnnualUsage: userData.estimated_annual_usage,
      finalDesign: userData.final_design,
      user_images: userData.user_images,
      projectStatus: userData.project_status,
      userStatus: userData.user_status,
      signed_installer_contract: userData.signed_installer_contract,
      electric_bill_reviewed: userData.electric_bill_reviewed,
      google_system_size: userData.google_system_size,
      requires_battery: userData.requires_battery,
      total_system_cost: userData.total_system_cost,
      site_survey_date: userData.site_survey_date,
      installation_date: userData.installation_date,
      final_payment_amount: userData.final_payment_amount,
      updated_by: userData.updated_by
    };

    // Step 3: Execute the GraphQL mutation to update the user
    if(userData.updated_by === 'SALESFORCE'){
      const result = await executeGraphQLOperation(updateUserMutation, { input });
      console.log('User updated via AppSync:', result);

      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Methods": "POST, OPTIONS"
        },
        body: JSON.stringify({ message: 'User data updated successfully', result })
      };
    }

  } catch (error) {
    console.error('Error updating user data:', error);

    // Step 5: Return an error response if something goes wrong
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: JSON.stringify({ message: 'Failed to update user data', error: error.message })
    };
  }
};