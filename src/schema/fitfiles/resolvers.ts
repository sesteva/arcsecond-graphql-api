import { get } from '../../services'

export const resolvers = {
  Query: {
    fitfiles: async (_: void, { id }: any): Promise<any> => {
      const { data } = await get(`/fitfiles/${id}/`)
      return data
    }
  }
}
