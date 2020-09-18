import React from "react";
return (
  <header className="confirmation">
    <div className="orderconfirmation">
      {orders.map((order, idx) => {
        return (
          <div key={idx}>
            <h2> HI {order.name},</h2>
            <p>
              We recieved for your order for a {order.size} with{" "}
              {order.toppings}.{" "}
            </p>
          </div>
        );
      })}
    </div>
  </header>
);
