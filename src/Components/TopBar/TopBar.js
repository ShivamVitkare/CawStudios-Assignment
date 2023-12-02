import React from "react";
import "./TopBar.css";
import { topbarData } from "./TopBarData";

function TopBar() {
  console.log(topbarData);
  return (
    <section className="topbar-sec">
      {topbarData.map((item, index) => (
        <div
          key={index}
          style={{
            borderRight: index == topbarData.length - 1 ? "none" : "inherit",
            paddingRight: index == topbarData.length - 1 ? "0px" : "inherit",
          }}
        >
          <h6>{item.heading}</h6>
          <p>{item.details}</p>
        </div>
      ))}
    </section>
  );
}

export default TopBar;
