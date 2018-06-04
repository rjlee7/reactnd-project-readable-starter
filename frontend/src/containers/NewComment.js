import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCommentAsync } from '../actions'
import { uuidv4 } from '../utils/helpers'

class NewComment extends Component {
  constructor(props) {
      super(props);

      this.state = {
        id: '',
        author: '',
        body: '',
        parentId: props.post.id,
        timestamp: (new Date()).getTime()
      };
  }

  componentDidMount() {
    this.setState({ id: uuidv4() })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { id, timestamp, body, author, parentId } = this.state;
    this.props.dispatch(addCommentAsync(id, timestamp, body, author, parentId))
    this.setState({
      id: uuidv4(),
      author: '',
      body: '',
      parentId: parentId,
      timestamp: (new Date()).getTime()
    })

  }

  render() {
    return (
      <form
        className="new-post"
        onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            required
            type="text"
            value={this.state.author}
            onChange={(e) =>  this.setState({author:e.target.value})}
            className="form-control"
            id="author"
            aria-describedby="author"/>
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <input
            required
            type="text"
            value={this.state.body}
            onChange={(e) =>  this.setState({body:e.target.value})}
            className="form-control"
            id="body"
            aria-describedby="body"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default connect()(NewComment)
