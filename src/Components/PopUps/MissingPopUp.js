import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./MissingPopUp.css";
import { useDispatch } from "react-redux";
import { missingProduct } from "../Data/ProductReducer";

function MissingPopUp({ setMissingPopUpOpen, id }) {
  const dispatch = useDispatch();
  const handleMissingProduct = (value) => {
    dispatch(missingProduct({ id, value }));
    setMissingPopUpOpen(false);
  };

  return (
    <section className="missingpopup-sec">
      <div>
        <div className="heading-div">
          <h4>Missing Product</h4>
          <p className="icon-div" onClick={() => setMissingPopUpOpen(false)}>
            <RxCross2 />
          </p>
        </div>
        <p className="details">
          Is 'Chicken Breast Fillet, Boneless...' Urgent?
        </p>
        <div className="option-div">
          <h5 onClick={() => handleMissingProduct("Missing")}>No</h5>
          <h5 onClick={() => handleMissingProduct("Missing-Urgent")}>Yes</h5>
        </div>
      </div>
    </section>
  );
}

export default MissingPopUp;
