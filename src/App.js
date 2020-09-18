import React, { useEffect, useState } from "react";
import OrderForm from "./orderform";
import "./App.css";
import schema from "./schema";
import * as yup from "yup";

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
        (top) => formValues[top]
      ),
      special: formValues.special.trim(),
    };
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
      <OrderForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
};
export default App;
