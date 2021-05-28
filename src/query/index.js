import { gql } from '@apollo/client'

const CHARACTER_SEARCH = gql`
  query ($searchChar: String) {
    characters(filter: { name: $searchChar }) {
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

export default CHARACTER_SEARCH