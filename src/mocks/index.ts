export const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park I',
    author: 'Michael Crichton'
  },
  {
    title: 'Jurassic Park II',
    author: 'Michael Crichton'
  },
  {
    title: 'Jurassic Park III',
    author: 'Michael Crichton'
  }
]

export const authors = {
  'J.K. Rowling': {
    id: 0,
    firstName: 'J.K.',
    lastName: 'Rowling'
  },
  'Michael Crichton': {
    id: 1,
    firstName: 'Michael',
    lastName: 'Crichton'
  }
}

export const activities = [
  {
    id: 0,
    links: [
      {
        title: 'string',
        url: 'string'
      }
    ],
    observing_site: 'string',
    telescope: 'string',
    instrument: 'string',
    target: 'string',
    coordinates: {
      system: 'ICRS',
      right_ascension: 0,
      right_ascension_units: 'string',
      declination: 0,
      declination_units: 'string',
      epoch: 0
    },
    profile: 'string',
    collaboration: 0,
    organisation: 0,
    programme: {
      id: 0,
      programme_id: 'string',
      period: 'string',
      observing_mode: '(Undefined)',
      programme_type: '(Undefined)',
      allocated_time: 'string',
      telescope_name: 'string',
      instrument_name: 'string',
      investigators_list: 'string',
      programme_title: 'string',
      remarks: 'string',
      abstract_url: 'string',
      abstract: 'string',
      observer_name: 'string',
      raw_files_url: 'string',
      publications_url: 'string'
    },
    creation_date: '2018-10-05T06:56:24.333Z',
    date: '2018-10-05T06:56:24.333Z',
    title: 'string',
    content: 'string',
    target_name: 'string'
  }
]
