import React from "react";
import "./TableContainer.css";
import SearchBar from "./SearchBar";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function TableContainer() {
  return (
    <section className="table_div">
      <SearchBar />
      <TableHead />
      <TableBody />
    </section>
  );
}

export default TableContainer;
