import { gql } from 'apollo-server'

export const typeDef = gql`
  extend type Query {
    convertersCoordinates(ra: String!, dec: String!): Converter
    convertersTimes(input_format: String!, input_value: String!): Converter
  }

  type Converter {
    input_first_value: String
    input_second_value: String
    input_frame: String
    error: String
    FK4: ICRS
    FK5: ICRS
    Galactic: Galactic
    ICRS: ICRS
  }

  type ICRS {
    right_ascension: Float
    right_ascension_units: String
    declination: Float
    declination_units: String
    epoch: String
    equinox: String
    reference: String
    source: String
    retrieval_date: String
  }

  type Galactic {
    longitude: Float
    longitude_units: String
    latitude: Float
    latitude_units: String
    epoch: String
    equinox: String
    reference: String
    source: String
    retrieval_date: String
  }
`
