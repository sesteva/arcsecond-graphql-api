import { gql } from 'apollo-server'

export const typeDef = gql`
  extend type Query {
    nightlog(uuid: String!): NightLog
    nightlogObservation(uuid: String!): NightLogObservation
  }

  type NightLog {
    date: String
    journal: String
    observing_run: String
    telescope: String
    observations: [String]
    datasets: [String]
  }

  type NightLogObservation {
    uuid: String
    night_log: String
    targets: [AstronomicalObject]
    exposures: AstronomicalObjectExposure
    notes: String
  }

  type AstronomicalObject {
    name: String
    source: String
    ICRS_coordinates: TypeICRSCoordinates
    ecliptic_coordinates: AstronomicalObjectCoordinates
    galactic_coordinates: AstronomicalObjectCoordinates
    super_galactic_coordinates: AstronomicalObjectCoordinates
    spectral_type: AstronomicalObjectType
    morphological_type: AstronomicalObjectType
    proper_motion: AstronomicalObjectProperMotion
    parallax: AstronomicalObjectParallax
    radial_velocity: AstronomicalObjectRadialVelocity
    age: AstronomicalObjectVariables
    mass: AstronomicalObjectVariables
    radius: AstronomicalObjectVariables
    distance: AstronomicalObjectVariables
    metallicity: AstronomicalObjectMetallicity
    effective_temperature: AstronomicalObjectVariables
    aliases: [AstronomicalObjectAliases]
    object_types: String
    classifications: [AstronomicalObjectClassifications]
    fluxes: [AstronomicalObjectFluxes]
    planets: [Int]
    astronomer_telegrams: [Int]
  }

  type TypeICRSCoordinates {
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

  type AstronomicalObjectCoordinates {
    longitude: Int
    longitude_units: String
    latitude: Int
    latitude_units: String
    epoch: String
    equinox: String
    reference: String
    source: String
    retrieval_date: String
  }

  type AstronomicalObjectType {
    id: Int
    value: String
    quality: String
    bibcode: String
  }

  type AstronomicalObjectProperMotion {
    id: Int
    value_right_ascension: Float
    value_declination: Float
    precision_right_ascension: Float
    precision_declination: Float
    value_right_ascension_unit: String
    value_declination_unit: String
    error_major_axis: Float
    error_minor_axis: Float
    error_angle: Float
    error_angle_unit: String
    quality: String
    bibcode: String
  }

  type AstronomicalObjectParallax {
    id: Int
    value: Float
    precision: Float
    error: Float
    unit: String
    quality: String
    bibcode: String
  }

  type AstronomicalObjectRadialVelocity {
    id: Int
    value: Float
    error: Float
    type: String
    unit: String
    quality: String
    wavelength: String
    bibcode: String
  }

  type AstronomicalObjectVariables {
    value: Float
    unit: String
    error_max: Float
    error_min: Float
    bibcode: String
  }

  type AstronomicalObjectMetallicity {
    value: Float
    unit: String
    error: Float
    error_max: Float
    error_min: Float
    bibcode: String
  }

  type AstronomicalObjectAliases {
    name: String
    vizier_catalogue_url: String
    ned_associated_object_type: String
  }

  type AstronomicalObjectClassifications {
    type: String
    as_published: String
    ned_homogenized: String
    flag: String
    bibcode: String
  }

  type AstronomicalObjectFluxes {
    name: String
    value: Float
    error: Float
    error_max: Float
    error_min: Float
    bibcode: String
    quality: String
    system: String
    unit: String
    flags: String
  }

  type AstronomicalObjectExposure {
    pk: Float
    start: String
    duration: Float
    count: Float
    leading_overhead: Float
    trailing_overhead: Float
  }
`
