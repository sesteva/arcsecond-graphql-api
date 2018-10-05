import { gql } from 'apollo-server'

export const typeDef = gql`
  extend type Query {
    activities: [Activiy]
    activity(id: Int!): Activiy
  }

  type Activiy {
    id: Int!
    links: [Link]
    observing_site: String
    telescope: String
    instrument: String
    target: String
    coordinates: Coordinates
    profile: String
    collaboration: Int
    organisation: Int
    programme: Programme
    creation_date: Date
    date: Date
    title: String
    content: String
    target_name: String
  }

  type Link {
    title: String
    url: String
  }

  type Coordinates {
    system: String
    right_ascension: Float
    right_ascension_units: String
    declination: Float
    declination_units: String
    epoch: Float
  }

  type Programme {
    id: Int!
    programme_id: String
    period: String
    observing_mode: String
    programme_type: String
    allocated_time: String
    telescope_name: String
    instrument_name: String
    investigators_list: String
    programme_title: String
    remarks: String
    abstract_url: String
    abstract: String
    observer_name: String
    raw_files_url: String
    publications_url: String
  }
`
