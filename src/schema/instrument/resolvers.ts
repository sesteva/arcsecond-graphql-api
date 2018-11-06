export const resolvers = {
  Query: {
    instruments: async (obj: void, args: any, { get }: any): Promise<any> => {
      const { data } = await get('/instruments/')
      return data
    },
    instrument: async (
      obj: void,
      { uuid }: any,
      { get }: any
    ): Promise<any> => {
      const { data } = await get(`/instruments/${uuid}/`)
      return data
    }
  }
}
