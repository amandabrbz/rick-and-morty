import { gql } from '@apollo/client'

const CHARACTER_SEARCH = gql`
  query ($character: String, $pages: Int) {
    characters(page:$pages, filter: { name: $character }) {
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
      info {
        pages
        next
        prev
      }
    }
  }
`

export default CHARACTER_SEARCH