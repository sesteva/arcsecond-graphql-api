import { gql } from 'apollo-server'

export const typeDef = gql`
  extend type Query {
    coordinates(id: Int!): Coordinates
  }

  type Coordinates {
    longitude: Float
    latitude: Float
    height: Float
  }
`
