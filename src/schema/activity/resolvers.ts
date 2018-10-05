import { get } from '../../services'

export const resolvers = {
  Query: {
    activities: async (): Promise<any> => {
      const { data } = await get('/activities')
      return data
    },
    activity: async (_: void, { id }: any): Promise<any> => {
      const { data } = await get(`/activities/${id}`)
      return data
    }
  }
}
