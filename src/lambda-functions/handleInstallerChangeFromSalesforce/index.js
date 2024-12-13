const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const cognito = new AWS.CognitoIdentityServiceProvider();

const tableName = process.env.DYNAMO_TABLE_NAME;
const userPoolId = process.env.USER_POOL_ID;  // Replace with your User Pool ID
const userPoolGroupName = process.env.USER_POOL_GROUP_NAME;  // Replace with your User Pool Group Name

exports.handler = async (event) => {
    try {
        // Parse the JSON body
        const body = JSON.parse(event.body);
        console.log("Data from Salesforce:::", body);

        // Extract relevant fields
        const changeType = body.ChangeType;
        const id = body.id; // DynamoDB primary key
        const email = body.company_email; // Cognito email
        const password = body.password; // Cognito password
        const timestamp = new Date().toISOString();


        // Map battery data to the DynamoDB schema
        let batteries = [];
        if (body.batteries && Array.isArray(body.batteries)) {
            batteries = body.batteries.map(battery => ({
                seriesName: battery.BatteryName,
                additional_cost: battery.additional_cost,
                manufacturer: battery.manufacturer,
                spec_sheet_url: battery.spec_sheet_url,
                image_url: battery.image_url,
                power_output: battery.power_output,
                storage_capacity: battery.storage_capacity,
                default_battery: battery.default_battery
            }));
        }

        // Map panel data to the DynamoDB schema
        let panels = [];
        if (body.panels && Array.isArray(body.panels)) {
            panels = body.panels.map(panel => ({
                seriesName: panel.PanelName,
                additional_cost: panel.additional_cost,
                manufacturer: panel.manufacturer,
                dimensions_unit: panel.dimensions_unit,
                efficiency: panel.efficiency,
                height: panel.height,
                panel_specifications_url: panel.panel_specifications_url,
                pMax: panel.pmax,
                requires_watt_multiplier: panel.requires_watt_multiplier,
                warranty_years: panel.warranty_years,
                watt_multiplier: panel.watt_multiplier,
                width: panel.width,
                image_url: panel.image_url,
                default_panel: panel.default_panel
            }));
        }

        // Map inverter data to the DynamoDB schema
        let inverters = [];
        if (body.inverters && Array.isArray(body.inverters)) {
            inverters = body.inverters.map(inverter => ({
                seriesName: inverter.InverterName,
                additional_cost: inverter.additional_cost,
                manufacturer: inverter.manufacturer,
                requires_watt_multiplier: inverter.requires_watt_multiplier,
                spec_sheet_url: inverter.spec_sheet_url,
                watt_multiplier: inverter.watt_multiplier
            }));
        }

        // Map adder data to the DynamoDB schema
        let adders = [];
        if (body.adders && Array.isArray(body.adders)) {
            adders = body.adders.map(adder => ({
                type: adder.AdderName,
                cost: adder.cost,
                requires_watt_multiplier: adder.requires_watt_multiplier,
                watt_multiplier: adder.watt_multiplier
            }));
        }

        let response;

        if (changeType === 'INSERT') {

          try {
            await cognito.adminCreateUser({
                UserPoolId: userPoolId,
                Username: email,
                UserAttributes: [
                    {
                        Name: 'email',
                        Value: email
                    },
                    {
                      Name: 'custom:installerDynamoId',
                      Value: id
                  },
                    {
                        Name: 'email_verified',
                        Value: 'true'
                    },
                ],
                TemporaryPassword: password,
                MessageAction: 'SUPPRESS'
            }).promise();

            await cognito.adminSetUserPassword({
                UserPoolId: userPoolId,
                Username: email,
                Password: password,
                Permanent: true
            }).promise();

            await cognito.adminAddUserToGroup({
                UserPoolId: userPoolId,
                Username: email,
                GroupName: userPoolGroupName
            }).promise();

            console.log(`Cognito user created successfully: ${id}`);
        } catch (error) {
            console.error(`Error creating Cognito user: ${error.message}`);
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Error creating Cognito user', error: error.message })
            };
        }

            // Put item into DynamoDB table
            const params = {
                TableName: tableName,
                Item: {
                    id: id,
                    cognitoPassword: password,
                    salesforceId: body.InstallerId,
                    installer_rating: body.installer_rating,
                    google_place_id: body.google_place_id,
                    company_cover_image_url: body.company_cover_image_url,
                    company_red_line: body.company_red_line,
                    company_tag_line: body.company_tag_line,
                    company_email: body.company_email,
                    company_phone_number: body.company_phone_number,
                    company_about_text: body.company_about_text,
                    company_name: body.company_name,
                    available_batteries: batteries,
                    available_panels: panels,
                    available_inverters: inverters,
                    adders: adders,
                    years_in_business: body.years_in_business,
                    average_install_time: body.average_install_time,
                    user_agreement: body.user_agreement,
                    createdAt: timestamp,
                    updatedAt: timestamp
                }
            };
            response = await dynamodb.put(params).promise();
        } else if (changeType === 'UPDATE') {
            // Update item in DynamoDB table
            const params = {
                TableName: tableName,
                Key: { id: id },
                UpdateExpression: "set installer_rating=:r, google_place_id=:g, company_cover_image_url=:c, company_red_line=:rl, company_tag_line=:t, company_email=:e, company_phone_number=:p, company_about_text=:a, salesforceId=:s, company_name=:n, available_batteries=:b, available_panels=:pa, available_inverters=:i, adders=:ad, updatedAt=:u, years_in_business=:yb, average_install_time=:at, user_agreement=:ug",
                ExpressionAttributeValues: {
                    ':r': body.installer_rating,
                    ':g': body.google_place_id,
                    ':c': body.company_cover_image_url,
                    ':rl': body.company_red_line,
                    ':t': body.company_tag_line,
                    ':e': body.company_email,
                    ':p': body.company_phone_number,
                    ':a': body.company_about_text,
                    ':s': body.InstallerId,
                    ':n': body.company_name,
                    ':b': batteries,
                    ':pa': panels,
                    ':i': inverters,
                    ':ad': adders,
                    ':ug': body.user_agreement,
                    ':yb': body.years_in_business,
                    ':at': body.average_install_time,
                    ':u': timestamp
                },
                ReturnValues: "UPDATED_NEW"
            };
            response = await dynamodb.update(params).promise();
        } else if (changeType === 'DELETE') {
            // Delete item from DynamoDB table
            const params = {
                TableName: tableName,
                Key: { id: id }
            };
            response = await dynamodb.delete(params).promise();
        } else {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Invalid ChangeType' })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Operation successful', response: response })
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error occurred', error: error.message })
        };
    }
};