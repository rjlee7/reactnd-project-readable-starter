import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavbarView from '../components/NavbarView'
import { receiveCategoriesAsync } from '../actions'

class Navbar extends Component {
  componentDidMount() {
    this.props.dispatch(receiveCategoriesAsync())
  }

  render() {
    const { categories } = this.props
    return (
      (categories && categories.length) ?
        <NavbarView
          categories={categories}/> : null
    )
  }
}

const mapStateToProps = ({ forum }) => ({ categories: forum.categories })

export default connect(
  mapStateToProps,
)(Navbar)
