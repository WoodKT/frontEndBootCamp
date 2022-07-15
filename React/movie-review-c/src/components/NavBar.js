import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'create' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          as={NavLink} to="/"
          name='create'
          active={activeItem === 'create'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/read"
          name='read'
          active={activeItem === 'read'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/update"
          name='update'
          active={activeItem === 'update'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}