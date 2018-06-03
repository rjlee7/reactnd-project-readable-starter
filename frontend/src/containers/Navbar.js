import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavbarView from '../components/NavbarView'
import { receiveCategoriesAsync } from '../actions'

class Navbar extends Component {
  componentDidMount() {
    this.props.dispatch(receiveCategoriesAsync())
  }

  render() {
    console.log('this.props.forum',this.props.forum)
    const { categories } = this.props.forum
    return (
      (categories && categories.length) ?
        <NavbarView
          categories={categories}/> : null
    )
  }
}

function mapStateToProps ({ forum }) {
  return {
    forum
  }
}

export default connect(
  mapStateToProps,
)(Navbar)
