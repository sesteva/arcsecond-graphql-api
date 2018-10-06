import { get } from '../../services'

export const resolvers = {
  Query: {
    convertersCoordinates: async (_: void, { ra, dec }: any): Promise<any> => {
      const { data } = await get(`/converters/coordinates/ra/${ra}/dec/${dec}/`)
      return data
    },
    convertersTimes: async (
      _: void,
      { input_format, input_value }: any
    ): Promise<any> => {
      const { data } = await get(
        `/converters/times/${input_format}/${input_value}/`
      )
      return data
    }
  }
}
