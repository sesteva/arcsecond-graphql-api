import { get } from '../../services'

export const resolvers = {
  Query: {
    dataset: async (_: void, { id, uuid }: any): Promise<any> => {
      const { data } = await get(`/datasets/${uuid}/fitsfiles/${id}/`)
      return data
    }
  }
}
