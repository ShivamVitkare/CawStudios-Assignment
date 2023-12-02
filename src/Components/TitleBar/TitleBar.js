import React from "react";
import "./TitleBar.css";
import { FaGreaterThan } from "react-icons/fa6";

function TitleBar() {
  return (
    <section className="titlebar-sec">
      <div>
        <div className="arrow-div">
          Order &nbsp;
          <FaGreaterThan style={{ fontSize: "10px" }} />
          &nbsp; Order 32457ABC
        </div>
        <div className="btn-div">
          <h3>Order 32457ABC</h3>
          <div>
            <button>Back</button>
            <button className="green">Approve Order</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TitleBar;
