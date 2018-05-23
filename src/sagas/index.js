import {takeEvery} from 'redux-saga'
import {put, call} from 'redux-saga/effects'
import * as actions from '../actions/app-actions'
import query from '../utils/query'
import normalizeStatus from '../utils/normalizestatus'

const API_ENDPOINT = 'http://localhost:3001/api/'
const getCall = api => {
  //TODO: should move to webpack setting
  return API_ENDPOINT.concat(api)
}
// TODO: add try catch
function* fetchStatus(action) {
  const status = yield call(query, 'GET', getCall('status'))
  const parsedData = yield call(normalizeStatus, status)
  yield put(actions.addStats(parsedData))
}

function* fetchURLsFromCache(action) {
  if (!caches) {
    return null
  }
    const parsedData = yield caches.match(getCall('urls')).then(function(response) {
      if (response) {
        response.json().then(function(json) {
            return json
        })
      }
      return null
    })

  yield put(actions.updateProducts(parsedData))
}

function* fetchURLs(action) {
  const urls = yield call(query, 'GET', getCall('urls'))
  console.log('urls: ', urls)
  const parsedData = yield call(normalizeStatus, urls)
  yield put(actions.addURLs(parsedData))
}

function* parseURLsHandler(action) {
  const {urls} = action
  const products = yield call(query, 'POST', getCall('parse'), urls)
  const parsedData = yield call(normalizeStatus, products)
  yield put(actions.updateProducts(parsedData))
}

export function* watchFetchStatus() {
  yield takeEvery(actions.FETCH_STATUS, fetchStatus)
  yield takeEvery(actions.FETCH_URLS, fetchURLs)
}

export function* parseURLs() {
  yield takeEvery(actions.PARSE_URLS, parseURLsHandler)
}

export default function* rootSaga() {
  yield [
      watchFetchStatus(),
      parseURLs(),
  ]
}

