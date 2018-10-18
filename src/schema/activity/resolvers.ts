export const resolvers = {
  Query: {
    activities: async (obj: void, args: any, { get }: any): Promise<any> => {
      const { data } = await get('/activities/')
      return data
    },
    activity: async (obj: void, { id }: any, { get }: any): Promise<any> => {
      const { data } = await get(`/activities/${id}/`)
      return data
    }
  }
}
