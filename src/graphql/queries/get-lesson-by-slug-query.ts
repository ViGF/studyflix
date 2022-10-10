import { gql } from '@apollo/client';

export const GET_LESSONS_BY_SLUG = gql`
    query GetLessonsBySlug($slug: String) {
        module(where: {slug: $slug}) {    
            priority
            title
            number
            slug
            lessons {
                videoId
                title
                slug
            }
        }
    }
`