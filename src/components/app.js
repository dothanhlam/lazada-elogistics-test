import React from 'react'
import {Jumbotron} from 'react-bootstrap'

const App = props => {

  return (
      <div className = "container">
        <Jumbotron>
          <h1>Lazada eLogistics Test</h1>
          <p>
            Make your own products comparing.
          </p>
        </Jumbotron>
        <div>
          {props.children }
        </div>
      </div>
  )

}

export default App