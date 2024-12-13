/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStateInput = {
  id?: string | null,
  name: string,
};

export type ModelStateConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelStateConditionInput | null > | null,
  or?: Array< ModelStateConditionInput | null > | null,
  not?: ModelStateConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type State = {
  __typename: "State",
  id: string,
  name: string,
  users?: ModelUserConnection | null,
  installerStates?: ModelInstallerStateConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  username?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  birth_date?: string | null,
  cognito_id?: string | null,
  email?: string | null,
  user_type?: UserType | null,
  phone_number?: string | null,
  home_number_of_stories?: string | null,
  roof_condition?: RoofCondition | null,
  roof_material?: RoofMaterial | null,
  address?: string | null,
  stateId?: string | null,
  state?: State | null,
  utility_provider?: string | null,
  home_owner?: boolean | null,
  home_has_foundation?: boolean | null,
  electrical_system_status?: ElectricalStatus | null,
  is_hoa_property?: boolean | null,
  has_home_owners_insurance?: boolean | null,
  installerId?: string | null,
  installer?: Installer | null,
  payment_method?: PaymentMethod | null,
  electric_bill?: string | null,
  estimatedAnnualUsage?: string | null,
  initialDesign?: InitialDesign | null,
  finalDesign?: FinalDesign | null,
  user_images?: Array< string | null > | null,
  projectStatus?: ProjectStatus | null,
  userStatus?: UserStatus | null,
  measurementsOrderReportId?: string | null,
  salesforceId?: string | null,
  installerSalesforceId?: string | null,
  signed_installer_contract?: boolean | null,
  electric_bill_reviewed?: boolean | null,
  google_system_size?: number | null,
  requires_battery?: boolean | null,
  selected_battery?: Battery | null,
  total_system_cost?: number | null,
  final_payment_amount?: number | null,
  site_survey_date?: string | null,
  installation_date?: string | null,
  final_payment_invoice?: string | null,
  user_agreed_to_final_design?: boolean | null,
  updated_by?: UserUpdateOptions | null,
  createdAt: string,
  updatedAt: string,
};

export enum UserType {
  LEAD = "LEAD",
  USER = "USER",
  CLIENT = "CLIENT",
}


export enum RoofCondition {
  EXCELLENT = "EXCELLENT",
  GOOD = "GOOD",
  POOR = "POOR",
  UNKNOWN = "UNKNOWN",
}


export enum RoofMaterial {
  COMPOSITION_SHINGLES = "COMPOSITION_SHINGLES",
  S_TYPE_CONCRETE = "S_TYPE_CONCRETE",
  FLAT_CONCRETE_TILE = "FLAT_CONCRETE_TILE",
  METAL = "METAL",
  FLAT = "FLAT",
  CLAY = "CLAY",
  ROCK = "ROCK",
  SLATE_OR_STONE = "SLATE_OR_STONE",
  UNKNOWN = "UNKNOWN",
}


export enum ElectricalStatus {
  NOT_SPECIFIED = "NOT_SPECIFIED",
  OLD = "OLD",
  MODERATELY_OLD = "MODERATELY_OLD",
  MODERATELY_NEW = "MODERATELY_NEW",
  NEW = "NEW",
}


export type Installer = {
  __typename: "Installer",
  id: string,
  cognitoPassword?: string | null,
  company_name?: string | null,
  company_address?: string | null,
  company_phone_number?: string | null,
  company_email?: string | null,
  company_tag_line?: string | null,
  company_red_line?: number | null,
  company_about_text?: string | null,
  company_cover_image_url?: string | null,
  available_panels?:  Array<Panel | null > | null,
  available_inverters?:  Array<Inverter | null > | null,
  available_batteries?:  Array<Battery | null > | null,
  adders?:  Array<Adder | null > | null,
  installerStates?: ModelInstallerStateConnection | null,
  users?: ModelUserConnection | null,
  google_place_id?: string | null,
  installer_reviews?:  Array<InstallerReview | null > | null,
  installer_rating?: number | null,
  salesforceId?: string | null,
  years_in_business?: number | null,
  average_install_time?: number | null,
  user_agreement?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Panel = {
  __typename: "Panel",
  manufacturer?: string | null,
  seriesName?: string | null,
  additional_cost?: number | null,
  requires_watt_multiplier?: boolean | null,
  watt_multiplier?: number | null,
  pMax?: string | null,
  width?: string | null,
  height?: string | null,
  dimensionsUnit?: string | null,
  efficiency?: string | null,
  panelSpecificationsUrl?: string | null,
  warrantyYears?: string | null,
  image_url?: string | null,
  default_panel?: boolean | null,
};

export type Inverter = {
  __typename: "Inverter",
  manufacturer?: string | null,
  seriesName?: string | null,
  additional_cost?: number | null,
  requires_watt_multiplier?: boolean | null,
  watt_multiplier?: number | null,
  spec_sheet_url?: string | null,
};

export type Battery = {
  __typename: "Battery",
  manufacturer?: string | null,
  seriesName?: string | null,
  additional_cost?: number | null,
  spec_sheet_url?: string | null,
  image_url?: string | null,
  power_output?: number | null,
  storage_capacity?: number | null,
  default_battery?: boolean | null,
};

export type Adder = {
  __typename: "Adder",
  type?: string | null,
  cost?: number | null,
  requires_watt_multiplier?: boolean | null,
  watt_multiplier?: number | null,
};

export type ModelInstallerStateConnection = {
  __typename: "ModelInstallerStateConnection",
  items:  Array<InstallerState | null >,
  nextToken?: string | null,
};

export type InstallerState = {
  __typename: "InstallerState",
  id: string,
  installer: Installer,
  state: State,
  installerId: string,
  stateId: string,
  createdAt: string,
  updatedAt: string,
};

export type InstallerReview = {
  __typename: "InstallerReview",
  id: string,
  pfp?: string | null,
  name?: string | null,
  rating: number,
  title?: string | null,
  review?: string | null,
};

export enum PaymentMethod {
  CASH = "CASH",
  LOAN = "LOAN",
}


export type InitialDesign = {
  __typename: "InitialDesign",
  dataOutput?: SolarReadyProposeDataObject | null,
  jobId?: string | null,
  productId?: number | null,
  imageUrl?: string | null,
};

export type SolarReadyProposeDataObject = {
  __typename: "SolarReadyProposeDataObject",
  energyTable?:  Array<EnergyTable | null > | null,
  facet?:  Array<Facet | null > | null,
  roof?: SolarReadyProposeDataRoofObject | null,
};

export type EnergyTable = {
  __typename: "EnergyTable",
  facet?: string | null,
  panelId?: number | null,
  panelsMonthlyProduction?: Array< number | null > | null,
  productionMultiplier?: string | null,
  savEachPanel?: string | null,
  systemProductionMultiplier?: string | null,
  tsrfEachPanel?: string | null,
  coordinates?: Array< Array< number | null > | null > | null,
  kWSize?: string | null,
  kWSizeCumulative?: string | null,
  kWhYr?: string | null,
  kWhYrCumulative?: string | null,
};

export type Facet = {
  __typename: "Facet",
  averageSAV?: string | null,
  averageTSRF?: string | null,
  azimuth?: string | null,
  facetId?: string | null,
  noOfObstructions?: string | null,
  pitchDegree?: string | null,
  sqFt?: string | null,
};

export type SolarReadyProposeDataRoofObject = {
  __typename: "SolarReadyProposeDataRoofObject",
  existingPanelsOnStructure?: string | null,
  homeClassification?: string | null,
  imageryDate?: string | null,
  jobId?: string | null,
  latLong?: string | null,
  maxNumberOfPanels?: string | null,
  maxKWSystem?: string | null,
  maxKWhYrSystem?: string | null,
  moduleLength?: string | null,
  moduleWatts?: string | null,
  moduleWidth?: string | null,
  numberOfFacets?: string | null,
  otherLosses?: string | null,
  predominantPitchDegree?: string | null,
  setbacks?: string | null,
  totalAreaOfMaxSystem?: string | null,
  totalSqFtOfRoof?: string | null,
  treeOverhangPrecent?: string | null,
};

export type FinalDesign = {
  __typename: "FinalDesign",
  designPdf?: string | null,
};

export enum ProjectStatus {
  AWAITING_ELECTRIC_BILL_REVIEW = "AWAITING_ELECTRIC_BILL_REVIEW",
  ELECTRIC_BILL_ISSUE_AWAITING_CUSTOMER_RE_UPLOAD = "ELECTRIC_BILL_ISSUE_AWAITING_CUSTOMER_RE_UPLOAD",
  ELECTRIC_BILL_REVIEWED_AWAITING_TRUE_DESIGN_PAYMENT = "ELECTRIC_BILL_REVIEWED_AWAITING_TRUE_DESIGN_PAYMENT",
  TRUE_DESIGN_PAYMENT_ISSUE_AWAITING_RESOLUTION = "TRUE_DESIGN_PAYMENT_ISSUE_AWAITING_RESOLUTION",
  TRUE_DESIGN_PAYMENT_SUCCEEDED_AWAITING_TRUE_DESIGN_ORDER = "TRUE_DESIGN_PAYMENT_SUCCEEDED_AWAITING_TRUE_DESIGN_ORDER",
  TRUE_DESIGN_ORDER_FAILED_AWAITING_RESOLUTION = "TRUE_DESIGN_ORDER_FAILED_AWAITING_RESOLUTION",
  TRUE_DESIGN_ORDER_COMPLETED_AWAITING_FINAL_DESIGN_CREATION = "TRUE_DESIGN_ORDER_COMPLETED_AWAITING_FINAL_DESIGN_CREATION",
  FINAL_DESIGN_FAILED_AWAITING_RESOLUTION = "FINAL_DESIGN_FAILED_AWAITING_RESOLUTION",
  FINAL_DESIGN_COMPLETE_AWAITING_CUSTOMER_APPROVAL = "FINAL_DESIGN_COMPLETE_AWAITING_CUSTOMER_APPROVAL",
  CUSTOMER_REJECTED_FINAL_DESIGN_AWAITING_RESOLUTION = "CUSTOMER_REJECTED_FINAL_DESIGN_AWAITING_RESOLUTION",
  CUSTOMER_APPROVED_FINAL_DESIGN_AWAITING_INSTALLER_AGREEMENT_SIGNATURE = "CUSTOMER_APPROVED_FINAL_DESIGN_AWAITING_INSTALLER_AGREEMENT_SIGNATURE",
  INSTALLER_AGREEMENT_SIGNATURE_OBTAINED_AWAITING_DEPOSIT = "INSTALLER_AGREEMENT_SIGNATURE_OBTAINED_AWAITING_DEPOSIT",
  DEPOSIT_UNSUCCESSFUL_AWAITING_RESOLUTION = "DEPOSIT_UNSUCCESSFUL_AWAITING_RESOLUTION",
  DEPOSIT_SUCCESSFUL_AWAITING_SITE_SURVEY_SCHEDULE = "DEPOSIT_SUCCESSFUL_AWAITING_SITE_SURVEY_SCHEDULE",
  SITE_SURVEY_SCHEDULED_AWAITING_SITE_VISIT = "SITE_SURVEY_SCHEDULED_AWAITING_SITE_VISIT",
  SITE_VISITED_AWAITING_SITE_APPROVAL = "SITE_VISITED_AWAITING_SITE_APPROVAL",
  SITE_NOT_APPROVED_CHANGE_ORDER_REQUIRED = "SITE_NOT_APPROVED_CHANGE_ORDER_REQUIRED",
  CHANGE_ORDER_SUBMITTED_AWAITING_CUSTOMER_SIGNATURE = "CHANGE_ORDER_SUBMITTED_AWAITING_CUSTOMER_SIGNATURE",
  CUSTOMER_SIGNATURE_OBTAINED_AWAITING_ENGINEERING_DOCS = "CUSTOMER_SIGNATURE_OBTAINED_AWAITING_ENGINEERING_DOCS",
  SITE_NOT_APPROVED_CANNOT_SERVICE = "SITE_NOT_APPROVED_CANNOT_SERVICE",
  SITE_APPROVED_AWAITING_ENGINEERING_DOCS = "SITE_APPROVED_AWAITING_ENGINEERING_DOCS",
  ENGINEERING_DOCS_FINISHED_AWAITING_PERMITS = "ENGINEERING_DOCS_FINISHED_AWAITING_PERMITS",
  PERMITS_NOT_OBTAINED_AWAITING_RESOLUTION = "PERMITS_NOT_OBTAINED_AWAITING_RESOLUTION",
  PERMITS_OBTAINED_AWAITING_SECOND_PAYMENT = "PERMITS_OBTAINED_AWAITING_SECOND_PAYMENT",
  SECOND_PAYMENT_UNSUCCESSFUL_AWAITING_RESOLUTION = "SECOND_PAYMENT_UNSUCCESSFUL_AWAITING_RESOLUTION",
  SECOND_PAYMENT_SUCCESSFUL_AWAITING_INSTALL_SCHEDULE = "SECOND_PAYMENT_SUCCESSFUL_AWAITING_INSTALL_SCHEDULE",
  INSTALL_SCHEDULED_AWAITING_INSTALL = "INSTALL_SCHEDULED_AWAITING_INSTALL",
  INSTALL_NOT_COMPLETED_AWAITING_RESOLUTION = "INSTALL_NOT_COMPLETED_AWAITING_RESOLUTION",
  INSTALL_COMPLETED_AWAITING_UTILITY_APPROVAL = "INSTALL_COMPLETED_AWAITING_UTILITY_APPROVAL",
  UTILITY_APPROVAL_ISSUE_AWAITING_RESOLUTION = "UTILITY_APPROVAL_ISSUE_AWAITING_RESOLUTION",
  UTILITY_APPROVED_AWAITING_SYSTEM_TURN_ON = "UTILITY_APPROVED_AWAITING_SYSTEM_TURN_ON",
  SYSTEM_NOT_TURNED_ON_AWAITING_RESOLUTION = "SYSTEM_NOT_TURNED_ON_AWAITING_RESOLUTION",
  SYSTEM_TURNED_ON = "SYSTEM_TURNED_ON",
}


export enum UserStatus {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}


export enum UserUpdateOptions {
  SALESFORCE = "SALESFORCE",
  DYNAMO = "DYNAMO",
}


export type UpdateStateInput = {
  id: string,
  name?: string | null,
};

export type DeleteStateInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  birth_date?: string | null,
  cognito_id?: string | null,
  email?: string | null,
  user_type?: UserType | null,
  phone_number?: string | null,
  home_number_of_stories?: string | null,
  roof_condition?: RoofCondition | null,
  roof_material?: RoofMaterial | null,
  address?: string | null,
  stateId?: string | null,
  utility_provider?: string | null,
  home_owner?: boolean | null,
  home_has_foundation?: boolean | null,
  electrical_system_status?: ElectricalStatus | null,
  is_hoa_property?: boolean | null,
  has_home_owners_insurance?: boolean | null,
  installerId?: string | null,
  payment_method?: PaymentMethod | null,
  electric_bill?: string | null,
  estimatedAnnualUsage?: string | null,
  initialDesign?: InitialDesignInput | null,
  finalDesign?: FinalDesignInput | null,
  user_images?: Array< string | null > | null,
  projectStatus?: ProjectStatus | null,
  userStatus?: UserStatus | null,
  measurementsOrderReportId?: string | null,
  salesforceId?: string | null,
  installerSalesforceId?: string | null,
  signed_installer_contract?: boolean | null,
  electric_bill_reviewed?: boolean | null,
  google_system_size?: number | null,
  requires_battery?: boolean | null,
  selected_battery?: BatteryInput | null,
  total_system_cost?: number | null,
  final_payment_amount?: number | null,
  site_survey_date?: string | null,
  installation_date?: string | null,
  final_payment_invoice?: string | null,
  user_agreed_to_final_design?: boolean | null,
  updated_by?: UserUpdateOptions | null,
};

export type InitialDesignInput = {
  dataOutput?: SolarReadyProposeDataObjectInput | null,
  jobId?: string | null,
  productId?: number | null,
  imageUrl?: string | null,
};

export type SolarReadyProposeDataObjectInput = {
  energyTable?: Array< EnergyTableInput | null > | null,
  facet?: Array< FacetInput | null > | null,
  roof?: SolarReadyProposeDataRoofObjectInput | null,
};

export type EnergyTableInput = {
  facet?: string | null,
  panelId?: number | null,
  panelsMonthlyProduction?: Array< number | null > | null,
  productionMultiplier?: string | null,
  savEachPanel?: string | null,
  systemProductionMultiplier?: string | null,
  tsrfEachPanel?: string | null,
  coordinates?: Array< Array< number | null > | null > | null,
  kWSize?: string | null,
  kWSizeCumulative?: string | null,
  kWhYr?: string | null,
  kWhYrCumulative?: string | null,
};

export type FacetInput = {
  averageSAV?: string | null,
  averageTSRF?: string | null,
  azimuth?: string | null,
  facetId?: string | null,
  noOfObstructions?: string | null,
  pitchDegree?: string | null,
  sqFt?: string | null,
};

export type SolarReadyProposeDataRoofObjectInput = {
  existingPanelsOnStructure?: string | null,
  homeClassification?: string | null,
  imageryDate?: string | null,
  jobId?: string | null,
  latLong?: string | null,
  maxNumberOfPanels?: string | null,
  maxKWSystem?: string | null,
  maxKWhYrSystem?: string | null,
  moduleLength?: string | null,
  moduleWatts?: string | null,
  moduleWidth?: string | null,
  numberOfFacets?: string | null,
  otherLosses?: string | null,
  predominantPitchDegree?: string | null,
  setbacks?: string | null,
  totalAreaOfMaxSystem?: string | null,
  totalSqFtOfRoof?: string | null,
  treeOverhangPrecent?: string | null,
};

export type FinalDesignInput = {
  designPdf?: string | null,
};

export type BatteryInput = {
  manufacturer?: string | null,
  seriesName?: string | null,
  additional_cost?: number | null,
  spec_sheet_url?: string | null,
  image_url?: string | null,
  power_output?: number | null,
  storage_capacity?: number | null,
  default_battery?: boolean | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  birth_date?: ModelStringInput | null,
  cognito_id?: ModelStringInput | null,
  email?: ModelStringInput | null,
  user_type?: ModelUserTypeInput | null,
  phone_number?: ModelStringInput | null,
  home_number_of_stories?: ModelStringInput | null,
  roof_condition?: ModelRoofConditionInput | null,
  roof_material?: ModelRoofMaterialInput | null,
  address?: ModelStringInput | null,
  stateId?: ModelIDInput | null,
  utility_provider?: ModelStringInput | null,
  home_owner?: ModelBooleanInput | null,
  home_has_foundation?: ModelBooleanInput | null,
  electrical_system_status?: ModelElectricalStatusInput | null,
  is_hoa_property?: ModelBooleanInput | null,
  has_home_owners_insurance?: ModelBooleanInput | null,
  installerId?: ModelIDInput | null,
  payment_method?: ModelPaymentMethodInput | null,
  electric_bill?: ModelStringInput | null,
  estimatedAnnualUsage?: ModelStringInput | null,
  user_images?: ModelStringInput | null,
  projectStatus?: ModelProjectStatusInput | null,
  userStatus?: ModelUserStatusInput | null,
  measurementsOrderReportId?: ModelStringInput | null,
  salesforceId?: ModelStringInput | null,
  installerSalesforceId?: ModelStringInput | null,
  signed_installer_contract?: ModelBooleanInput | null,
  electric_bill_reviewed?: ModelBooleanInput | null,
  google_system_size?: ModelFloatInput | null,
  requires_battery?: ModelBooleanInput | null,
  total_system_cost?: ModelFloatInput | null,
  final_payment_amount?: ModelFloatInput | null,
  site_survey_date?: ModelStringInput | null,
  installation_date?: ModelStringInput | null,
  final_payment_invoice?: ModelStringInput | null,
  user_agreed_to_final_design?: ModelBooleanInput | null,
  updated_by?: ModelUserUpdateOptionsInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelUserTypeInput = {
  eq?: UserType | null,
  ne?: UserType | null,
};

export type ModelRoofConditionInput = {
  eq?: RoofCondition | null,
  ne?: RoofCondition | null,
};

export type ModelRoofMaterialInput = {
  eq?: RoofMaterial | null,
  ne?: RoofMaterial | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelElectricalStatusInput = {
  eq?: ElectricalStatus | null,
  ne?: ElectricalStatus | null,
};

export type ModelPaymentMethodInput = {
  eq?: PaymentMethod | null,
  ne?: PaymentMethod | null,
};

export type ModelProjectStatusInput = {
  eq?: ProjectStatus | null,
  ne?: ProjectStatus | null,
};

export type ModelUserStatusInput = {
  eq?: UserStatus | null,
  ne?: UserStatus | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelUserUpdateOptionsInput = {
  eq?: UserUpdateOptions | null,
  ne?: UserUpdateOptions | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  birth_date?: string | null,
  cognito_id?: string | null,
  email?: string | null,
  user_type?: UserType | null,
  phone_number?: string | null,
  home_number_of_stories?: string | null,
  roof_condition?: RoofCondition | null,
  roof_material?: RoofMaterial | null,
  address?: string | null,
  stateId?: string | null,
  utility_provider?: string | null,
  home_owner?: boolean | null,
  home_has_foundation?: boolean | null,
  electrical_system_status?: ElectricalStatus | null,
  is_hoa_property?: boolean | null,
  has_home_owners_insurance?: boolean | null,
  installerId?: string | null,
  payment_method?: PaymentMethod | null,
  electric_bill?: string | null,
  estimatedAnnualUsage?: string | null,
  initialDesign?: InitialDesignInput | null,
  finalDesign?: FinalDesignInput | null,
  user_images?: Array< string | null > | null,
  projectStatus?: ProjectStatus | null,
  userStatus?: UserStatus | null,
  measurementsOrderReportId?: string | null,
  salesforceId?: string | null,
  installerSalesforceId?: string | null,
  signed_installer_contract?: boolean | null,
  electric_bill_reviewed?: boolean | null,
  google_system_size?: number | null,
  requires_battery?: boolean | null,
  selected_battery?: BatteryInput | null,
  total_system_cost?: number | null,
  final_payment_amount?: number | null,
  site_survey_date?: string | null,
  installation_date?: string | null,
  final_payment_invoice?: string | null,
  user_agreed_to_final_design?: boolean | null,
  updated_by?: UserUpdateOptions | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  userId: string,
  klaravia_user_id?: string | null,
  content: string,
  sender: string,
  receiver: string,
  createdAt?: string | null,
};

export type ModelMessageConditionInput = {
  userId?: ModelStringInput | null,
  klaravia_user_id?: ModelStringInput | null,
  content?: ModelStringInput | null,
  sender?: ModelStringInput | null,
  receiver?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  userId: string,
  klaravia_user_id?: string | null,
  content: string,
  sender: string,
  receiver: string,
  createdAt?: string | null,
  updatedAt: string,
};

export type UpdateMessageInput = {
  id: string,
  userId?: string | null,
  klaravia_user_id?: string | null,
  content?: string | null,
  sender?: string | null,
  receiver?: string | null,
  createdAt?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateInstallerInput = {
  id?: string | null,
  cognitoPassword?: string | null,
  company_name?: string | null,
  company_address?: string | null,
  company_phone_number?: string | null,
  company_email?: string | null,
  company_tag_line?: string | null,
  company_red_line?: number | null,
  company_about_text?: string | null,
  company_cover_image_url?: string | null,
  available_panels?: Array< PanelInput | null > | null,
  available_inverters?: Array< InverterInput | null > | null,
  available_batteries?: Array< BatteryInput | null > | null,
  adders?: Array< AdderInput | null > | null,
  google_place_id?: string | null,
  installer_reviews?: Array< InstallerReviewInput | null > | null,
  installer_rating?: number | null,
  salesforceId?: string | null,
  years_in_business?: number | null,
  average_install_time?: number | null,
  user_agreement?: string | null,
};

export type PanelInput = {
  manufacturer?: string | null,
  seriesName?: string | null,
  additional_cost?: number | null,
  requires_watt_multiplier?: boolean | null,
  watt_multiplier?: number | null,
  pMax?: string | null,
  width?: string | null,
  height?: string | null,
  dimensionsUnit?: string | null,
  efficiency?: string | null,
  panelSpecificationsUrl?: string | null,
  warrantyYears?: string | null,
  image_url?: string | null,
  default_panel?: boolean | null,
};

export type InverterInput = {
  manufacturer?: string | null,
  seriesName?: string | null,
  additional_cost?: number | null,
  requires_watt_multiplier?: boolean | null,
  watt_multiplier?: number | null,
  spec_sheet_url?: string | null,
};

export type AdderInput = {
  type?: string | null,
  cost?: number | null,
  requires_watt_multiplier?: boolean | null,
  watt_multiplier?: number | null,
};

export type InstallerReviewInput = {
  id: string,
  pfp?: string | null,
  name?: string | null,
  rating: number,
  title?: string | null,
  review?: string | null,
};

export type ModelInstallerConditionInput = {
  cognitoPassword?: ModelStringInput | null,
  company_name?: ModelStringInput | null,
  company_address?: ModelStringInput | null,
  company_phone_number?: ModelStringInput | null,
  company_email?: ModelStringInput | null,
  company_tag_line?: ModelStringInput | null,
  company_red_line?: ModelFloatInput | null,
  company_about_text?: ModelStringInput | null,
  company_cover_image_url?: ModelStringInput | null,
  google_place_id?: ModelStringInput | null,
  installer_rating?: ModelFloatInput | null,
  salesforceId?: ModelStringInput | null,
  years_in_business?: ModelIntInput | null,
  average_install_time?: ModelIntInput | null,
  user_agreement?: ModelStringInput | null,
  and?: Array< ModelInstallerConditionInput | null > | null,
  or?: Array< ModelInstallerConditionInput | null > | null,
  not?: ModelInstallerConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateInstallerInput = {
  id: string,
  cognitoPassword?: string | null,
  company_name?: string | null,
  company_address?: string | null,
  company_phone_number?: string | null,
  company_email?: string | null,
  company_tag_line?: string | null,
  company_red_line?: number | null,
  company_about_text?: string | null,
  company_cover_image_url?: string | null,
  available_panels?: Array< PanelInput | null > | null,
  available_inverters?: Array< InverterInput | null > | null,
  available_batteries?: Array< BatteryInput | null > | null,
  adders?: Array< AdderInput | null > | null,
  google_place_id?: string | null,
  installer_reviews?: Array< InstallerReviewInput | null > | null,
  installer_rating?: number | null,
  salesforceId?: string | null,
  years_in_business?: number | null,
  average_install_time?: number | null,
  user_agreement?: string | null,
};

export type DeleteInstallerInput = {
  id: string,
};

export type CreateInstallerStateInput = {
  id?: string | null,
  installerId: string,
  stateId: string,
};

export type ModelInstallerStateConditionInput = {
  installerId?: ModelIDInput | null,
  stateId?: ModelIDInput | null,
  and?: Array< ModelInstallerStateConditionInput | null > | null,
  or?: Array< ModelInstallerStateConditionInput | null > | null,
  not?: ModelInstallerStateConditionInput | null,
};

export type UpdateInstallerStateInput = {
  id: string,
  installerId?: string | null,
  stateId?: string | null,
};

export type DeleteInstallerStateInput = {
  id: string,
};

export type ModelStateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelStateFilterInput | null > | null,
  or?: Array< ModelStateFilterInput | null > | null,
  not?: ModelStateFilterInput | null,
};

export type ModelStateConnection = {
  __typename: "ModelStateConnection",
  items:  Array<State | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  birth_date?: ModelStringInput | null,
  cognito_id?: ModelStringInput | null,
  email?: ModelStringInput | null,
  user_type?: ModelUserTypeInput | null,
  phone_number?: ModelStringInput | null,
  home_number_of_stories?: ModelStringInput | null,
  roof_condition?: ModelRoofConditionInput | null,
  roof_material?: ModelRoofMaterialInput | null,
  address?: ModelStringInput | null,
  stateId?: ModelIDInput | null,
  utility_provider?: ModelStringInput | null,
  home_owner?: ModelBooleanInput | null,
  home_has_foundation?: ModelBooleanInput | null,
  electrical_system_status?: ModelElectricalStatusInput | null,
  is_hoa_property?: ModelBooleanInput | null,
  has_home_owners_insurance?: ModelBooleanInput | null,
  installerId?: ModelIDInput | null,
  payment_method?: ModelPaymentMethodInput | null,
  electric_bill?: ModelStringInput | null,
  estimatedAnnualUsage?: ModelStringInput | null,
  user_images?: ModelStringInput | null,
  projectStatus?: ModelProjectStatusInput | null,
  userStatus?: ModelUserStatusInput | null,
  measurementsOrderReportId?: ModelStringInput | null,
  salesforceId?: ModelStringInput | null,
  installerSalesforceId?: ModelStringInput | null,
  signed_installer_contract?: ModelBooleanInput | null,
  electric_bill_reviewed?: ModelBooleanInput | null,
  google_system_size?: ModelFloatInput | null,
  requires_battery?: ModelBooleanInput | null,
  total_system_cost?: ModelFloatInput | null,
  final_payment_amount?: ModelFloatInput | null,
  site_survey_date?: ModelStringInput | null,
  installation_date?: ModelStringInput | null,
  final_payment_invoice?: ModelStringInput | null,
  user_agreed_to_final_design?: ModelBooleanInput | null,
  updated_by?: ModelUserUpdateOptionsInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  klaravia_user_id?: ModelStringInput | null,
  content?: ModelStringInput | null,
  sender?: ModelStringInput | null,
  receiver?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelInstallerFilterInput = {
  id?: ModelIDInput | null,
  cognitoPassword?: ModelStringInput | null,
  company_name?: ModelStringInput | null,
  company_address?: ModelStringInput | null,
  company_phone_number?: ModelStringInput | null,
  company_email?: ModelStringInput | null,
  company_tag_line?: ModelStringInput | null,
  company_red_line?: ModelFloatInput | null,
  company_about_text?: ModelStringInput | null,
  company_cover_image_url?: ModelStringInput | null,
  google_place_id?: ModelStringInput | null,
  installer_rating?: ModelFloatInput | null,
  salesforceId?: ModelStringInput | null,
  years_in_business?: ModelIntInput | null,
  average_install_time?: ModelIntInput | null,
  user_agreement?: ModelStringInput | null,
  and?: Array< ModelInstallerFilterInput | null > | null,
  or?: Array< ModelInstallerFilterInput | null > | null,
  not?: ModelInstallerFilterInput | null,
};

export type ModelInstallerConnection = {
  __typename: "ModelInstallerConnection",
  items:  Array<Installer | null >,
  nextToken?: string | null,
};

export type ModelInstallerStateFilterInput = {
  id?: ModelIDInput | null,
  installerId?: ModelIDInput | null,
  stateId?: ModelIDInput | null,
  and?: Array< ModelInstallerStateFilterInput | null > | null,
  or?: Array< ModelInstallerStateFilterInput | null > | null,
  not?: ModelInstallerStateFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionStateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStateFilterInput | null > | null,
  or?: Array< ModelSubscriptionStateFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  birth_date?: ModelSubscriptionStringInput | null,
  cognito_id?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  user_type?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  home_number_of_stories?: ModelSubscriptionStringInput | null,
  roof_condition?: ModelSubscriptionStringInput | null,
  roof_material?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  stateId?: ModelSubscriptionIDInput | null,
  utility_provider?: ModelSubscriptionStringInput | null,
  home_owner?: ModelSubscriptionBooleanInput | null,
  home_has_foundation?: ModelSubscriptionBooleanInput | null,
  electrical_system_status?: ModelSubscriptionStringInput | null,
  is_hoa_property?: ModelSubscriptionBooleanInput | null,
  has_home_owners_insurance?: ModelSubscriptionBooleanInput | null,
  installerId?: ModelSubscriptionIDInput | null,
  payment_method?: ModelSubscriptionStringInput | null,
  electric_bill?: ModelSubscriptionStringInput | null,
  estimatedAnnualUsage?: ModelSubscriptionStringInput | null,
  user_images?: ModelSubscriptionStringInput | null,
  projectStatus?: ModelSubscriptionStringInput | null,
  userStatus?: ModelSubscriptionStringInput | null,
  measurementsOrderReportId?: ModelSubscriptionStringInput | null,
  salesforceId?: ModelSubscriptionStringInput | null,
  installerSalesforceId?: ModelSubscriptionStringInput | null,
  signed_installer_contract?: ModelSubscriptionBooleanInput | null,
  electric_bill_reviewed?: ModelSubscriptionBooleanInput | null,
  google_system_size?: ModelSubscriptionFloatInput | null,
  requires_battery?: ModelSubscriptionBooleanInput | null,
  total_system_cost?: ModelSubscriptionFloatInput | null,
  final_payment_amount?: ModelSubscriptionFloatInput | null,
  site_survey_date?: ModelSubscriptionStringInput | null,
  installation_date?: ModelSubscriptionStringInput | null,
  final_payment_invoice?: ModelSubscriptionStringInput | null,
  user_agreed_to_final_design?: ModelSubscriptionBooleanInput | null,
  updated_by?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionStringInput | null,
  klaravia_user_id?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  sender?: ModelSubscriptionStringInput | null,
  receiver?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionInstallerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cognitoPassword?: ModelSubscriptionStringInput | null,
  company_name?: ModelSubscriptionStringInput | null,
  company_address?: ModelSubscriptionStringInput | null,
  company_phone_number?: ModelSubscriptionStringInput | null,
  company_email?: ModelSubscriptionStringInput | null,
  company_tag_line?: ModelSubscriptionStringInput | null,
  company_red_line?: ModelSubscriptionFloatInput | null,
  company_about_text?: ModelSubscriptionStringInput | null,
  company_cover_image_url?: ModelSubscriptionStringInput | null,
  google_place_id?: ModelSubscriptionStringInput | null,
  installer_rating?: ModelSubscriptionFloatInput | null,
  salesforceId?: ModelSubscriptionStringInput | null,
  years_in_business?: ModelSubscriptionIntInput | null,
  average_install_time?: ModelSubscriptionIntInput | null,
  user_agreement?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInstallerFilterInput | null > | null,
  or?: Array< ModelSubscriptionInstallerFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionInstallerStateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  installerId?: ModelSubscriptionIDInput | null,
  stateId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionInstallerStateFilterInput | null > | null,
  or?: Array< ModelSubscriptionInstallerStateFilterInput | null > | null,
};

export type CreateStateMutationVariables = {
  input: CreateStateInput,
  condition?: ModelStateConditionInput | null,
};

export type CreateStateMutation = {
  createState?:  {
    __typename: "State",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    installerStates?:  {
      __typename: "ModelInstallerStateConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStateMutationVariables = {
  input: UpdateStateInput,
  condition?: ModelStateConditionInput | null,
};

export type UpdateStateMutation = {
  updateState?:  {
    __typename: "State",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    installerStates?:  {
      __typename: "ModelInstallerStateConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStateMutationVariables = {
  input: DeleteStateInput,
  condition?: ModelStateConditionInput | null,
};

export type DeleteStateMutation = {
  deleteState?:  {
    __typename: "State",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    installerStates?:  {
      __typename: "ModelInstallerStateConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    first_name?: string | null,
    last_name?: string | null,
    birth_date?: string | null,
    cognito_id?: string | null,
    email?: string | null,
    user_type?: UserType | null,
    phone_number?: string | null,
    home_number_of_stories?: string | null,
    roof_condition?: RoofCondition | null,
    roof_material?: RoofMaterial | null,
    address?: string | null,
    stateId?: string | null,
    state?:  {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    utility_provider?: string | null,
    home_owner?: boolean | null,
    home_has_foundation?: boolean | null,
    electrical_system_status?: ElectricalStatus | null,
    is_hoa_property?: boolean | null,
    has_home_owners_insurance?: boolean | null,
    installerId?: string | null,
    installer?:  {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    payment_method?: PaymentMethod | null,
    electric_bill?: string | null,
    estimatedAnnualUsage?: string | null,
    initialDesign?:  {
      __typename: "InitialDesign",
      jobId?: string | null,
      productId?: number | null,
      imageUrl?: string | null,
    } | null,
    finalDesign?:  {
      __typename: "FinalDesign",
      designPdf?: string | null,
    } | null,
    user_images?: Array< string | null > | null,
    projectStatus?: ProjectStatus | null,
    userStatus?: UserStatus | null,
    measurementsOrderReportId?: string | null,
    salesforceId?: string | null,
    installerSalesforceId?: string | null,
    signed_installer_contract?: boolean | null,
    electric_bill_reviewed?: boolean | null,
    google_system_size?: number | null,
    requires_battery?: boolean | null,
    selected_battery?:  {
      __typename: "Battery",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      spec_sheet_url?: string | null,
      image_url?: string | null,
      power_output?: number | null,
      storage_capacity?: number | null,
      default_battery?: boolean | null,
    } | null,
    total_system_cost?: number | null,
    final_payment_amount?: number | null,
    site_survey_date?: string | null,
    installation_date?: string | null,
    final_payment_invoice?: string | null,
    user_agreed_to_final_design?: boolean | null,
    updated_by?: UserUpdateOptions | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    first_name?: string | null,
    last_name?: string | null,
    birth_date?: string | null,
    cognito_id?: string | null,
    email?: string | null,
    user_type?: UserType | null,
    phone_number?: string | null,
    home_number_of_stories?: string | null,
    roof_condition?: RoofCondition | null,
    roof_material?: RoofMaterial | null,
    address?: string | null,
    stateId?: string | null,
    state?:  {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    utility_provider?: string | null,
    home_owner?: boolean | null,
    home_has_foundation?: boolean | null,
    electrical_system_status?: ElectricalStatus | null,
    is_hoa_property?: boolean | null,
    has_home_owners_insurance?: boolean | null,
    installerId?: string | null,
    installer?:  {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    payment_method?: PaymentMethod | null,
    electric_bill?: string | null,
    estimatedAnnualUsage?: string | null,
    initialDesign?:  {
      __typename: "InitialDesign",
      jobId?: string | null,
      productId?: number | null,
      imageUrl?: string | null,
    } | null,
    finalDesign?:  {
      __typename: "FinalDesign",
      designPdf?: string | null,
    } | null,
    user_images?: Array< string | null > | null,
    projectStatus?: ProjectStatus | null,
    userStatus?: UserStatus | null,
    measurementsOrderReportId?: string | null,
    salesforceId?: string | null,
    installerSalesforceId?: string | null,
    signed_installer_contract?: boolean | null,
    electric_bill_reviewed?: boolean | null,
    google_system_size?: number | null,
    requires_battery?: boolean | null,
    selected_battery?:  {
      __typename: "Battery",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      spec_sheet_url?: string | null,
      image_url?: string | null,
      power_output?: number | null,
      storage_capacity?: number | null,
      default_battery?: boolean | null,
    } | null,
    total_system_cost?: number | null,
    final_payment_amount?: number | null,
    site_survey_date?: string | null,
    installation_date?: string | null,
    final_payment_invoice?: string | null,
    user_agreed_to_final_design?: boolean | null,
    updated_by?: UserUpdateOptions | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    first_name?: string | null,
    last_name?: string | null,
    birth_date?: string | null,
    cognito_id?: string | null,
    email?: string | null,
    user_type?: UserType | null,
    phone_number?: string | null,
    home_number_of_stories?: string | null,
    roof_condition?: RoofCondition | null,
    roof_material?: RoofMaterial | null,
    address?: string | null,
    stateId?: string | null,
    state?:  {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    utility_provider?: string | null,
    home_owner?: boolean | null,
    home_has_foundation?: boolean | null,
    electrical_system_status?: ElectricalStatus | null,
    is_hoa_property?: boolean | null,
    has_home_owners_insurance?: boolean | null,
    installerId?: string | null,
    installer?:  {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    payment_method?: PaymentMethod | null,
    electric_bill?: string | null,
    estimatedAnnualUsage?: string | null,
    initialDesign?:  {
      __typename: "InitialDesign",
      jobId?: string | null,
      productId?: number | null,
      imageUrl?: string | null,
    } | null,
    finalDesign?:  {
      __typename: "FinalDesign",
      designPdf?: string | null,
    } | null,
    user_images?: Array< string | null > | null,
    projectStatus?: ProjectStatus | null,
    userStatus?: UserStatus | null,
    measurementsOrderReportId?: string | null,
    salesforceId?: string | null,
    installerSalesforceId?: string | null,
    signed_installer_contract?: boolean | null,
    electric_bill_reviewed?: boolean | null,
    google_system_size?: number | null,
    requires_battery?: boolean | null,
    selected_battery?:  {
      __typename: "Battery",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      spec_sheet_url?: string | null,
      image_url?: string | null,
      power_output?: number | null,
      storage_capacity?: number | null,
      default_battery?: boolean | null,
    } | null,
    total_system_cost?: number | null,
    final_payment_amount?: number | null,
    site_survey_date?: string | null,
    installation_date?: string | null,
    final_payment_invoice?: string | null,
    user_agreed_to_final_design?: boolean | null,
    updated_by?: UserUpdateOptions | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    userId: string,
    klaravia_user_id?: string | null,
    content: string,
    sender: string,
    receiver: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    userId: string,
    klaravia_user_id?: string | null,
    content: string,
    sender: string,
    receiver: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    userId: string,
    klaravia_user_id?: string | null,
    content: string,
    sender: string,
    receiver: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateInstallerMutationVariables = {
  input: CreateInstallerInput,
  condition?: ModelInstallerConditionInput | null,
};

export type CreateInstallerMutation = {
  createInstaller?:  {
    __typename: "Installer",
    id: string,
    cognitoPassword?: string | null,
    company_name?: string | null,
    company_address?: string | null,
    company_phone_number?: string | null,
    company_email?: string | null,
    company_tag_line?: string | null,
    company_red_line?: number | null,
    company_about_text?: string | null,
    company_cover_image_url?: string | null,
    available_panels?:  Array< {
      __typename: "Panel",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
      pMax?: string | null,
      width?: string | null,
      height?: string | null,
      dimensionsUnit?: string | null,
      efficiency?: string | null,
      panelSpecificationsUrl?: string | null,
      warrantyYears?: string | null,
      image_url?: string | null,
      default_panel?: boolean | null,
    } | null > | null,
    available_inverters?:  Array< {
      __typename: "Inverter",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
      spec_sheet_url?: string | null,
    } | null > | null,
    available_batteries?:  Array< {
      __typename: "Battery",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      spec_sheet_url?: string | null,
      image_url?: string | null,
      power_output?: number | null,
      storage_capacity?: number | null,
      default_battery?: boolean | null,
    } | null > | null,
    adders?:  Array< {
      __typename: "Adder",
      type?: string | null,
      cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
    } | null > | null,
    installerStates?:  {
      __typename: "ModelInstallerStateConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    google_place_id?: string | null,
    installer_reviews?:  Array< {
      __typename: "InstallerReview",
      id: string,
      pfp?: string | null,
      name?: string | null,
      rating: number,
      title?: string | null,
      review?: string | null,
    } | null > | null,
    installer_rating?: number | null,
    salesforceId?: string | null,
    years_in_business?: number | null,
    average_install_time?: number | null,
    user_agreement?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInstallerMutationVariables = {
  input: UpdateInstallerInput,
  condition?: ModelInstallerConditionInput | null,
};

export type UpdateInstallerMutation = {
  updateInstaller?:  {
    __typename: "Installer",
    id: string,
    cognitoPassword?: string | null,
    company_name?: string | null,
    company_address?: string | null,
    company_phone_number?: string | null,
    company_email?: string | null,
    company_tag_line?: string | null,
    company_red_line?: number | null,
    company_about_text?: string | null,
    company_cover_image_url?: string | null,
    available_panels?:  Array< {
      __typename: "Panel",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
      pMax?: string | null,
      width?: string | null,
      height?: string | null,
      dimensionsUnit?: string | null,
      efficiency?: string | null,
      panelSpecificationsUrl?: string | null,
      warrantyYears?: string | null,
      image_url?: string | null,
      default_panel?: boolean | null,
    } | null > | null,
    available_inverters?:  Array< {
      __typename: "Inverter",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
      spec_sheet_url?: string | null,
    } | null > | null,
    available_batteries?:  Array< {
      __typename: "Battery",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      spec_sheet_url?: string | null,
      image_url?: string | null,
      power_output?: number | null,
      storage_capacity?: number | null,
      default_battery?: boolean | null,
    } | null > | null,
    adders?:  Array< {
      __typename: "Adder",
      type?: string | null,
      cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
    } | null > | null,
    installerStates?:  {
      __typename: "ModelInstallerStateConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    google_place_id?: string | null,
    installer_reviews?:  Array< {
      __typename: "InstallerReview",
      id: string,
      pfp?: string | null,
      name?: string | null,
      rating: number,
      title?: string | null,
      review?: string | null,
    } | null > | null,
    installer_rating?: number | null,
    salesforceId?: string | null,
    years_in_business?: number | null,
    average_install_time?: number | null,
    user_agreement?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInstallerMutationVariables = {
  input: DeleteInstallerInput,
  condition?: ModelInstallerConditionInput | null,
};

export type DeleteInstallerMutation = {
  deleteInstaller?:  {
    __typename: "Installer",
    id: string,
    cognitoPassword?: string | null,
    company_name?: string | null,
    company_address?: string | null,
    company_phone_number?: string | null,
    company_email?: string | null,
    company_tag_line?: string | null,
    company_red_line?: number | null,
    company_about_text?: string | null,
    company_cover_image_url?: string | null,
    available_panels?:  Array< {
      __typename: "Panel",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
      pMax?: string | null,
      width?: string | null,
      height?: string | null,
      dimensionsUnit?: string | null,
      efficiency?: string | null,
      panelSpecificationsUrl?: string | null,
      warrantyYears?: string | null,
      image_url?: string | null,
      default_panel?: boolean | null,
    } | null > | null,
    available_inverters?:  Array< {
      __typename: "Inverter",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
      spec_sheet_url?: string | null,
    } | null > | null,
    available_batteries?:  Array< {
      __typename: "Battery",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      spec_sheet_url?: string | null,
      image_url?: string | null,
      power_output?: number | null,
      storage_capacity?: number | null,
      default_battery?: boolean | null,
    } | null > | null,
    adders?:  Array< {
      __typename: "Adder",
      type?: string | null,
      cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
    } | null > | null,
    installerStates?:  {
      __typename: "ModelInstallerStateConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    google_place_id?: string | null,
    installer_reviews?:  Array< {
      __typename: "InstallerReview",
      id: string,
      pfp?: string | null,
      name?: string | null,
      rating: number,
      title?: string | null,
      review?: string | null,
    } | null > | null,
    installer_rating?: number | null,
    salesforceId?: string | null,
    years_in_business?: number | null,
    average_install_time?: number | null,
    user_agreement?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateInstallerStateMutationVariables = {
  input: CreateInstallerStateInput,
  condition?: ModelInstallerStateConditionInput | null,
};

export type CreateInstallerStateMutation = {
  createInstallerState?:  {
    __typename: "InstallerState",
    id: string,
    installer:  {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    state:  {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    installerId: string,
    stateId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInstallerStateMutationVariables = {
  input: UpdateInstallerStateInput,
  condition?: ModelInstallerStateConditionInput | null,
};

export type UpdateInstallerStateMutation = {
  updateInstallerState?:  {
    __typename: "InstallerState",
    id: string,
    installer:  {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    state:  {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    installerId: string,
    stateId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInstallerStateMutationVariables = {
  input: DeleteInstallerStateInput,
  condition?: ModelInstallerStateConditionInput | null,
};

export type DeleteInstallerStateMutation = {
  deleteInstallerState?:  {
    __typename: "InstallerState",
    id: string,
    installer:  {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    state:  {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    installerId: string,
    stateId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetStateQueryVariables = {
  id: string,
};

export type GetStateQuery = {
  getState?:  {
    __typename: "State",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    installerStates?:  {
      __typename: "ModelInstallerStateConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStatesQueryVariables = {
  filter?: ModelStateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStatesQuery = {
  listStates?:  {
    __typename: "ModelStateConnection",
    items:  Array< {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    first_name?: string | null,
    last_name?: string | null,
    birth_date?: string | null,
    cognito_id?: string | null,
    email?: string | null,
    user_type?: UserType | null,
    phone_number?: string | null,
    home_number_of_stories?: string | null,
    roof_condition?: RoofCondition | null,
    roof_material?: RoofMaterial | null,
    address?: string | null,
    stateId?: string | null,
    state?:  {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    utility_provider?: string | null,
    home_owner?: boolean | null,
    home_has_foundation?: boolean | null,
    electrical_system_status?: ElectricalStatus | null,
    is_hoa_property?: boolean | null,
    has_home_owners_insurance?: boolean | null,
    installerId?: string | null,
    installer?:  {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    payment_method?: PaymentMethod | null,
    electric_bill?: string | null,
    estimatedAnnualUsage?: string | null,
    initialDesign?:  {
      __typename: "InitialDesign",
      jobId?: string | null,
      productId?: number | null,
      imageUrl?: string | null,
    } | null,
    finalDesign?:  {
      __typename: "FinalDesign",
      designPdf?: string | null,
    } | null,
    user_images?: Array< string | null > | null,
    projectStatus?: ProjectStatus | null,
    userStatus?: UserStatus | null,
    measurementsOrderReportId?: string | null,
    salesforceId?: string | null,
    installerSalesforceId?: string | null,
    signed_installer_contract?: boolean | null,
    electric_bill_reviewed?: boolean | null,
    google_system_size?: number | null,
    requires_battery?: boolean | null,
    selected_battery?:  {
      __typename: "Battery",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      spec_sheet_url?: string | null,
      image_url?: string | null,
      power_output?: number | null,
      storage_capacity?: number | null,
      default_battery?: boolean | null,
    } | null,
    total_system_cost?: number | null,
    final_payment_amount?: number | null,
    site_survey_date?: string | null,
    installation_date?: string | null,
    final_payment_invoice?: string | null,
    user_agreed_to_final_design?: boolean | null,
    updated_by?: UserUpdateOptions | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      birth_date?: string | null,
      cognito_id?: string | null,
      email?: string | null,
      user_type?: UserType | null,
      phone_number?: string | null,
      home_number_of_stories?: string | null,
      roof_condition?: RoofCondition | null,
      roof_material?: RoofMaterial | null,
      address?: string | null,
      stateId?: string | null,
      utility_provider?: string | null,
      home_owner?: boolean | null,
      home_has_foundation?: boolean | null,
      electrical_system_status?: ElectricalStatus | null,
      is_hoa_property?: boolean | null,
      has_home_owners_insurance?: boolean | null,
      installerId?: string | null,
      payment_method?: PaymentMethod | null,
      electric_bill?: string | null,
      estimatedAnnualUsage?: string | null,
      user_images?: Array< string | null > | null,
      projectStatus?: ProjectStatus | null,
      userStatus?: UserStatus | null,
      measurementsOrderReportId?: string | null,
      salesforceId?: string | null,
      installerSalesforceId?: string | null,
      signed_installer_contract?: boolean | null,
      electric_bill_reviewed?: boolean | null,
      google_system_size?: number | null,
      requires_battery?: boolean | null,
      total_system_cost?: number | null,
      final_payment_amount?: number | null,
      site_survey_date?: string | null,
      installation_date?: string | null,
      final_payment_invoice?: string | null,
      user_agreed_to_final_design?: boolean | null,
      updated_by?: UserUpdateOptions | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    userId: string,
    klaravia_user_id?: string | null,
    content: string,
    sender: string,
    receiver: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      userId: string,
      klaravia_user_id?: string | null,
      content: string,
      sender: string,
      receiver: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInstallerQueryVariables = {
  id: string,
};

export type GetInstallerQuery = {
  getInstaller?:  {
    __typename: "Installer",
    id: string,
    cognitoPassword?: string | null,
    company_name?: string | null,
    company_address?: string | null,
    company_phone_number?: string | null,
    company_email?: string | null,
    company_tag_line?: string | null,
    company_red_line?: number | null,
    company_about_text?: string | null,
    company_cover_image_url?: string | null,
    available_panels?:  Array< {
      __typename: "Panel",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
      pMax?: string | null,
      width?: string | null,
      height?: string | null,
      dimensionsUnit?: string | null,
      efficiency?: string | null,
      panelSpecificationsUrl?: string | null,
      warrantyYears?: string | null,
      image_url?: string | null,
      default_panel?: boolean | null,
    } | null > | null,
    available_inverters?:  Array< {
      __typename: "Inverter",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
      spec_sheet_url?: string | null,
    } | null > | null,
    available_batteries?:  Array< {
      __typename: "Battery",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      spec_sheet_url?: string | null,
      image_url?: string | null,
      power_output?: number | null,
      storage_capacity?: number | null,
      default_battery?: boolean | null,
    } | null > | null,
    adders?:  Array< {
      __typename: "Adder",
      type?: string | null,
      cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
    } | null > | null,
    installerStates?:  {
      __typename: "ModelInstallerStateConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    google_place_id?: string | null,
    installer_reviews?:  Array< {
      __typename: "InstallerReview",
      id: string,
      pfp?: string | null,
      name?: string | null,
      rating: number,
      title?: string | null,
      review?: string | null,
    } | null > | null,
    installer_rating?: number | null,
    salesforceId?: string | null,
    years_in_business?: number | null,
    average_install_time?: number | null,
    user_agreement?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInstallersQueryVariables = {
  filter?: ModelInstallerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInstallersQuery = {
  listInstallers?:  {
    __typename: "ModelInstallerConnection",
    items:  Array< {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInstallerStateQueryVariables = {
  id: string,
};

export type GetInstallerStateQuery = {
  getInstallerState?:  {
    __typename: "InstallerState",
    id: string,
    installer:  {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    state:  {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    installerId: string,
    stateId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInstallerStatesQueryVariables = {
  filter?: ModelInstallerStateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInstallerStatesQuery = {
  listInstallerStates?:  {
    __typename: "ModelInstallerStateConnection",
    items:  Array< {
      __typename: "InstallerState",
      id: string,
      installerId: string,
      stateId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByStateIdQueryVariables = {
  stateId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByStateIdQuery = {
  usersByStateId?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      birth_date?: string | null,
      cognito_id?: string | null,
      email?: string | null,
      user_type?: UserType | null,
      phone_number?: string | null,
      home_number_of_stories?: string | null,
      roof_condition?: RoofCondition | null,
      roof_material?: RoofMaterial | null,
      address?: string | null,
      stateId?: string | null,
      utility_provider?: string | null,
      home_owner?: boolean | null,
      home_has_foundation?: boolean | null,
      electrical_system_status?: ElectricalStatus | null,
      is_hoa_property?: boolean | null,
      has_home_owners_insurance?: boolean | null,
      installerId?: string | null,
      payment_method?: PaymentMethod | null,
      electric_bill?: string | null,
      estimatedAnnualUsage?: string | null,
      user_images?: Array< string | null > | null,
      projectStatus?: ProjectStatus | null,
      userStatus?: UserStatus | null,
      measurementsOrderReportId?: string | null,
      salesforceId?: string | null,
      installerSalesforceId?: string | null,
      signed_installer_contract?: boolean | null,
      electric_bill_reviewed?: boolean | null,
      google_system_size?: number | null,
      requires_battery?: boolean | null,
      total_system_cost?: number | null,
      final_payment_amount?: number | null,
      site_survey_date?: string | null,
      installation_date?: string | null,
      final_payment_invoice?: string | null,
      user_agreed_to_final_design?: boolean | null,
      updated_by?: UserUpdateOptions | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByInstallerIdQueryVariables = {
  installerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByInstallerIdQuery = {
  usersByInstallerId?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      birth_date?: string | null,
      cognito_id?: string | null,
      email?: string | null,
      user_type?: UserType | null,
      phone_number?: string | null,
      home_number_of_stories?: string | null,
      roof_condition?: RoofCondition | null,
      roof_material?: RoofMaterial | null,
      address?: string | null,
      stateId?: string | null,
      utility_provider?: string | null,
      home_owner?: boolean | null,
      home_has_foundation?: boolean | null,
      electrical_system_status?: ElectricalStatus | null,
      is_hoa_property?: boolean | null,
      has_home_owners_insurance?: boolean | null,
      installerId?: string | null,
      payment_method?: PaymentMethod | null,
      electric_bill?: string | null,
      estimatedAnnualUsage?: string | null,
      user_images?: Array< string | null > | null,
      projectStatus?: ProjectStatus | null,
      userStatus?: UserStatus | null,
      measurementsOrderReportId?: string | null,
      salesforceId?: string | null,
      installerSalesforceId?: string | null,
      signed_installer_contract?: boolean | null,
      electric_bill_reviewed?: boolean | null,
      google_system_size?: number | null,
      requires_battery?: boolean | null,
      total_system_cost?: number | null,
      final_payment_amount?: number | null,
      site_survey_date?: string | null,
      installation_date?: string | null,
      final_payment_invoice?: string | null,
      user_agreed_to_final_design?: boolean | null,
      updated_by?: UserUpdateOptions | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type InstallerStatesByInstallerIdQueryVariables = {
  installerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInstallerStateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type InstallerStatesByInstallerIdQuery = {
  installerStatesByInstallerId?:  {
    __typename: "ModelInstallerStateConnection",
    items:  Array< {
      __typename: "InstallerState",
      id: string,
      installerId: string,
      stateId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type InstallerStatesByStateIdQueryVariables = {
  stateId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInstallerStateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type InstallerStatesByStateIdQuery = {
  installerStatesByStateId?:  {
    __typename: "ModelInstallerStateConnection",
    items:  Array< {
      __typename: "InstallerState",
      id: string,
      installerId: string,
      stateId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStateSubscriptionVariables = {
  filter?: ModelSubscriptionStateFilterInput | null,
};

export type OnCreateStateSubscription = {
  onCreateState?:  {
    __typename: "State",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    installerStates?:  {
      __typename: "ModelInstallerStateConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStateSubscriptionVariables = {
  filter?: ModelSubscriptionStateFilterInput | null,
};

export type OnUpdateStateSubscription = {
  onUpdateState?:  {
    __typename: "State",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    installerStates?:  {
      __typename: "ModelInstallerStateConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStateSubscriptionVariables = {
  filter?: ModelSubscriptionStateFilterInput | null,
};

export type OnDeleteStateSubscription = {
  onDeleteState?:  {
    __typename: "State",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    installerStates?:  {
      __typename: "ModelInstallerStateConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    first_name?: string | null,
    last_name?: string | null,
    birth_date?: string | null,
    cognito_id?: string | null,
    email?: string | null,
    user_type?: UserType | null,
    phone_number?: string | null,
    home_number_of_stories?: string | null,
    roof_condition?: RoofCondition | null,
    roof_material?: RoofMaterial | null,
    address?: string | null,
    stateId?: string | null,
    state?:  {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    utility_provider?: string | null,
    home_owner?: boolean | null,
    home_has_foundation?: boolean | null,
    electrical_system_status?: ElectricalStatus | null,
    is_hoa_property?: boolean | null,
    has_home_owners_insurance?: boolean | null,
    installerId?: string | null,
    installer?:  {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    payment_method?: PaymentMethod | null,
    electric_bill?: string | null,
    estimatedAnnualUsage?: string | null,
    initialDesign?:  {
      __typename: "InitialDesign",
      jobId?: string | null,
      productId?: number | null,
      imageUrl?: string | null,
    } | null,
    finalDesign?:  {
      __typename: "FinalDesign",
      designPdf?: string | null,
    } | null,
    user_images?: Array< string | null > | null,
    projectStatus?: ProjectStatus | null,
    userStatus?: UserStatus | null,
    measurementsOrderReportId?: string | null,
    salesforceId?: string | null,
    installerSalesforceId?: string | null,
    signed_installer_contract?: boolean | null,
    electric_bill_reviewed?: boolean | null,
    google_system_size?: number | null,
    requires_battery?: boolean | null,
    selected_battery?:  {
      __typename: "Battery",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      spec_sheet_url?: string | null,
      image_url?: string | null,
      power_output?: number | null,
      storage_capacity?: number | null,
      default_battery?: boolean | null,
    } | null,
    total_system_cost?: number | null,
    final_payment_amount?: number | null,
    site_survey_date?: string | null,
    installation_date?: string | null,
    final_payment_invoice?: string | null,
    user_agreed_to_final_design?: boolean | null,
    updated_by?: UserUpdateOptions | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    first_name?: string | null,
    last_name?: string | null,
    birth_date?: string | null,
    cognito_id?: string | null,
    email?: string | null,
    user_type?: UserType | null,
    phone_number?: string | null,
    home_number_of_stories?: string | null,
    roof_condition?: RoofCondition | null,
    roof_material?: RoofMaterial | null,
    address?: string | null,
    stateId?: string | null,
    state?:  {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    utility_provider?: string | null,
    home_owner?: boolean | null,
    home_has_foundation?: boolean | null,
    electrical_system_status?: ElectricalStatus | null,
    is_hoa_property?: boolean | null,
    has_home_owners_insurance?: boolean | null,
    installerId?: string | null,
    installer?:  {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    payment_method?: PaymentMethod | null,
    electric_bill?: string | null,
    estimatedAnnualUsage?: string | null,
    initialDesign?:  {
      __typename: "InitialDesign",
      jobId?: string | null,
      productId?: number | null,
      imageUrl?: string | null,
    } | null,
    finalDesign?:  {
      __typename: "FinalDesign",
      designPdf?: string | null,
    } | null,
    user_images?: Array< string | null > | null,
    projectStatus?: ProjectStatus | null,
    userStatus?: UserStatus | null,
    measurementsOrderReportId?: string | null,
    salesforceId?: string | null,
    installerSalesforceId?: string | null,
    signed_installer_contract?: boolean | null,
    electric_bill_reviewed?: boolean | null,
    google_system_size?: number | null,
    requires_battery?: boolean | null,
    selected_battery?:  {
      __typename: "Battery",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      spec_sheet_url?: string | null,
      image_url?: string | null,
      power_output?: number | null,
      storage_capacity?: number | null,
      default_battery?: boolean | null,
    } | null,
    total_system_cost?: number | null,
    final_payment_amount?: number | null,
    site_survey_date?: string | null,
    installation_date?: string | null,
    final_payment_invoice?: string | null,
    user_agreed_to_final_design?: boolean | null,
    updated_by?: UserUpdateOptions | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    first_name?: string | null,
    last_name?: string | null,
    birth_date?: string | null,
    cognito_id?: string | null,
    email?: string | null,
    user_type?: UserType | null,
    phone_number?: string | null,
    home_number_of_stories?: string | null,
    roof_condition?: RoofCondition | null,
    roof_material?: RoofMaterial | null,
    address?: string | null,
    stateId?: string | null,
    state?:  {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    utility_provider?: string | null,
    home_owner?: boolean | null,
    home_has_foundation?: boolean | null,
    electrical_system_status?: ElectricalStatus | null,
    is_hoa_property?: boolean | null,
    has_home_owners_insurance?: boolean | null,
    installerId?: string | null,
    installer?:  {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    payment_method?: PaymentMethod | null,
    electric_bill?: string | null,
    estimatedAnnualUsage?: string | null,
    initialDesign?:  {
      __typename: "InitialDesign",
      jobId?: string | null,
      productId?: number | null,
      imageUrl?: string | null,
    } | null,
    finalDesign?:  {
      __typename: "FinalDesign",
      designPdf?: string | null,
    } | null,
    user_images?: Array< string | null > | null,
    projectStatus?: ProjectStatus | null,
    userStatus?: UserStatus | null,
    measurementsOrderReportId?: string | null,
    salesforceId?: string | null,
    installerSalesforceId?: string | null,
    signed_installer_contract?: boolean | null,
    electric_bill_reviewed?: boolean | null,
    google_system_size?: number | null,
    requires_battery?: boolean | null,
    selected_battery?:  {
      __typename: "Battery",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      spec_sheet_url?: string | null,
      image_url?: string | null,
      power_output?: number | null,
      storage_capacity?: number | null,
      default_battery?: boolean | null,
    } | null,
    total_system_cost?: number | null,
    final_payment_amount?: number | null,
    site_survey_date?: string | null,
    installation_date?: string | null,
    final_payment_invoice?: string | null,
    user_agreed_to_final_design?: boolean | null,
    updated_by?: UserUpdateOptions | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    userId: string,
    klaravia_user_id?: string | null,
    content: string,
    sender: string,
    receiver: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    userId: string,
    klaravia_user_id?: string | null,
    content: string,
    sender: string,
    receiver: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    userId: string,
    klaravia_user_id?: string | null,
    content: string,
    sender: string,
    receiver: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateInstallerSubscriptionVariables = {
  filter?: ModelSubscriptionInstallerFilterInput | null,
};

export type OnCreateInstallerSubscription = {
  onCreateInstaller?:  {
    __typename: "Installer",
    id: string,
    cognitoPassword?: string | null,
    company_name?: string | null,
    company_address?: string | null,
    company_phone_number?: string | null,
    company_email?: string | null,
    company_tag_line?: string | null,
    company_red_line?: number | null,
    company_about_text?: string | null,
    company_cover_image_url?: string | null,
    available_panels?:  Array< {
      __typename: "Panel",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
      pMax?: string | null,
      width?: string | null,
      height?: string | null,
      dimensionsUnit?: string | null,
      efficiency?: string | null,
      panelSpecificationsUrl?: string | null,
      warrantyYears?: string | null,
      image_url?: string | null,
      default_panel?: boolean | null,
    } | null > | null,
    available_inverters?:  Array< {
      __typename: "Inverter",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
      spec_sheet_url?: string | null,
    } | null > | null,
    available_batteries?:  Array< {
      __typename: "Battery",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      spec_sheet_url?: string | null,
      image_url?: string | null,
      power_output?: number | null,
      storage_capacity?: number | null,
      default_battery?: boolean | null,
    } | null > | null,
    adders?:  Array< {
      __typename: "Adder",
      type?: string | null,
      cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
    } | null > | null,
    installerStates?:  {
      __typename: "ModelInstallerStateConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    google_place_id?: string | null,
    installer_reviews?:  Array< {
      __typename: "InstallerReview",
      id: string,
      pfp?: string | null,
      name?: string | null,
      rating: number,
      title?: string | null,
      review?: string | null,
    } | null > | null,
    installer_rating?: number | null,
    salesforceId?: string | null,
    years_in_business?: number | null,
    average_install_time?: number | null,
    user_agreement?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInstallerSubscriptionVariables = {
  filter?: ModelSubscriptionInstallerFilterInput | null,
};

export type OnUpdateInstallerSubscription = {
  onUpdateInstaller?:  {
    __typename: "Installer",
    id: string,
    cognitoPassword?: string | null,
    company_name?: string | null,
    company_address?: string | null,
    company_phone_number?: string | null,
    company_email?: string | null,
    company_tag_line?: string | null,
    company_red_line?: number | null,
    company_about_text?: string | null,
    company_cover_image_url?: string | null,
    available_panels?:  Array< {
      __typename: "Panel",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
      pMax?: string | null,
      width?: string | null,
      height?: string | null,
      dimensionsUnit?: string | null,
      efficiency?: string | null,
      panelSpecificationsUrl?: string | null,
      warrantyYears?: string | null,
      image_url?: string | null,
      default_panel?: boolean | null,
    } | null > | null,
    available_inverters?:  Array< {
      __typename: "Inverter",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
      spec_sheet_url?: string | null,
    } | null > | null,
    available_batteries?:  Array< {
      __typename: "Battery",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      spec_sheet_url?: string | null,
      image_url?: string | null,
      power_output?: number | null,
      storage_capacity?: number | null,
      default_battery?: boolean | null,
    } | null > | null,
    adders?:  Array< {
      __typename: "Adder",
      type?: string | null,
      cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
    } | null > | null,
    installerStates?:  {
      __typename: "ModelInstallerStateConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    google_place_id?: string | null,
    installer_reviews?:  Array< {
      __typename: "InstallerReview",
      id: string,
      pfp?: string | null,
      name?: string | null,
      rating: number,
      title?: string | null,
      review?: string | null,
    } | null > | null,
    installer_rating?: number | null,
    salesforceId?: string | null,
    years_in_business?: number | null,
    average_install_time?: number | null,
    user_agreement?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInstallerSubscriptionVariables = {
  filter?: ModelSubscriptionInstallerFilterInput | null,
};

export type OnDeleteInstallerSubscription = {
  onDeleteInstaller?:  {
    __typename: "Installer",
    id: string,
    cognitoPassword?: string | null,
    company_name?: string | null,
    company_address?: string | null,
    company_phone_number?: string | null,
    company_email?: string | null,
    company_tag_line?: string | null,
    company_red_line?: number | null,
    company_about_text?: string | null,
    company_cover_image_url?: string | null,
    available_panels?:  Array< {
      __typename: "Panel",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
      pMax?: string | null,
      width?: string | null,
      height?: string | null,
      dimensionsUnit?: string | null,
      efficiency?: string | null,
      panelSpecificationsUrl?: string | null,
      warrantyYears?: string | null,
      image_url?: string | null,
      default_panel?: boolean | null,
    } | null > | null,
    available_inverters?:  Array< {
      __typename: "Inverter",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
      spec_sheet_url?: string | null,
    } | null > | null,
    available_batteries?:  Array< {
      __typename: "Battery",
      manufacturer?: string | null,
      seriesName?: string | null,
      additional_cost?: number | null,
      spec_sheet_url?: string | null,
      image_url?: string | null,
      power_output?: number | null,
      storage_capacity?: number | null,
      default_battery?: boolean | null,
    } | null > | null,
    adders?:  Array< {
      __typename: "Adder",
      type?: string | null,
      cost?: number | null,
      requires_watt_multiplier?: boolean | null,
      watt_multiplier?: number | null,
    } | null > | null,
    installerStates?:  {
      __typename: "ModelInstallerStateConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    google_place_id?: string | null,
    installer_reviews?:  Array< {
      __typename: "InstallerReview",
      id: string,
      pfp?: string | null,
      name?: string | null,
      rating: number,
      title?: string | null,
      review?: string | null,
    } | null > | null,
    installer_rating?: number | null,
    salesforceId?: string | null,
    years_in_business?: number | null,
    average_install_time?: number | null,
    user_agreement?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateInstallerStateSubscriptionVariables = {
  filter?: ModelSubscriptionInstallerStateFilterInput | null,
};

export type OnCreateInstallerStateSubscription = {
  onCreateInstallerState?:  {
    __typename: "InstallerState",
    id: string,
    installer:  {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    state:  {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    installerId: string,
    stateId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInstallerStateSubscriptionVariables = {
  filter?: ModelSubscriptionInstallerStateFilterInput | null,
};

export type OnUpdateInstallerStateSubscription = {
  onUpdateInstallerState?:  {
    __typename: "InstallerState",
    id: string,
    installer:  {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    state:  {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    installerId: string,
    stateId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInstallerStateSubscriptionVariables = {
  filter?: ModelSubscriptionInstallerStateFilterInput | null,
};

export type OnDeleteInstallerStateSubscription = {
  onDeleteInstallerState?:  {
    __typename: "InstallerState",
    id: string,
    installer:  {
      __typename: "Installer",
      id: string,
      cognitoPassword?: string | null,
      company_name?: string | null,
      company_address?: string | null,
      company_phone_number?: string | null,
      company_email?: string | null,
      company_tag_line?: string | null,
      company_red_line?: number | null,
      company_about_text?: string | null,
      company_cover_image_url?: string | null,
      google_place_id?: string | null,
      installer_rating?: number | null,
      salesforceId?: string | null,
      years_in_business?: number | null,
      average_install_time?: number | null,
      user_agreement?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    state:  {
      __typename: "State",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    installerId: string,
    stateId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
