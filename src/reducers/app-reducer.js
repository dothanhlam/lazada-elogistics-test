const initialState =  {}
import { APP_ACTION, ADD_STATS, ADD_URLS, UPDATE_PRODUCTS } from './../actions/app-actions'

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case APP_ACTION:
      let mydata = state.stats.mydata
      const newstatus = (action.status === 'true') ? 'false' : 'true'

      mydata = [
        ...mydata.slice(0, action.id),
        mydata[action.id] = {id: mydata[action.id].id, value: newstatus},
        ...mydata.slice(action.id + 1)
      ]

      return Object.assign({}, state, { stats: { mydata } })

    case ADD_STATS:
      return Object.assign({}, state, { stats: action.stats })

    case ADD_URLS:
      return Object.assign({}, state, { urls: action.urls.urls })

    case UPDATE_PRODUCTS:
      return Object.assign({}, state, { products: action.products})

    default:
      return state
  }
}

// selection
export const getStats = state => state.appStatus.stats
export const getURLs  = state => state.appStatus.urls
export const getProducts = state => state.appStatus.products

export default appReducer