import { gql } from '@apollo/client'

const INFO_PERSON = gql`
  query {
    characters {
      results {
        id
        name
        status
        gender
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