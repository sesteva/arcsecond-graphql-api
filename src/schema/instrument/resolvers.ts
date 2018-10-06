import { get } from '../../services'

export const resolvers = {
  Query: {
    instruments: async (): Promise<any> => {
      const { data } = await get('/instruments/')
      return data
    },
    instrument: async (_: void, { uuid }: any): Promise<any> => {
      const { data } = await get(`/instruments/${uuid}/`)
      return data
    }
  }
}
