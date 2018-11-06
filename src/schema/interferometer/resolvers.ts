export const resolvers = {
  Query: {
    interferometers: async (
      obj: void,
      args: any,
      { get }: any
    ): Promise<any> => {
      const { data } = await get('/interferometers/')
      return data
    },
    interferometer: async (
      obj: void,
      { uuid }: any,
      { get }: any
    ): Promise<any> => {
      const { data } = await get(`/interferometers/${uuid}/`)
      return data
    }
  }
}
