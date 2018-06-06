import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavbarView from '../components/NavbarView'
import * as actions from '../actions'

class Navbar extends Component {
  componentDidMount() {
    this.props.receiveCategoriesAsync()
  }

  render() {
    const { categories } = this.props
    return (
      (categories && categories.length) ?
        <NavbarView categories={categories}/> : null
    )
  }
}

const mapStateToProps = ({ categoryReducer }) => ({ categories: categoryReducer.categories })

export default connect(
  mapStateToProps,
  actions
)(Navbar)
