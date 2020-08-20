import React from "react";
import PropTypes from "prop-types";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {};
