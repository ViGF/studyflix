import { gql } from '@apollo/client';

export const GET_SUBJECTS = gql`
    query GetSubjects {
        subjects {
            title
            slug
        }
    }
`