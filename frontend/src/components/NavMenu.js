import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom mb-3" color="secondary" container light>
          <NavbarBrand className="text-light" tag={Link} to="/home">Credera Jersey Shop</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/counter">NFL</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/counter">NBA</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/counter">MLB</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/counter">NHL</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
