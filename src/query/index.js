import { gql } from '@apollo/client'

const CHARACTER_SEARCH = gql`
  query ($page: Int, $searchChar: String) {
    characters(page: $page, filter: { name: $searchChar }) {
      info {
        pages
        next
        prev
      }
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