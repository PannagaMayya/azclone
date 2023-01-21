import React from "react";
import { useParams } from "react-router-dom";

function Myorders() {
  const { id } = useParams();
  return (
    <div>
      Myorders : <p>{id}</p>
    </div>
  );
}

export default Myorders;
