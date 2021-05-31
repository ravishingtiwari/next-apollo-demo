import { gql } from '@apollo/client'

export const peopleQuery = gql`
  query people($offset: Int, $limit: Int) {
    people(offset: $offset, limit: $limit) {
      id
      name
      address
      email
      phone
    }
  }
`
