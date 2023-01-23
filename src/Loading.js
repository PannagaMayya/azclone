import React from "react";
import "./Loading.css";
import { LinearProgress } from "@mui/material";

function Loading() {
  return (
    <div className="loading_div">
      <h1 style={{ fontWeight: 400 }}>Loading....</h1>
      <LinearProgress
        color="inherit"
        style={{
          margin: "20px",
          width: "80%",
          overflow: "hidden",
          color: "#FF9900",
        }}
      />
    </div>
  );
}

export default Loading;
