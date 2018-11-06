export const resolvers = {
  Query: {
    convertersCoordinates: async (
      obj: void,
      { ra, dec }: any,
      { get }: any
    ): Promise<any> => {
      const { data } = await get(`/converters/coordinates/ra/${ra}/dec/${dec}/`)
      return data
    },
    convertersTimes: async (
      obj: void,
      { input_format, input_value }: any,
      { get }: any
    ): Promise<any> => {
      const { data } = await get(
        `/converters/times/${input_format}/${input_value}/`
      )
      return data
    }
  }
}
