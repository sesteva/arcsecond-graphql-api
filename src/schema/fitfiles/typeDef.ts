import { gql } from 'apollo-server'

export const typeDef = gql`
  extend type Query {
    fitfiles(id: Int!): [Dataset]
  }
`
