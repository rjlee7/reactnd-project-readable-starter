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

    )
  }
}

export default EditPostView
