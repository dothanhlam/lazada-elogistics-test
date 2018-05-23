export const APP_ACTION = 'APP_ACTION'
export const FETCH_STATUS = 'FETCH_STATUS'
export const ADD_STATS = 'ADD_STATS'

export const FETCH_URLS = 'FETCH_URLS'
export const ADD_URLS = 'ADD_URLS'
export const PARSE_URLS = 'PARSE_URLS'
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS'

export const appAction = status => {

  return {
    type: APP_ACTION,
    id,
    newstatus
  }

}

export const addStats = stats => {
  return {
    type: ADD_STATS,
    stats
  }
}

export const addURLs = urls => {
  return {
    type: ADD_URLS,
    urls
  }
}

export function fetchStatus() {
  return {
    type: FETCH_STATUS
  }
}

export function fetchURLs() {
  return {
    type: FETCH_URLS
  }
}

export function parseURLs(urls) {
  return {
    type: PARSE_URLS,
    urls
  }
}

export const updateProducts = products => {
  return {
    type: UPDATE_PRODUCTS,
    products
  }
}