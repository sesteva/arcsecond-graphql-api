import { gql } from 'apollo-server'

export const typeDef = gql`
  extend type Query {
    interferometers: [Interferometer]
    interferometer(uuid: Int!): Interferometer
  }

  type Interferometer {
    uuid: String
    configurations: [InterferometerConfiguration]
    name: String
    observing_site: String
  }

  type InterferometerConfiguration {
    uuid: String
    telescope_stations: [TelescopeStation]
  }

  type TelescopeStation {
    name: String
    telescopes: [String]
    horizon_masks: [HorizonMask]
  }

  type HorizonMask {
    name: String
    file: String
    telescope: String
    start: String
    direction: String
    altitude_unit: String
    azimuth_values: String
    altitude_values: String
  }
`
