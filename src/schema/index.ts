import { gql, makeExecutableSchema } from 'apollo-server'
import { merge } from 'lodash'
import { typeDef as Author, resolvers as authorResolvers } from './author'
import { typeDef as Book, resolvers as bookResolvers } from './book'

const Query = gql`
  type Query {
    _empty: String
  }
`

const resolvers = {}

const schema = makeExecutableSchema({
  typeDefs: [Query, Author, Book],
  resolvers: merge(resolvers, authorResolvers, bookResolvers)
})
export default schema
