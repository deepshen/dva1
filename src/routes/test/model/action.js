import { namespace } from './testModel'

export const changea = payload => ({
  type: `${namespace}/changea`,
  payload,
})
