import { config } from '@/shared/config'
import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: config.API_URL,
})
