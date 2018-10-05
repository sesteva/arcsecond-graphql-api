import axios from 'axios'

const url = 'https://api.arcsecond.io'
export const get = (urn: string): Promise<any> => axios.get(`${url}${urn}`)
