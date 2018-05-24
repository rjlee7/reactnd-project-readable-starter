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
      <form onSubmit={this.handleSubmit}>
        <label>
          Author:
          <input type="text" name="author" onChange={this.handleChange} />
        </label>
        <label>
          Title:
          <input type="text" name="title" onChange={this.handleChange} />
        </label>
        <label>
          Body:
          <input type="text" name="body" onChange={this.handleChange} />
        </label>
        <label>
          Category:
          <select name="category" onChange={this.handleChange}>
            {options.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NewPostView
