import { get } from '../../services'

export const resolvers = {
  Query: {
    nightlog: async (_: void, { uuid }: any): Promise<any> => {
      const { data } = await get(`/nightlogs/${uuid}/`)
      return data
    },
    nightlogObservation: async (_: void, { uuid }: any): Promise<any> => {
      const { data } = await get(`/nightlogs/${uuid}/observations/${uuid}/`)
      return data
    }
  }
}
