import React from "react";

//Stateless functional components
const NavBar = ({ totalCount }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="http://github.com/itsmejkumar">
          Shopping Cart
          <span className="badge badge-pill badge-secondary m-2">
            {totalCount}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
