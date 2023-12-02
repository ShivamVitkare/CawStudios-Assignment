import React, { useState } from "react";
import "./TableBody.css";
import img1 from "../../images/avocado.jpg";
import { RxCheck, RxCross1 } from "react-icons/rx";
import MissingPopUp from "../PopUps/MissingPopUp";
import EditProductPopUp from "../PopUps/EditProductPopUp";
import { useDispatch, useSelector } from "react-redux";
import { approveProduct } from "../Data/ProductReducer";

function TableBody() {
  const [missingPopUpOpen, setMissingPopUpOpen] = useState(false);
  const [EditPopUpOpen, setEditPopUpOpen] = useState(false);
  const [currentId, setCurrentId] = useState();
  const [currentData, setCurrentData] = useState({});

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const handleApprove = (id) => {
    dispatch(approveProduct(id));
  };
  const handleEdit = (id) => {
    console.log("cur", id);
    const selectedProduct = products.filter((product) => {
      if (product.id == id) {
        setCurrentData(product);
      }
    });
    setEditPopUpOpen(true);
  };

  return (
    <>
      {products &&
        products.map((product) => (
          <div className="tbody-div">
            <tbody>
              <tr>
                <td className="td-img">
                  <img src={img1} alt="" />
                </td>
                <td className="td-product">{product.name}</td>
                <td className="td-brand">{product.brand}</td>
                <td className="td-price">${product.price} / 6+1LB</td>
                <td className="td-quantity">
                  <span>{product.quantity}</span> x 6 + 1LB
                </td>
                <td className="td-total">
                  ${product.price * product.quantity}
                </td>
                <td className="td-status">
                  <span
                    style={{
                      display: `${
                        product.status.length == 0 ? "none" : "inline-block"
                      }`,
                      backgroundColor: `${
                        product.status == "Missing-Urgent"
                          ? "red"
                          : product.status == "Missing"
                          ? "orange"
                          : "green"
                      }`,
                      ...style,
                    }}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="td-edit">
                  <span
                    className="tick"
                    onClick={() => handleApprove(product.id)}
                    style={{
                      color: `${
                        product.status == "Approved" ? "green" : "inherit"
                      }`,
                    }}
                  >
                    <RxCheck />
                  </span>
                  <span
                    className="cross"
                    onClick={() => {
                      setMissingPopUpOpen(true);
                      setCurrentId(product.id);
                    }}
                    style={{
                      color: `${
                        product.status == "Missing"
                          ? "orange"
                          : product.status == "Missing-Urgent"
                          ? "red"
                          : "inherit"
                      }`,
                    }}
                  >
                    <RxCross1 />
                  </span>
                  <span
                    className="edit"
                    onClick={() => {
                      handleEdit(product.id);
                    }}
                  >
                    Edit
                  </span>
                </td>
              </tr>
            </tbody>
          </div>
        ))}

      {missingPopUpOpen && (
        <MissingPopUp
          setMissingPopUpOpen={setMissingPopUpOpen}
          id={currentId}
        />
      )}
      {EditPopUpOpen && (
        <EditProductPopUp
          setEditPopUpOpen={setEditPopUpOpen}
          {...currentData}
        />
      )}
    </>
  );
}

export default TableBody;

const style = {
  padding: "6px 10px 7px",
  color: "white",
  borderRadius: "15px",
  fontSize: "12px",
  position: "relative",
  left: "15px",
  textAlign: "center",
};
