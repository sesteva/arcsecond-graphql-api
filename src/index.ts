import { ApolloServer } from 'apollo-server'
import { get } from './services'
import schema from './schema'

const context = { get }
const server = new ApolloServer({ schema, context })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
