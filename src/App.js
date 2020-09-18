import React, { useEffect, useState } from "react";
import OrderForm from "./orderform";
import "./App.css";
import schema from "./schema";
import * as yup from "yup";
import Confirmation from "./confirmation";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";

const initialFormValues = {
  name: "",
  phone: "",
  size: "",
  pepperoni: false,
  sausage: false,
  ham: false,
  pineapple: false,
  special: "",
};

const initialFormErrors = {
  name: "",
  phone: "",
  size: "",
};

const initialDisabled = true;
const orderList = [];

const App = () => {
  const [orders, setOrders] = useState(orderList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        console.log(res.data);
        console.log(orders);
        setOrders([...orders, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err, "couldnt post it");
      })
      .finally(() => {});
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const inputChange = (name, value) => {
    console.log(name, value);
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      phone: formValues.phone.trim(),
      toppings: ["pepperoni", "sausage", "ham", "pineapple"].filter(
        (topns) => formValues[topns]
      ),
      special: formValues.special.trim(),
    };
    postNewOrder(newOrder);
  };

  // useEffect(() => {
  //   getOrders();
  // }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
      <header>
        <h1>Welcome to GoodyGoody Pizza</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/orderform">Order NOW</Link>{" "}
      </nav>
      <h2>Order delicious pizza NOW!</h2>
      <div className="landing">
        <h3>Come and get it!!</h3>
      </div>
      <Switch>
        <Route path="/orderform">
          <OrderForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/confirmation">
          <Confirmation values={formValues} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
