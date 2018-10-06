import { gql } from 'apollo-server'

export const typeDef = gql`
  extend type Query {
    instruments: [Instrument]
    instrument(uuid: Int!): Instrument
  }

  type Instrument {
    uuid: String
    archive: Archive
    name: String
    acronym: String
    telescope: String
  }
`
