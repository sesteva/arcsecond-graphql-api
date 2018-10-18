export const resolvers = {
  Query: {
    findingcharts: async (
      obj: void,
      { input }: any,
      { get }: any
    ): Promise<any> => {
      const { data } = await get(`/findingcharts/${input}/`)
      return data
    }
  }
}
