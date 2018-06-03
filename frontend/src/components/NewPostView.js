import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPostAsync } from '../actions'
import { uuidv4 } from '../utils/helpers'

class NewPostView extends Component {
  constructor(props) {
      super(props);

      this.state = {
        id: '',
        author: '',
        title: '',
        body: '',
        category: 'react',
        timestamp: (new Date()).getTime()
      };

      this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({ id: uuidv4() })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { timestamp, title, body, author, category, id } = this.state
    this.props.dispatch(addPostAsync(timestamp, title, body, author, category, id))

  }

  render() {
    const options = ['react','redux','udacity'];
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
            onChange={(e) => this.setState({author:e.target.value})}
            className="form-control"
            id="author"
            aria-describedby="author"/>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            required
            type="text"
            value={this.state.title}
            onChange={(e) => this.setState({title:e.target.value})}
            className="form-control"
            id="title"
            aria-describedby="title"/>
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
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            required
            className="form-control"
            id="category"
            onChange={(e) => this.setState({category: e.target.value})}>
            {options.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
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
)(NewPostView)
