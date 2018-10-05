import { gql } from 'apollo-server'
import { books } from '../mocks'
import { BookArgs, AuthorObj, Book } from '../types'

export const typeDef = gql`
  extend type Query {
    author(id: Int!): Author
  }

  type Author {
    id: Int!
    firstName: String
    lastName: String
    books: [Book]
  }
`

export const resolvers = {
  Query: {
    author: (_: void, { id }: BookArgs): string => books[id].author
  },
  Author: {
    books: ({ firstName, lastName }: AuthorObj): Array<Book> =>
      books.filter((book: Book) => book.author === `${firstName} ${lastName}`)
  }
}
