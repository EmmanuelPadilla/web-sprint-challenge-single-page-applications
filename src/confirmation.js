import React from "react";
import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <Link to="/">
      <div className="orderconfirmation">
        <h2> Your order has been received. Thank YOU!</h2>
      </div>
    </Link>
  );
}
