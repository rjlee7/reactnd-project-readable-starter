import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class EditPostView extends Component {
  state = {
    author: '',
    title: '',
    body: '',
    category: ''
  };

  componentDidMount() {
  }

  handleSubmit(event) {
    alert('Post was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onChange() {

  }

  render() {
    const options = ['react','redux','udacity'];
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Author:
          <input type="text" value={this.state.author} onChange={this.handleChange} />
        </label>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          Body:
          <input type="text" value={this.state.body} onChange={this.handleChange} />
        </label>
        <label>
          Category:
          <select onChange={this.onChange} value={this.state.category}>
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

export default EditPostView
