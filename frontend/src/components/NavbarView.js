import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCommentAsync, updateCommentAsync, voteCommentAsync } from '../actions'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import Loading from 'react-loading'
import { receiveCategoriesAsync } from '../actions'

class NavbarView extends Component {
  componentDidMount() {
    this.props.dispatch(receiveCategoriesAsync())
  }
  render() {
    const { categories } = this.props.forum
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <Link className="navbar-brand" to={`/`}>Readable</Link>
        <ul className="navbar-nav">
        {categories.map((category) => (
          <li key={category.name} className="nav-item">
            <Link className="nav-link" to={`/${category.path}`}>{category.name}</Link>
          </li>
        ))}
        </ul>
      </nav>
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
)(NavbarView)
