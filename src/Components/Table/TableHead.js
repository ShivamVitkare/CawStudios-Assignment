import React from "react";
import "./TableHead.css";

function TableHead() {
  return (
    <div className="thead-div">
      <thead>
        <tr>
          <th className="th-img"></th>
          <th className="th-product">Product Name</th>
          <th className="th-brand">Brand</th>
          <th className="th-price">Price</th>
          <th className="th-quantity">Quantity</th>
          <th className="th-total">Total</th>
          <th className="th-status">Status</th>
          <th className="th-edit"></th>
        </tr>
      </thead>
    </div>
  );
}

export default TableHead;
