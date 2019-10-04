import { gql } from 'apollo-boost';

export const REPORT_LOCATION = gql`
  mutation reportMovement(
      $lat: Float! 
      $lng: Float!
      $orientation: Float
  ) {
      ReportMovement(
          lat: $lat
          lng: $lng
          orientation: $orientation
      ) {
          ok
          error
      }
  }
`;