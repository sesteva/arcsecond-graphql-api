import { gql, makeExecutableSchema } from 'apollo-server'
import { merge } from 'lodash'
import { typeDef as Activity, resolvers as activityResolvers } from './activity'
import { typeDef as Archive, resolvers as archiveResolvers } from './archive'

const Scalars = gql`
  scalar Date
`
const Query = gql`
  type Query {
    _empty: String
  }
`

const schema = makeExecutableSchema({
  typeDefs: [Scalars, Query, Activity, Archive],
  resolvers: merge(activityResolvers, archiveResolvers)
})

export default schema
