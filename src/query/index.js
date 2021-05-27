import { gql } from '@apollo/client'

const INFO_PERSON = gql`
  query {
    characters {
      results {
        name
        species
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  }
`

export default INFO_PERSON