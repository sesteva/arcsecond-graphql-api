import { books } from '../mocks'

const resolvers = {
  Query: {
    books: () => books
  }
}

export default resolvers
