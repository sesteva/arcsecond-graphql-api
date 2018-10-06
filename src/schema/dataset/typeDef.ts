import { gql } from 'apollo-server'

export const typeDef = gql`
  extend type Query {
    dataset(id: Int!, uuid: String!): Dataset
  }

  type Dataset {
    pk: Int
    name: String
    size: String
    tags: String
    target_name: String
    dataset: String
    file: String
    download_url: String
    hdus: String
    instrument: Instrument
  }
`
