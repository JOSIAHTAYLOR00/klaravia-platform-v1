const AWS = require('aws-sdk');
const secretsManager = new AWS.SecretsManager();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const qs = require('qs');

const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log('Received DynamoDB Stream event:', JSON.stringify(event, null, 2));
    
    if (!event.Records) {
        return 'No records to process.';
    }

    const processedRecords = [];
    
    for (const record of event.Records) {
        try {
            // Skip processing if this is a Salesforce-originated update
            const newItem = AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage);
            if (newItem.updated_by === "SALESFORCE") {
                console.log('Skipping Salesforce-originated update:', newItem.id);
                continue;
            }

            if (record.eventName === 'INSERT') {
                const mappedNewUserData = mapUserDataToSalesforce(newItem);
                const salesforceId = await syncNewUserToSalesforce(mappedNewUserData);
                console.log('salesforce id', salesforceId)
                if (salesforceId) {
                    await updateDynamoWithSalesforceId(newItem.id, salesforceId);
                    processedRecords.push(newItem.id);
                }
            }

            if (record.eventName === 'MODIFY') {
                const oldItem = AWS.DynamoDB.Converter.unmarshall(record.dynamodb.OldImage);
                const updatedFields = getUpdatedFields(oldItem, newItem);
                const mappedUpdatedUserData = buildMappedUserData(updatedFields);

                if (Object.keys(mappedUpdatedUserData).length > 0 && newItem.salesforceId) {
                    await syncUpdatedUserToSalesforce(mappedUpdatedUserData, newItem.salesforceId);
                    processedRecords.push(newItem.id);
                }
            }
        } catch (error) {
            console.error('Error processing record:', error);
            // Continue processing other records even if one fails
            continue;
        }
    }

    return `Successfully processed ${processedRecords.length} records.`;
};

function mapUserDataToSalesforce(newItem) {
    return {
        "Name": `${newItem.first_name} ${newItem.last_name}` || 'Un-named Lead',
        "dynamo_user_id__c": newItem.id,
        "first_name__c": newItem.first_name || 'no first name',
        "last_name__c": newItem.last_name || 'no last name',
        "birth_date__c": newItem.birth_date,
        "email__c": newItem.email,
        "user_type__c": newItem.user_type,
        "phone_number__c": newItem.phone_number,
        "home_number_of_stories__c": newItem.home_number_of_stories,
        "roof_condition__c": newItem.roof_condition,
        "roof_material__c": newItem.roof_material,
        "address__c": newItem.address,
        "cognito_id__c": newItem.cognito_id,
        "home_owner__c": newItem.home_owner,
        "home_has_foundation__c": newItem.home_has_foundation,
        "electrical_system_status__c": newItem.electrical_system_status,
        "is_hoa_property__c": newItem.is_hoa_property,
        "has_home_owners_insurance__c": newItem.has_home_owners_insurance,
        "payment_method__c": newItem.payment_method,
        "electric_bill__c": newItem.electric_bill,
        "estimated_annual_usage__c": newItem.estimatedAnnualUsage,
        "initial_design__c": newItem.initialDesign,
        "final_design__c": newItem.finalDesign,
        "user_images__c": newItem.user_images,
        "project_status__c": newItem.projectStatus,
        "user_status__c": newItem.userStatus,
        "Installer__c": newItem.installerSalesforceId,
        "electric_bill_reviewed__c": newItem.electric_bill_reviewed,
        "google_system_size__c": newItem.google_system_size,
        "requires_battery__c": newItem.requires_battery,
        "total_system_cost__c": newItem.total_system_cost
    };
}

async function syncNewUserToSalesforce(userData) {
    const salesforceInstanceUrl = process.env.SF_INSTANCE_URL;
    const accessToken = await getSalesforceAccessToken();

    try {
        const response = await axios.post(
            `${salesforceInstanceUrl}/services/data/v58.0/sobjects/Klaravia_User__c/`, 
            userData, 
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        
        console.log('Data synced to Salesforce successfully:', response.data.id);
        return response.data.id;
    } catch (error) {
        console.error('Error syncing data to Salesforce:', error.response?.data || error.message);
        return null;
    }
}

async function updateDynamoWithSalesforceId(userId, salesforceId) {
  console.log('attempting to update dynamo with the salesforceId', salesforceId, userId);
    const params = {
        TableName: process.env.DYNAMO_TABLE_NAME,
        Key: { id: userId },
        UpdateExpression: 'set salesforceId = :sfId, updated_by = :uB',
        ExpressionAttributeValues: {
            ':sfId': salesforceId,
            ':uB': 'SALESFORCE',
        },
        ReturnValues: 'NONE'
    };

    try {
        await dynamoDB.update(params).promise();
        console.log('DynamoDB record updated with Salesforce ID');
    } catch (error) {
        console.error('Error updating DynamoDB:', error);
        throw error;
    }
}

async function syncUpdatedUserToSalesforce(userData, salesforceId) {
  const salesforceInstanceUrl = process.env.SF_INSTANCE_URL;
  const accessToken = await getSalesforceAccessToken();

  try {
      await axios.patch(`${salesforceInstanceUrl}/services/data/v58.0/sobjects/Klaravia_User__c/${salesforceId}/`, userData, {
          headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
          },
      });
      console.log('Data synced to Salesforce successfully');
  } catch (error) {
      console.error('Error syncing data to Salesforce:', error);
  }
}

async function getSalesforceAccessToken() {

  const secretName = 'salesforce_private_key';
  const secretData = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
    const secret = secretData.SecretString;
    const privateKey = JSON.parse(secret).salesforce_private_key;

  const token = jwt.sign({
    iss: process.env.ISS,
    sub: process.env.SUB,
    aud: 'https://login.salesforce.com',
    exp: Math.floor(Date.now() / 1000) + (60 * 60)  // 60 minutes from now
  }, privateKey, { algorithm: 'RS256' });

  try {
    const response = await axios.post('https://login.salesforce.com/services/oauth2/token', 
      qs.stringify({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: token
      }), 
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    return response.data.access_token;
  } catch (error) {
    throw new Error(`Failed to get access token: ${error.response ? error.response.data : error.message}`);
  }
}

function getUpdatedFields(oldItem, newItem) {
  const updatedFields = {};
  for (const key in newItem) {
    if (newItem[key] !== oldItem[key]) {
      updatedFields[key] = newItem[key];
    }
  }
  return updatedFields;
}

function buildMappedUserData(updatedFields) {
  const mappedUserData = {};
  if ('first_name' in updatedFields && 'last_name' in updatedFields) mappedUserData["Name"] = `${updatedFields.first_name} ${updatedFields.last_name}` || 'Un-named Lead';
  if ('id' in updatedFields) mappedUserData["dynamo_user_id__c"] = updatedFields.id;
  if ('first_name' in updatedFields) mappedUserData["first_name__c"] = updatedFields.first_name;
  if ('last_name' in updatedFields) mappedUserData["last_name__c"] = updatedFields.last_name;
  if ('email' in updatedFields) mappedUserData["email__c"] = updatedFields.email;
  if ('user_type' in updatedFields) mappedUserData["user_type__c"] = updatedFields.user_type;
  if ('phone_number' in updatedFields) mappedUserData["phone_number__c"] = updatedFields.phone_number;
  if ('home_number_of_stories' in updatedFields) mappedUserData["home_number_of_stories__c"] = updatedFields.home_number_of_stories;
  if ('roof_condition' in updatedFields) mappedUserData["roof_condition__c"] = updatedFields.roof_condition;
  if ('roof_material' in updatedFields) mappedUserData["roof_material__c"] = updatedFields.roof_material;
  if ('address' in updatedFields) mappedUserData["address__c"] = updatedFields.address;
  if ('cognito_id' in updatedFields) mappedUserData["cognito_id__c"] = updatedFields.cognito_id;
  // TODO: add state
  if ('home_owner' in updatedFields) mappedUserData["home_owner__c"] = updatedFields.home_owner;
  if ('home_has_foundation' in updatedFields) mappedUserData["home_has_foundation__c"] = updatedFields.home_has_foundation;
  if ('electrical_system_status' in updatedFields) mappedUserData["electrical_system_status__c"] = updatedFields.electrical_system_status;
  if ('is_hoa_property' in updatedFields) mappedUserData["is_hoa_property__c"] = updatedFields.is_hoa_property;
  if ('has_home_owners_insurance' in updatedFields) mappedUserData["has_home_owners_insurance__c"] = updatedFields.has_home_owners_insurance;
  // TODO: add installer relationship
  if ('payment_method' in updatedFields) mappedUserData["payment_method__c"] = updatedFields.payment_method;
  if ('electric_bill' in updatedFields) mappedUserData["electric_bill__c"] = updatedFields.electric_bill;
  if ('estimatedAnnualUsage' in updatedFields) mappedUserData["estimated_annual_usage__c"] = updatedFields.estimatedAnnualUsage;
  if ('initialDesign' in updatedFields) mappedUserData["initial_design__c"] = JSON.stringify(updatedFields.initialDesign);
  if ('finalDesign' in updatedFields) mappedUserData["final_design__c"] = JSON.stringify(updatedFields.finalDesign);
  if ('user_images' in updatedFields) mappedUserData["user_images__c"] = JSON.stringify(updatedFields.user_images);
  if ('projectStatus' in updatedFields) mappedUserData["project_status__c"] = updatedFields.projectStatus;
  if ('userStatus' in updatedFields) mappedUserData["user_status__c"] = updatedFields.userStatus;
  if ('installerSalesforceId' in updatedFields) mappedUserData["Installer__c"] = updatedFields.installerSalesforceId;
  if ('electric_bill_reviewed' in updatedFields) mappedUserData["electric_bill_reviewed__c"] = updatedFields.electric_bill_reviewed;
  if ('google_system_size' in updatedFields) mappedUserData["google_system_size__c"] = updatedFields.google_system_size;
  if ('requires_battery' in updatedFields) mappedUserData["requires_battery__c"] = updatedFields.requires_battery;
  if ('total_system_cost' in updatedFields) mappedUserData["total_system_cost__c"] = updatedFields.total_system_cost;
  // if ('updated_by' in updatedFields) mappedUserData["updated_by__c"] = updatedFields.updated_by;
  
  return mappedUserData;
}