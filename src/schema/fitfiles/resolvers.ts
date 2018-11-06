export const resolvers = {
  Query: {
    fitfiles: async (obj: void, { id }: any, { get }: any): Promise<any> => {
      const { data } = await get(`/fitfiles/${id}/`)
      return data
    }
  }
}
