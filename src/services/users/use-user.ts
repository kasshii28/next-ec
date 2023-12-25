import type { ApiContext, User } from '../../types/data'
import { fetcher } from '../../utills'

const getAllUsers = async (context: ApiContext): Promise<User[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/, '')}/users`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getAllUsers
