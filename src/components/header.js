import React from 'react';
import { Link } from 'gatsby';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <ul className="menu-wrapper">
            <li>
              <Link to="/contact-form/" className="menu-item">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resume/" className="menu-item">
                Resume
              </Link>
            </li>
            <li>
              <Link to="/fish-room/" className="menu-item">
                Fishroom
              </Link>
            </li>
            <li>
              <Link to="/tech-blog/" className="menu-item">
                Tech Blog
              </Link>
            </li>
            <li>
              <Link to="/about/" className="menu-item">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="menu-item">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
