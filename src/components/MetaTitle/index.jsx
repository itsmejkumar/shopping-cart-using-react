import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import favIcon from "../../assets/images/shopping-cart-black.svg";

export const MetaTitle = ({ title, description }) => (
  <Helmet>
    <link rel="icon" type="image/png" href={favIcon} sizes="180x180" />
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
  </Helmet>
);

MetaTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

MetaTitle.defaultProps = {
  title: "Happy Shopping",
};
