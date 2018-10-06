import { gql, makeExecutableSchema } from 'apollo-server'
import { merge } from 'lodash'
import { typeDef as Activity, resolvers as activity } from './activity'
import { typeDef as Archive, resolvers as archive } from './archive'
import { typeDef as Converters, resolvers as converters } from './converters'

const Scalars = gql`
  scalar Date
`
const Query = gql`
  type Query {
    _empty: String
  }
`

const schema = makeExecutableSchema({
  typeDefs: [Scalars, Query, Activity, Archive, Converters],
  resolvers: merge(activity, archive, converters)
})

export default schema
