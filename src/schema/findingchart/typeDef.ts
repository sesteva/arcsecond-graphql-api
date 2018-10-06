import { gql } from 'apollo-server'

export const typeDef = gql`
  extend type Query {
    findingcharts(input: String!): [FindingChart]
  }

  type FindingChart {
    input: String
    astronomical_object: String
    survey_name: String
    width: Float
    height: Float
    size_unit: String
    orientation: String
    band_name: String
    observing_date: String
    fits_url: String
    image_url: String
  }
`
