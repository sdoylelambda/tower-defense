import { MARK_UNAVAILABLE } from './consts'

export const markUnavailable = (position) => {
  return {
      type: MARK_UNAVAILABLE,
      position,
  }
}
