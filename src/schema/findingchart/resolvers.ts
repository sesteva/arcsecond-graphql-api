import { get } from '../../services'

export const resolvers = {
  Query: {
    findingcharts: async (_: void, { input }: any): Promise<any> => {
      const { data } = await get(`/findingcharts/${input}/`)
      return data
    }
  }
}
