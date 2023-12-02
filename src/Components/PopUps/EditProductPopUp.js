import React, { useEffect, useState } from "react";
import img1 from "../../images/avocado.jpg";
import { RxCross2 } from "react-icons/rx";
import "./EditProductPopUp.css";
import { BsPlusLg } from "react-icons/bs";
import { HiMinusSm } from "react-icons/hi";
import { changeProduct } from "../Data/ProductReducer";
import { useDispatch, useSelector } from "react-redux";

function EditProductPopUp({
  setEditPopUpOpen,
  id,
  name,
  price,
  quantity,
  brand,
}) {
  const dispatch = useDispatch();
  const [productPrice, setProductPrice] = useState({
    price: price,
    quantity: quantity,
  });

  // ...............Increment & decrement of Quantity................
  const handleQuantity = (val) => {
    if (val == "minus" && productPrice.quantity != 0) {
      setProductPrice({ ...productPrice, quantity: productPrice.quantity - 1 });
    } else if (val == "plus") {
      setProductPrice({ ...productPrice, quantity: productPrice.quantity + 1 });
    }
  };

  // ...............Form Submit................
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeProduct({ id, productPrice }));
    setEditPopUpOpen(false);
  };

  const reason = [
    "Missing Product",
    "Quality is not the same",
    "Price is not the same",
    "Other",
  ];
  return (
    <section className="EditPopUp-sec">
      <div className="EditPopUp-div">
        <div className="icon-div" onClick={() => setEditPopUpOpen(false)}>
          <RxCross2 />
        </div>
        <div className="details">
          <h5>{name.length > 50 ? name.slice(0, 50) + "....." : name}</h5>
          <p className="brand">{brand}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="img-input">
            <img src={img1} alt="" />
            <div className="input-div">
              <div>
                <span className="tag">Price</span>
                <input
                  type="number"
                  min={0}
                  value={productPrice.price}
                  onChange={(e) =>
                    setProductPrice({ ...productPrice, price: e.target.value })
                  }
                />
                <span className="unit"> &nbsp;&nbsp;/6 + 1LB</span>
              </div>
              <div>
                <span className="tag quantity">Quantity</span>
                <span
                  className="symbol"
                  onClick={() => handleQuantity("minus")}
                >
                  <HiMinusSm />
                </span>
                <input
                  type="number"
                  min={0}
                  value={productPrice.quantity}
                  onChange={(e) =>
                    setProductPrice({
                      ...productPrice,
                      quantity: e.target.value,
                    })
                  }
                />
                <span className="symbol" onClick={() => handleQuantity("plus")}>
                  <BsPlusLg />
                </span>
                <span className="unit"> x 6 + 1LB</span>
              </div>
              <div>
                <span className="tag">Total</span>
                <span className="unit">
                  {" "}
                  &nbsp; ${productPrice.price * productPrice.quantity}
                </span>
              </div>
            </div>
          </div>
          <div>
            <h6 className="reason-heading">
              Choose Reason <span>(Optional)</span>
            </h6>
            <div className="reason-div">
              {reason.map((item) => (
                <p className="reasons">{item}</p>
              ))}
            </div>
          </div>
          <div className="option-div">
            <h5 onClick={() => setEditPopUpOpen(false)}>Cancel</h5>
            <button className="send" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EditProductPopUp;
