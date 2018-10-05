import { gql } from 'apollo-server'
import { activities } from '../mocks'

export const typeDef = gql`
  extend type Query {
    activities: [Activiy]
    activity(id: Int!): Activiy
  }

  scalar Date

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
    right_ascension: Int
    right_ascension_units: String
    declination: Int
    declination_units: String
    epoch: Int
  }

  enum ObservingMode {
    Visitor
    Service
  }

  enum ProgrammeType {
    Normal
    Programme
    Guaranteed
    TimeObservations
    DirectorsDiscretionaryTime
    TargetofOpportunity
    LargeProgramme
    ShortProgramme
    CalibrationProgramme
    MonitoringProgramme
  }

  type Programme {
    id: Int!
    programme_id: String
    period: String
    observing_mode: ObservingMode
    programme_type: ProgrammeType
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

export const resolvers = {
  Query: {
    activities: () => activities,
    activity: (_: void, { id }: any): any => {
      return activities[id]
    }
  }
}
