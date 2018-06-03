import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavbarView extends Component {
  render() {
    const { categories } = this.props
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <Link className="navbar-brand" to={`/`}>Readable</Link>
        <ul className="navbar-nav">
        {(categories && categories.length) &&
        categories.map((category) => (
          <li key={category.name} className="nav-item">
            <Link className="nav-link" to={`/${category.path}`}>{category.name}</Link>
          </li>
        ))}

        </ul>
      </nav>
    )
  }
}

export default NavbarView
