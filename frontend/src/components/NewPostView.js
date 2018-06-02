import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addPostAsync } from '../actions'

class NewPostView extends Component {
  constructor(props) {
      super(props);

      this.state = {
        author: '',
        title: '',
        body: '',
        category: '',
        timestamp: (new Date()).getTime()
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {title,body,author,category,timestamp} = this.state;
    this.props.dispatch(addPostAsync(timestamp, title, body, author, category))
  }

  handleChange(event) {
    console.log('this',this)
    const {name, value} = event.target
    console.log('name',name,'value',value)
    this.setState({[name]: value});
  }

  render() {
    const options = ['react','redux','udacity'];
    return (
      <form className="new-post" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" className="form-control" id="author" aria-describedby="author"/>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" aria-describedby="title"/>
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <input type="text" className="form-control" id="body" aria-describedby="body"/>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select className="form-control" id="category" onChange={this.handleChange}>
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

export default NewPostView
