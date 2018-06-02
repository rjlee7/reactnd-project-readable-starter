import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NewCommentView extends Component {
  state = {value: ''};

  componentDidMount() {
  }

  handleSubmit(event) {
    alert('Comment was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form className="new-post" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" className="form-control" id="author" aria-describedby="author"/>
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <input type="text" className="form-control" id="body" aria-describedby="body"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default NewCommentView
