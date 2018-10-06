import { gql } from 'apollo-server'
import { typeDef as Activity } from './activity'
import { typeDef as Archive } from './archive'
import { typeDef as Converter } from './converter'
import { typeDef as Coordinates } from './coordinates'
import { typeDef as Dataset } from './dataset'
import { typeDef as Exoplanet } from './exoplanet'
import { typeDef as FindingChart } from './findingchart'
import { typeDef as FitFiles } from './fitfiles'
import { typeDef as Instrument } from './instrument'
import { typeDef as Interferometer } from './interferometer'

const Scalars = gql`
  scalar Date
`
const Query = gql`
  type Query {
    _empty: String
  }
`

const typeDefs = [
  Scalars,
  Query,
  Activity,
  Archive,
  Converter,
  Coordinates,
  Dataset,
  Exoplanet,
  FindingChart,
  FitFiles,
  Instrument,
  Interferometer
]

export default typeDefs
