import { gql, makeExecutableSchema } from 'apollo-server'
import { merge } from 'lodash'
import { typeDef as Activity, resolvers as activityResolvers } from './activity'

const Scalars = gql`
  scalar Date
`
const Query = gql`
  type Query {
    _empty: String
  }
`

const schema = makeExecutableSchema({
  typeDefs: [Scalars, Query, Activity],
  resolvers: merge(activityResolvers)
})
export default schema
