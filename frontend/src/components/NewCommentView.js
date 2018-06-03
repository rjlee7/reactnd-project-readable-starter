import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCommentAsync } from '../actions'
import { uuidv4 } from '../utils/helpers'

class NewCommentView extends Component {
  constructor(props) {
      super(props);

      this.state = {
        id: '',
        author: '',
        body: '',
        category: props.post.category,
        timestamp: (new Date()).getTime()
      };

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ id: uuidv4() })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { timestamp, body, author, category, id } = this.state;
    console.log('this.state',this.state)
    this.props.dispatch(addCommentAsync(timestamp, body, author, category, id))

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


function mapStateToProps ({ forum }) {
  return {
    forum
  }
}

export default connect(
  mapStateToProps,
)(NewCommentView)
