import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'

import UrlParsingForm from '../components/url-parsing-form'
import FeaturesComapringTable from '../components/features-comparing-table'

import {parseURLs, FETCH_URLS} from '../actions/app-actions'

import {getURLs, getProducts} from '../reducers/app-reducer'

class MainContainer extends Component {
  static propTypes = {
    urls: PropTypes.array,
    products: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
  }

  constructor() {
    super()
  }

  componentDidMount() {
    this.props.dispatch({type: FETCH_URLS})
  }

  submitHandler = urls => {
    this.props.dispatch(parseURLs(urls))
  }

  buildComponent = props => {
    const { urls, products } = props
    return (
        <div>
          <UrlParsingForm
              urls = {urls || []}
              submitHandler = {this.submitHandler}
          >
          </UrlParsingForm>
          <FeaturesComapringTable products = {products || []}/>
        </div>
    )
  }

  render() {
    return this.buildComponent(this.props)
  }
}

function mapStateToProps(state) {
  return {
    urls: getURLs(state),
    products: getProducts(state),
  }
}

export default connect(mapStateToProps)(MainContainer)