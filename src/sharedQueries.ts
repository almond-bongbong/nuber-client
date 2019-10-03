import { gql } from 'apollo-boost';

export const USER_PROFILE = gql`
    query userProfile {
        GetMyProfile {
            ok
            error
            user {
                firstName
                lastName
                email
                profilePhoto
                fullName
                isDriving
            }
        }
    }
`;