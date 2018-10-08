import { gql } from 'apollo-server'

export const typeDef = gql`
  extend type Query {
    nightlog(uuid: Int!): NightLog
    nightlogObservation(uuid: Int!): NightLog
  }

  type NightLog {
    uuid: String
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
    target: [Target]
    exposures: Exposure
    notes: String
  }

  type AstronomicalObject {
    name: String
    source: String
  }
`

const a = {
  uuid: 'string',
  night_log: 'string',
  targets: [
    {
      name: 'string',
      source: 'Simbad',
      ICRS_coordinates: {
        right_ascension: 0,
        right_ascension_units: 'string',
        declination: 0,
        declination_units: 'string',
        epoch: 'string',
        equinox: 'string',
        reference: 'string',
        source: 'string',
        retrieval_date: '2018-10-06T03:41:30.559Z'
      },
      ecliptic_coordinates: {
        longitude: 0,
        longitude_units: 'string',
        latitude: 0,
        latitude_units: 'string',
        epoch: 'string',
        equinox: 'string',
        reference: 'string',
        source: 'string',
        retrieval_date: '2018-10-06T03:41:30.559Z'
      },
      galactic_coordinates: {
        longitude: 0,
        longitude_units: 'string',
        latitude: 0,
        latitude_units: 'string',
        epoch: 'string',
        equinox: 'string',
        reference: 'string',
        source: 'string',
        retrieval_date: '2018-10-06T03:41:30.559Z'
      },
      super_galactic_coordinates: {
        longitude: 0,
        longitude_units: 'string',
        latitude: 0,
        latitude_units: 'string',
        epoch: 'string',
        equinox: 'string',
        reference: 'string',
        source: 'string',
        retrieval_date: '2018-10-06T03:41:30.559Z'
      },
      spectral_type: {
        id: 0,
        value: 'string',
        quality: 'string',
        bibcode: 'string'
      },
      morphological_type: {
        id: 0,
        value: 'string',
        quality: 'string',
        bibcode: 'string'
      },
      proper_motion: {
        id: 0,
        value_right_ascension: 0,
        value_declination: 0,
        precision_right_ascension: 0,
        precision_declination: 0,
        value_right_ascension_unit: 'string',
        value_declination_unit: 'string',
        error_major_axis: 0,
        error_minor_axis: 0,
        error_angle: 0,
        error_angle_unit: 'string',
        quality: 'string',
        bibcode: 'string'
      },
      parallax: {
        id: 0,
        value: 0,
        precision: 0,
        error: 0,
        unit: 'string',
        quality: 'string',
        bibcode: 'string'
      },
      radial_velocity: {
        id: 0,
        value: 0,
        error: 0,
        type: 'string',
        unit: 'string',
        quality: 'string',
        wavelength: 'string',
        bibcode: 'string'
      },
      age: {
        value: 0,
        unit: 'string',
        error_max: 0,
        error_min: 0,
        bibcode: 'string'
      },
      mass: {
        value: 0,
        unit: 'string',
        error_max: 0,
        error_min: 0,
        bibcode: 'string'
      },
      radius: {
        value: 0,
        unit: 'string',
        error_max: 0,
        error_min: 0,
        bibcode: 'string'
      },
      distance: {
        value: 0,
        unit: 'string',
        error_max: 0,
        error_min: 0,
        bibcode: 'string'
      },
      metallicity: {
        value: 0,
        unit: 'string',
        error: 0,
        error_max: 0,
        error_min: 0,
        bibcode: 'string'
      },
      effective_temperature: {
        value: 0,
        unit: 'string',
        error_max: 0,
        error_min: 0,
        bibcode: 'string'
      },
      aliases: [
        {
          name: 'string',
          vizier_catalogue_url: 'string',
          ned_associated_object_type: 'string'
        }
      ],
      object_types: 'string',
      classifications: [
        {
          type: 'string',
          as_published: 'string',
          ned_homogenized: 'string',
          flag: 'string',
          bibcode: 'string'
        }
      ],
      fluxes: [
        {
          name: 'string',
          value: 0,
          error: 0,
          error_max: 0,
          error_min: 0,
          bibcode: 'string',
          quality: 'string',
          system: 'string',
          unit: 'string',
          flags: 'string'
        }
      ],
      planets: [0],
      astronomer_telegrams: [0]
    }
  ],
  exposures: {
    pk: 0,
    start: '2018-10-06T03:41:30.559Z',
    duration: 0,
    count: 0,
    leading_overhead: 0,
    trailing_overhead: 0
  },
  notes: 'string'
}
