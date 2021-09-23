import { AppState } from '../AppState'

class StatService {
  increase() {
    AppState.stat1++
  }

  decrease() {
    AppState.stat1--
  }
}

export const statService = new StatService()
