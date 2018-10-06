import { get } from '../../services'

export const resolvers = {
  Query: {
    interferometers: async (): Promise<any> => {
      const { data } = await get('/interferometers/')
      return data
    },
    interferometer: async (_: void, { uuid }: any): Promise<any> => {
      const { data } = await get(`/interferometers/${uuid}/`)
      return data
    }
  }
}
