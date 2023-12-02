import React from "react";
import "./MenuBar.css";
import { FiChevronDown } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

function MenuBar() {
  return (
    <section className="menubar-sec">
      <div>
        <div className="logo-menu-div">
          <h3>Reeco</h3>
          <p>Store</p>
          <p>Order</p>
          <p>Analytics</p>
        </div>
        <div className="cart">
          <span className="cart-icon">
            <BsCart3 />
          </span>
          <span>
            Hello, Shivam
            <FiChevronDown />
          </span>
        </div>
      </div>
    </section>
  );
}

export default MenuBar;
