import { gql } from 'apollo-server'

export const typeDef = gql`
  extend type Query {
    archives: [Archive]
    archivesESOData(page: Int): [ArchiveESOData]
    archive(name: String!): Archive
  }

  type Archive {
    name: String
    portal_url: String
  }

  type ArchiveESOData {
    id: Int
    archive: Archive
    programme: Programme
    coordinates: Coordinates
    instrument: String
    exposure_time: Float
    date_created: Date
    target_name: String
    more_url: String
    seeing_url: String
    dataset_id: String
    date: Date
    filtername: String
    mjd_obs: Float
    survey_id: String
    category: String
    exposure_type: String
    technique_type: String
    release_date: String
    observation_template: String
    observation_start: Date
    grism: String
    grating: String
    slit: String
    airmass_at_start: Float
  }
`
