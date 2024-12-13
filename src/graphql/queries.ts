/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getState = /* GraphQL */ `query GetState($id: ID!) {
  getState(id: $id) {
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
` as GeneratedQuery<APITypes.GetStateQueryVariables, APITypes.GetStateQuery>;
export const listStates = /* GraphQL */ `query ListStates(
  $filter: ModelStateFilterInput
  $limit: Int
  $nextToken: String
) {
  listStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStatesQueryVariables,
  APITypes.ListStatesQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      utility_provider
      home_owner
      home_has_foundation
      electrical_system_status
      is_hoa_property
      has_home_owners_insurance
      installerId
      payment_method
      electric_bill
      estimatedAnnualUsage
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const getInstaller = /* GraphQL */ `query GetInstaller($id: ID!) {
  getInstaller(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInstallerQueryVariables,
  APITypes.GetInstallerQuery
>;
export const listInstallers = /* GraphQL */ `query ListInstallers(
  $filter: ModelInstallerFilterInput
  $limit: Int
  $nextToken: String
) {
  listInstallers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInstallersQueryVariables,
  APITypes.ListInstallersQuery
>;
export const getInstallerState = /* GraphQL */ `query GetInstallerState($id: ID!) {
  getInstallerState(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInstallerStateQueryVariables,
  APITypes.GetInstallerStateQuery
>;
export const listInstallerStates = /* GraphQL */ `query ListInstallerStates(
  $filter: ModelInstallerStateFilterInput
  $limit: Int
  $nextToken: String
) {
  listInstallerStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      installerId
      stateId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInstallerStatesQueryVariables,
  APITypes.ListInstallerStatesQuery
>;
export const usersByStateId = /* GraphQL */ `query UsersByStateId(
  $stateId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByStateId(
    stateId: $stateId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      utility_provider
      home_owner
      home_has_foundation
      electrical_system_status
      is_hoa_property
      has_home_owners_insurance
      installerId
      payment_method
      electric_bill
      estimatedAnnualUsage
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByStateIdQueryVariables,
  APITypes.UsersByStateIdQuery
>;
export const usersByInstallerId = /* GraphQL */ `query UsersByInstallerId(
  $installerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByInstallerId(
    installerId: $installerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      utility_provider
      home_owner
      home_has_foundation
      electrical_system_status
      is_hoa_property
      has_home_owners_insurance
      installerId
      payment_method
      electric_bill
      estimatedAnnualUsage
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByInstallerIdQueryVariables,
  APITypes.UsersByInstallerIdQuery
>;
export const installerStatesByInstallerId = /* GraphQL */ `query InstallerStatesByInstallerId(
  $installerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelInstallerStateFilterInput
  $limit: Int
  $nextToken: String
) {
  installerStatesByInstallerId(
    installerId: $installerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      installerId
      stateId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.InstallerStatesByInstallerIdQueryVariables,
  APITypes.InstallerStatesByInstallerIdQuery
>;
export const installerStatesByStateId = /* GraphQL */ `query InstallerStatesByStateId(
  $stateId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelInstallerStateFilterInput
  $limit: Int
  $nextToken: String
) {
  installerStatesByStateId(
    stateId: $stateId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      installerId
      stateId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.InstallerStatesByStateIdQueryVariables,
  APITypes.InstallerStatesByStateIdQuery
>;
