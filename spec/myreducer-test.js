import myreducer from '../src/reducers/app-reducer.js'
import * as chai from 'chai'

let assert = chai.assert
let should = chai.should()
let expect = chai.expect

describe('My reducer', () => {

  it('Should set status', () => {

    const initialState = { stats: {
        mydata: [
          {
            id: '1',
            value: 'true'
          },
          {
            id: '2',
            value: 'false'
          },
        ]
      }
    }

    const expectedState = { stats: {
        mydata: [
          {
            id: '1',
            value: 'true'
          },
          {
            id: '2',
            value: 'true'
          },
        ]
      }
    }

    const newState = myreducer(initialState, { type: 'APP_ACTION', id: 1, status: true })
    expect(newState).to.eql(expectedState)

  })

})