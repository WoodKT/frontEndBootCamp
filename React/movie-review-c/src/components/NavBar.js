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
        {/* </Menu.Menu> */}
      </Menu>
    )
  }
}
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//     const [isOpen, setOpen] = useState(false);

//   return (
//     <nav
//       className="navbar is-primary"
//       role="navigation"
//       aria-label="main navigation"
//     >
//       <div className="container">
//         <div className="navbar-brand">
//           <a
//             role="button"
//             className={`navbar-burger burger ${isOpen && "is-active"}`}
//             aria-label="menu"
//             aria-expanded="false"
//             onClick={() => setOpen(!isOpen)}
//           >
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//           </a>
//         </div>

//         <div className={`navbar-menu ${isOpen && "is-active"}`}>
//           <div className="navbar-start">
//             <NavLink
//               className="navbar-item"
//               activeClassName="is-active"
//               to="/create"
//             >
//               Create
//             </NavLink>

//             <NavLink
//               className="navbar-item"
//               activeClassName="is-active"
//               to="/read"
//             >
//               Read
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };