import React, {PropTypes, Component} from 'react'
import {Table, Panel} from 'react-bootstrap'


export default class FeaturesComparingTable extends Component {

  getHeader = products => {
    return (
        <tr>
          <th></th>
          {
            products.map((item, i) => <th>{item.name}</th>)
          }
        </tr>
    )
  }

  getField = (products, field) => {
    return (
        <tr>
          <td>{field}</td>
          {
            products.map((item, i) => <td>{item[field]}</td>)
          }
        </tr>
    )
  }

  buildComponent = props => {
    const {products} = props

    if (!products || !products.length) {
      return <span>Empty parsing products !</span>
    }


    return (
        <Panel>
          <Panel.Heading>Comparing</Panel.Heading>
          <Panel.Body>
            <Table responsive>
              <thead>
              {this.getHeader(products)}
              </thead>
              <tbody>
              {
                // TODO: nested loop, does not good
                Object.entries(products[0]).map(entry => {
                      return this.getField(products, entry[0])
                    }
                )
              }
              </tbody>
            </Table>
          </Panel.Body>
        </Panel>
    )
  }

  render() {
    return this.buildComponent(this.props)
  }
}

FeaturesComparingTable.PropTypes = {
  products: PropTypes.array,
}