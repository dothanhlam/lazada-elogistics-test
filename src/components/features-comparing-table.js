import React, {PropTypes, Component} from 'react'
import {Table, Panel} from 'react-bootstrap'


export default class FeaturesComparingTable extends Component {
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
              <tr>
                <th>#</th>
                <th>{products[0].name}</th>
                <th>{products[1].name}</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Price</td>
                <td>{products[0].price}</td>
                <td>{products[1].price}</td>
              </tr>
              <tr>
                <td>Seller</td>
                <td>{products[0].seller}</td>
                <td>{products[1].seller}</td>
              </tr>
              <tr>
                <td>Score</td>
                <td>{products[0].score}</td>
                <td>{products[1].score}</td>
              </tr>
              <tr>
                <td>Specs</td>
                <td>{products[0].specs}</td>
                <td>{products[1].specs}</td>
              </tr>
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