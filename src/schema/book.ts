import { gql } from 'apollo-server'
import { books, authors } from '../mocks'
import { BookArgs, Book, BookAuthorObj } from '../types'

export const typeDef = gql`
  extend type Query {
    book(id: Int!): Book
  }

  type Book {
    title: String
    author: Author
  }
`

export const resolvers = {
  Query: {
    book: (_: void, { id }: BookArgs): Book => {
      return books[id]
    }
  },
  Book: {
    author: ({ author }: BookAuthorObj): string => {
      return authors[author]
    }
  }
}
