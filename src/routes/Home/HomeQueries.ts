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

export const GET_NEARBY_DRIVERS = gql`
    query getDrivers {
        GetNearbyDrivers {
            ok
            error
            drivers {
                id
                lastLat
                lastLng
            }
        }
    }
`;

export const REQUEST_RIDE = gql`
    mutation requestRide(
        $pickUpAddress: String!
        $pickUpLat: Float!
        $pickUpLng: Float!
        $dropOffAddress: String!
        $dropOffLat: Float!
        $dropOffLng: Float!
        $price: Float!
        $distance: String!
        $duration: String!
    ) {
        RequestRide (
            pickUpAddress: $pickUpAddress
            pickUpLat: $pickUpLat
            pickUpLng: $pickUpLng
            dropOffAddress: $dropOffAddress
            dropOffLat: $dropOffLat
            dropOffLng: $dropOffLng
            price: $price
            distance: $distance
            duration: $duration
        ) {
            ok
            error
            ride {
                id
            }
        }
    }
`;

export const GET_NEARBY_RIDE = gql`
  query getNearByRides {
      GetNearByRide {
          ok
          error
          ride {
              id
              pickUpAddress
              dropOffAddress
              price
              distance
              duration
              passenger {
                  fullName
                  profilePhoto
              }
          }
      }
  }
`;

export const ACCEPT_RIDE = gql`
    mutation acceptRide(
        $rideId: Int!
    ) {
        UpdateRideStatus(
            rideId: $rideId
            status: ACCEPTED
        ) {
            ok
            error
        }
    }
`;

export const SUBSCRIBE_NEARBY_RIDES = gql`
    subscription nearByRides {
        NearByRideSubscription {
            id
            pickUpAddress
            dropOffAddress
            price
            distance
            duration
            passenger {
                fullName
                profilePhoto
            }
        }
    }
`;