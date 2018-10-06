import { get } from '../../services'

export const resolvers = {
  Query: {
    coordinates: async (_: void, { id }: any): Promise<any> => {
      const { data } = await get(`/coordinates/${id}/`)
      return data
    }
  }
}
