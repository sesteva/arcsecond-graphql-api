import { gql, makeExecutableSchema } from 'apollo-server'
import { merge } from 'lodash'
import { typeDef as Activity, resolvers as activity } from './activity'
import { typeDef as Archive, resolvers as archive } from './archive'
import { typeDef as Converter, resolvers as converter } from './converter'
import { typeDef as Coordinates, resolvers as coordinates } from './coordinates'

const Scalars = gql`
  scalar Date
`
const Query = gql`
  type Query {
    _empty: String
  }
`

const schema = makeExecutableSchema({
  typeDefs: [Scalars, Query, Activity, Archive, Converter, Coordinates],
  resolvers: merge(activity, archive, converter, coordinates)
})

export default schema
