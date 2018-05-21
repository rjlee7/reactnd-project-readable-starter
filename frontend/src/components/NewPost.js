import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NewPost extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>NEW POST</div>
    )
  }
}
//
// function mapStateToProps ({ forum }) {
//   return {
//     forum
//   }
// }
//
// export default connect(
//   mapStateToProps,
// )(NewPost)
export default NewPost
