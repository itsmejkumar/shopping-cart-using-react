import React from "react";
import { MetaTitle } from "../MetaTitle";
import headerLogo from "../../assets/images/shopping-cart-white.svg";

export const Header = () => {
  return (
    <>
      <MetaTitle title="Happy Shopping" />
      <header>
        <div className={"header_logo_section"}>
          <img src={headerLogo} height={40} width={40} alt={``} />
          <h3 className={"header-brand-text"}>Happy Shopping</h3>
        </div>
        <div className={"header_cart_section"}>
          <h6 className={"header-cart-text"}>Cart</h6>
          <span className="cart-count">{0}</span>
        </div>
      </header>
    </>
  );
};
