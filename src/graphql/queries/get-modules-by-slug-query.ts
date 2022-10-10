import { gql } from '@apollo/client';

export const GET_MODULES_BY_SLUG_QUERY = gql`
    query GetModulesBySlug($slug: String) {
        subjects(where: {slug: $slug}) {
            title
            modules {
                priority
                title
                number
                slug
            }
        }
    }
`