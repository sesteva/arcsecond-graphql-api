import { gql } from 'apollo-server'
import { typeDef as Activity } from './activity'
import { typeDef as Archive } from './archive'
import { typeDef as Converter } from './converter'
import { typeDef as Coordinates } from './coordinates'
import { typeDef as Dataset } from './dataset'

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
  Dataset
]

export default typeDefs
