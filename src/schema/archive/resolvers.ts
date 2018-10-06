import { get } from '../../services'

export const resolvers = {
  Query: {
    archives: async (): Promise<any> => {
      const { data } = await get('/archives/')
      return data
    },
    archivesESOData: async (_: void, { page }: any): Promise<any> => {
      const pageArg = page ? `?page=${page}` : ''
      const { data } = await get(`/archives/ESO/data/${pageArg}/`)
      return data.results
    },
    archive: async (_: void, { name }: any): Promise<any> => {
      const { data } = await get(`/archives/${name}/`)
      return data
    }
  },
  ArchiveESOData: {
    programme: async ({ programme }: any): Promise<any> => {
      const { data } = await get(`/archives/ESO/${programme}/summary/`)
      return data
    }
  }
}
