import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { receiveCategoriesAsync } from '../actions'

class Categories extends Component {
  componentDidMount() {
    this.props.dispatch(receiveCategoriesAsync())
  }

  render() {
    const { categories } = this.props.forum
    return (
      <ul className='forum-categories'>
        {categories.map((category) => (
          <li key={category.name} className='subheader'>
            <Link to={`/${category.path}`}>{category.name}</Link>
          </li>
        ))}
      </ul>

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
)(Categories)
