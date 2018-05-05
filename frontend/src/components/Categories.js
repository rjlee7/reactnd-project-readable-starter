import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { receiveCategoriesAsync } from '../actions'
import Modal from 'react-modal'
import Loading from 'react-loading'

class Categories extends Component {
  componentDidMount() {
    console.log('this.props.match',this.props.match)
    // this.props.dispatch(receiveCategoriesAsync())
    const { params } = this.props
    console.log('params',params)
  }

  render() {
    return (
      <div></div>
      // <ul className='forum-categories'>
      //   {categories.map((category) => (
      //     <li key={category.name} className='subheader'>
      //       <Link to={`/category/${category.path}`}>{capitalize(category.name)}</Link>
      //     </li>
      //   ))}
      // </ul>

    )
  }
}
//
// function mapStateToProps ({ forum }) {
//   return {
//     forum
//   }
// }

export default connect(
  // mapStateToProps,
)(Categories)
