import { get } from '../../services'

export const resolvers = {
  Query: {
    exoplanets: async (
      _: void,
      { page, page_size, search }: any
    ): Promise<any> => {
      const pageArg = page ? `page=${page}&` : ''
      const pageSizeArg = page_size ? `page_size=${page_size}&` : ''
      const searchArg = search ? `search=${search}&` : ''
      const args = `${pageArg}${pageSizeArg}${searchArg}`.slice(0, -1)
      const { data } = await get(`/exoplanets/?${args}`)
      return data.results
    },
    exoplanet: async (_: void, { id }: any): Promise<any> => {
      const { data } = await get(`/exoplanets/${id}/`)
      return data
    },
    exoplanetByName: async (_: void, { name }: any): Promise<any> => {
      const { data } = await get(`/exoplanets/${name}/`)
      return data
    },
    exoplanetCoordinates: async (_: void, { name }: any): Promise<any> => {
      const { data } = await get(`/exoplanets/${name}/coordinates/`)
      return data
    }
  }
}
