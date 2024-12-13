/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateState = /* GraphQL */ `subscription OnCreateState($filter: ModelSubscriptionStateFilterInput) {
  onCreateState(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStateSubscriptionVariables,
  APITypes.OnCreateStateSubscription
>;
export const onUpdateState = /* GraphQL */ `subscription OnUpdateState($filter: ModelSubscriptionStateFilterInput) {
  onUpdateState(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStateSubscriptionVariables,
  APITypes.OnUpdateStateSubscription
>;
export const onDeleteState = /* GraphQL */ `subscription OnDeleteState($filter: ModelSubscriptionStateFilterInput) {
  onDeleteState(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStateSubscriptionVariables,
  APITypes.OnDeleteStateSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateInstaller = /* GraphQL */ `subscription OnCreateInstaller($filter: ModelSubscriptionInstallerFilterInput) {
  onCreateInstaller(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInstallerSubscriptionVariables,
  APITypes.OnCreateInstallerSubscription
>;
export const onUpdateInstaller = /* GraphQL */ `subscription OnUpdateInstaller($filter: ModelSubscriptionInstallerFilterInput) {
  onUpdateInstaller(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInstallerSubscriptionVariables,
  APITypes.OnUpdateInstallerSubscription
>;
export const onDeleteInstaller = /* GraphQL */ `subscription OnDeleteInstaller($filter: ModelSubscriptionInstallerFilterInput) {
  onDeleteInstaller(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInstallerSubscriptionVariables,
  APITypes.OnDeleteInstallerSubscription
>;
export const onCreateInstallerState = /* GraphQL */ `subscription OnCreateInstallerState(
  $filter: ModelSubscriptionInstallerStateFilterInput
) {
  onCreateInstallerState(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInstallerStateSubscriptionVariables,
  APITypes.OnCreateInstallerStateSubscription
>;
export const onUpdateInstallerState = /* GraphQL */ `subscription OnUpdateInstallerState(
  $filter: ModelSubscriptionInstallerStateFilterInput
) {
  onUpdateInstallerState(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInstallerStateSubscriptionVariables,
  APITypes.OnUpdateInstallerStateSubscription
>;
export const onDeleteInstallerState = /* GraphQL */ `subscription OnDeleteInstallerState(
  $filter: ModelSubscriptionInstallerStateFilterInput
) {
  onDeleteInstallerState(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInstallerStateSubscriptionVariables,
  APITypes.OnDeleteInstallerStateSubscription
>;
