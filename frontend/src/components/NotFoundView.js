import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  receivePostAsync,
  receiveCommentsAsync,
  deletePostAsync,
  deleteCommentAsync,
  updateCommentAsync,
  voteCommentAsync,
  sortPostsByVote,
  sortPostsByName,
  sortPostsByDate
} from '../actions'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import FaSort from 'react-icons/lib/fa/sort'
import Loading from 'react-loading'
import CommentView from './CommentView'

class NotFoundView extends Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <h4>NOT FOUND</h4>
    )
  }
}

export default NotFoundView
