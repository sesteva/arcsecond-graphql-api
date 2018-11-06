export const resolvers = {
  Query: {
    nightlog: async (obj: void, { uuid }: any, { get }: any): Promise<any> => {
      const { data } = await get(`/nightlogs/${uuid}/`)
      return data
    },
    nightlogObservation: async (
      obj: void,
      { uuid }: any,
      { get }: any
    ): Promise<any> => {
      const { data } = await get(`/nightlogs/${uuid}/observations/${uuid}/`)
      return data
    }
  }
}
