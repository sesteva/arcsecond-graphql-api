export const resolvers = {
  Query: {
    archives: async (obj: void, args: any, { get }: any): Promise<any> => {
      const { data } = await get('/archives/')
      return data
    },
    archivesESOData: async (
      obj: void,
      { page }: any,
      { get }: any
    ): Promise<any> => {
      const pageArg = page ? `?page=${page}` : ''
      const { data } = await get(`/archives/ESO/data/${pageArg}/`)
      return data.results
    },
    archive: async (obj: void, { name }: any, { get }: any): Promise<any> => {
      const { data } = await get(`/archives/${name}/`)
      return data
    }
  },
  ArchiveESOData: {
    programme: async (
      { programme }: any,
      args: any,
      { get }: any
    ): Promise<any> => {
      const { data } = await get(`/archives/ESO/${programme}/summary/`)
      return data
    }
  }
}
