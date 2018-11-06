export const resolvers = {
  Query: {
    coordinates: async (obj: void, { id }: any, { get }: any): Promise<any> => {
      const { data } = await get(`/coordinates/${id}/`)
      return data
    }
  }
}
