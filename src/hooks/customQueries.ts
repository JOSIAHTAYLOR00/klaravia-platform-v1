import { gql } from "@apollo/client";

export const customListIntallers = gql`
query ListInstallers(
  $filter: ModelInstallerFilterInput
  $limit: Int
  $nextToken: String
) {
  listInstallers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      available_batteries{
        __typename
        manufacturer
        seriesName
        additional_cost
        storage_capacity
        power_output
      }
      available_panels{
        __typename
        manufacturer
        seriesName
        additional_cost
        pMax
        efficiency
        warrantyYears
      }
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
`