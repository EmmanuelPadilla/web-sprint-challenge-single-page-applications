import React from "react";
import { Link } from "react-router-dom";

export default function Confirmation({ values }) {
  return (
    <div className="orderconfirmation">
      <h2>
        {" "}
        {values.name}Your order for a {values.size} pizza has been received.
        Thank YOU!
      </h2>

      <Link to="/">Click here to order again</Link>
    </div>
  );
}
