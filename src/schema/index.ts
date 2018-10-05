import { gql, makeExecutableSchema } from 'apollo-server'
import { merge } from 'lodash'
import { typeDef as Activity, resolvers as activityResolvers } from './activity'

const Query = gql`
  type Query {
    _empty: String
  }
`

const schema = makeExecutableSchema({
  typeDefs: [Query, Activity],
  resolvers: merge(activityResolvers)
})
export default schema
