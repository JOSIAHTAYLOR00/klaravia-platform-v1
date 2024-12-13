/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createState = /* GraphQL */ `mutation CreateState(
  $input: CreateStateInput!
  $condition: ModelStateConditionInput
) {
  createState(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    installerStates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStateMutationVariables,
  APITypes.CreateStateMutation
>;
export const updateState = /* GraphQL */ `mutation UpdateState(
  $input: UpdateStateInput!
  $condition: ModelStateConditionInput
) {
  updateState(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    installerStates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStateMutationVariables,
  APITypes.UpdateStateMutation
>;
export const deleteState = /* GraphQL */ `mutation DeleteState(
  $input: DeleteStateInput!
  $condition: ModelStateConditionInput
) {
  deleteState(input: $input, condition: $condition) {
    id
    name
    users {
      nextToken
      __typename
    }
    installerStates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStateMutationVariables,
  APITypes.DeleteStateMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    first_name
    last_name
    birth_date
    cognito_id
    email
    user_type
    phone_number
    home_number_of_stories
    roof_condition
    roof_material
    address
    stateId
    state {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    utility_provider
    home_owner
    home_has_foundation
    electrical_system_status
    is_hoa_property
    has_home_owners_insurance
    installerId
    installer {
      id
      cognitoPassword
      company_name
      company_address
      company_phone_number
      company_email
      company_tag_line
      company_red_line
      company_about_text
      company_cover_image_url
      google_place_id
      installer_rating
      salesforceId
      years_in_business
      average_install_time
      user_agreement
      createdAt
      updatedAt
      __typename
    }
    payment_method
    electric_bill
    estimatedAnnualUsage
    initialDesign {
      jobId
      productId
      imageUrl
      __typename
    }
    finalDesign {
      designPdf
      __typename
    }
    user_images
    projectStatus
    userStatus
    measurementsOrderReportId
    salesforceId
    installerSalesforceId
    signed_installer_contract
    electric_bill_reviewed
    google_system_size
    requires_battery
    selected_battery {
      manufacturer
      seriesName
      additional_cost
      spec_sheet_url
      image_url
      power_output
      storage_capacity
      default_battery
      __typename
    }
    total_system_cost
    final_payment_amount
    site_survey_date
    installation_date
    final_payment_invoice
    user_agreed_to_final_design
    updated_by
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    first_name
    last_name
    birth_date
    cognito_id
    email
    user_type
    phone_number
    home_number_of_stories
    roof_condition
    roof_material
    address
    stateId
    state {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    utility_provider
    home_owner
    home_has_foundation
    electrical_system_status
    is_hoa_property
    has_home_owners_insurance
    installerId
    installer {
      id
      cognitoPassword
      company_name
      company_address
      company_phone_number
      company_email
      company_tag_line
      company_red_line
      company_about_text
      company_cover_image_url
      google_place_id
      installer_rating
      salesforceId
      years_in_business
      average_install_time
      user_agreement
      createdAt
      updatedAt
      __typename
    }
    payment_method
    electric_bill
    estimatedAnnualUsage
    initialDesign {
      jobId
      productId
      imageUrl
      __typename
    }
    finalDesign {
      designPdf
      __typename
    }
    user_images
    projectStatus
    userStatus
    measurementsOrderReportId
    salesforceId
    installerSalesforceId
    signed_installer_contract
    electric_bill_reviewed
    google_system_size
    requires_battery
    selected_battery {
      manufacturer
      seriesName
      additional_cost
      spec_sheet_url
      image_url
      power_output
      storage_capacity
      default_battery
      __typename
    }
    total_system_cost
    final_payment_amount
    site_survey_date
    installation_date
    final_payment_invoice
    user_agreed_to_final_design
    updated_by
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    first_name
    last_name
    birth_date
    cognito_id
    email
    user_type
    phone_number
    home_number_of_stories
    roof_condition
    roof_material
    address
    stateId
    state {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    utility_provider
    home_owner
    home_has_foundation
    electrical_system_status
    is_hoa_property
    has_home_owners_insurance
    installerId
    installer {
      id
      cognitoPassword
      company_name
      company_address
      company_phone_number
      company_email
      company_tag_line
      company_red_line
      company_about_text
      company_cover_image_url
      google_place_id
      installer_rating
      salesforceId
      years_in_business
      average_install_time
      user_agreement
      createdAt
      updatedAt
      __typename
    }
    payment_method
    electric_bill
    estimatedAnnualUsage
    initialDesign {
      jobId
      productId
      imageUrl
      __typename
    }
    finalDesign {
      designPdf
      __typename
    }
    user_images
    projectStatus
    userStatus
    measurementsOrderReportId
    salesforceId
    installerSalesforceId
    signed_installer_contract
    electric_bill_reviewed
    google_system_size
    requires_battery
    selected_battery {
      manufacturer
      seriesName
      additional_cost
      spec_sheet_url
      image_url
      power_output
      storage_capacity
      default_battery
      __typename
    }
    total_system_cost
    final_payment_amount
    site_survey_date
    installation_date
    final_payment_invoice
    user_agreed_to_final_design
    updated_by
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createInstaller = /* GraphQL */ `mutation CreateInstaller(
  $input: CreateInstallerInput!
  $condition: ModelInstallerConditionInput
) {
  createInstaller(input: $input, condition: $condition) {
    id
    cognitoPassword
    company_name
    company_address
    company_phone_number
    company_email
    company_tag_line
    company_red_line
    company_about_text
    company_cover_image_url
    available_panels {
      manufacturer
      seriesName
      additional_cost
      requires_watt_multiplier
      watt_multiplier
      pMax
      width
      height
      dimensionsUnit
      efficiency
      panelSpecificationsUrl
      warrantyYears
      image_url
      default_panel
      __typename
    }
    available_inverters {
      manufacturer
      seriesName
      additional_cost
      requires_watt_multiplier
      watt_multiplier
      spec_sheet_url
      __typename
    }
    available_batteries {
      manufacturer
      seriesName
      additional_cost
      spec_sheet_url
      image_url
      power_output
      storage_capacity
      default_battery
      __typename
    }
    adders {
      type
      cost
      requires_watt_multiplier
      watt_multiplier
      __typename
    }
    installerStates {
      nextToken
      __typename
    }
    users {
      nextToken
      __typename
    }
    google_place_id
    installer_reviews {
      id
      pfp
      name
      rating
      title
      review
      __typename
    }
    installer_rating
    salesforceId
    years_in_business
    average_install_time
    user_agreement
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateInstallerMutationVariables,
  APITypes.CreateInstallerMutation
>;
export const updateInstaller = /* GraphQL */ `mutation UpdateInstaller(
  $input: UpdateInstallerInput!
  $condition: ModelInstallerConditionInput
) {
  updateInstaller(input: $input, condition: $condition) {
    id
    cognitoPassword
    company_name
    company_address
    company_phone_number
    company_email
    company_tag_line
    company_red_line
    company_about_text
    company_cover_image_url
    available_panels {
      manufacturer
      seriesName
      additional_cost
      requires_watt_multiplier
      watt_multiplier
      pMax
      width
      height
      dimensionsUnit
      efficiency
      panelSpecificationsUrl
      warrantyYears
      image_url
      default_panel
      __typename
    }
    available_inverters {
      manufacturer
      seriesName
      additional_cost
      requires_watt_multiplier
      watt_multiplier
      spec_sheet_url
      __typename
    }
    available_batteries {
      manufacturer
      seriesName
      additional_cost
      spec_sheet_url
      image_url
      power_output
      storage_capacity
      default_battery
      __typename
    }
    adders {
      type
      cost
      requires_watt_multiplier
      watt_multiplier
      __typename
    }
    installerStates {
      nextToken
      __typename
    }
    users {
      nextToken
      __typename
    }
    google_place_id
    installer_reviews {
      id
      pfp
      name
      rating
      title
      review
      __typename
    }
    installer_rating
    salesforceId
    years_in_business
    average_install_time
    user_agreement
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateInstallerMutationVariables,
  APITypes.UpdateInstallerMutation
>;
export const deleteInstaller = /* GraphQL */ `mutation DeleteInstaller(
  $input: DeleteInstallerInput!
  $condition: ModelInstallerConditionInput
) {
  deleteInstaller(input: $input, condition: $condition) {
    id
    cognitoPassword
    company_name
    company_address
    company_phone_number
    company_email
    company_tag_line
    company_red_line
    company_about_text
    company_cover_image_url
    available_panels {
      manufacturer
      seriesName
      additional_cost
      requires_watt_multiplier
      watt_multiplier
      pMax
      width
      height
      dimensionsUnit
      efficiency
      panelSpecificationsUrl
      warrantyYears
      image_url
      default_panel
      __typename
    }
    available_inverters {
      manufacturer
      seriesName
      additional_cost
      requires_watt_multiplier
      watt_multiplier
      spec_sheet_url
      __typename
    }
    available_batteries {
      manufacturer
      seriesName
      additional_cost
      spec_sheet_url
      image_url
      power_output
      storage_capacity
      default_battery
      __typename
    }
    adders {
      type
      cost
      requires_watt_multiplier
      watt_multiplier
      __typename
    }
    installerStates {
      nextToken
      __typename
    }
    users {
      nextToken
      __typename
    }
    google_place_id
    installer_reviews {
      id
      pfp
      name
      rating
      title
      review
      __typename
    }
    installer_rating
    salesforceId
    years_in_business
    average_install_time
    user_agreement
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteInstallerMutationVariables,
  APITypes.DeleteInstallerMutation
>;
export const createInstallerState = /* GraphQL */ `mutation CreateInstallerState(
  $input: CreateInstallerStateInput!
  $condition: ModelInstallerStateConditionInput
) {
  createInstallerState(input: $input, condition: $condition) {
    id
    installer {
      id
      cognitoPassword
      company_name
      company_address
      company_phone_number
      company_email
      company_tag_line
      company_red_line
      company_about_text
      company_cover_image_url
      google_place_id
      installer_rating
      salesforceId
      years_in_business
      average_install_time
      user_agreement
      createdAt
      updatedAt
      __typename
    }
    state {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    installerId
    stateId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateInstallerStateMutationVariables,
  APITypes.CreateInstallerStateMutation
>;
export const updateInstallerState = /* GraphQL */ `mutation UpdateInstallerState(
  $input: UpdateInstallerStateInput!
  $condition: ModelInstallerStateConditionInput
) {
  updateInstallerState(input: $input, condition: $condition) {
    id
    installer {
      id
      cognitoPassword
      company_name
      company_address
      company_phone_number
      company_email
      company_tag_line
      company_red_line
      company_about_text
      company_cover_image_url
      google_place_id
      installer_rating
      salesforceId
      years_in_business
      average_install_time
      user_agreement
      createdAt
      updatedAt
      __typename
    }
    state {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    installerId
    stateId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateInstallerStateMutationVariables,
  APITypes.UpdateInstallerStateMutation
>;
export const deleteInstallerState = /* GraphQL */ `mutation DeleteInstallerState(
  $input: DeleteInstallerStateInput!
  $condition: ModelInstallerStateConditionInput
) {
  deleteInstallerState(input: $input, condition: $condition) {
    id
    installer {
      id
      cognitoPassword
      company_name
      company_address
      company_phone_number
      company_email
      company_tag_line
      company_red_line
      company_about_text
      company_cover_image_url
      google_place_id
      installer_rating
      salesforceId
      years_in_business
      average_install_time
      user_agreement
      createdAt
      updatedAt
      __typename
    }
    state {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    installerId
    stateId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteInstallerStateMutationVariables,
  APITypes.DeleteInstallerStateMutation
>;
