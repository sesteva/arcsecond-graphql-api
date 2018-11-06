export const resolvers = {
  Query: {
    dataset: async (
      obj: void,
      { id, uuid }: any,
      { get }: any
    ): Promise<any> => {
      const { data } = await get(`/datasets/${uuid}/fitsfiles/${id}/`)
      return data
    }
  }
}
