import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function OrderForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <div className="formInputs">
        <label>
          {""}
          Name
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>

        <label>
          {""}
          Telephone Number
          <input
            value={values.phone}
            onChange={onChange}
            name="phone"
            type="number"
            pattern="[0-9]"
          />
        </label>
        <h2>Select a Size</h2>
        <label>
          {""}
          Size
          <select name="size" value={values.size} onChange={onChange}>
            <option value=""> ---Select a Size---</option>
            <option value="personal"> 6" Personal</option>
            <option value="small"> 12" Small</option>
            <option value="medium"> 14" Medium </option>
            <option value="large"> 16" Large</option>
            <option value="party"> 24" Party Box</option>
          </select>
        </label>
      </div>

      <div>
        <h2>Select Toppings</h2>

        <label>
          {""}
          pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>
          {""}
          sausage
          <input
            type="checkbox"
            name="sausage"
            checked={values.sausage}
            onChange={onChange}
          />
        </label>

        <label>
          {""}
          ham
          <input
            type="checkbox"
            name="ham"
            checked={values.ham}
            onChange={onChange}
          />
        </label>

        <label>
          {""}
          pineapple
          <input
            type="checkbox"
            name="pineapple"
            checked={values.pineapple}
            onChange={onChange}
          />
        </label>
      </div>

      <div className="special">
        <label>
          {""}
          Special Instructions
          <input
            value={values.special}
            onChange={onChange}
            name="special"
            type="text"
          />
        </label>
      </div>

      <div className="formsubmit">
        <Link to="/confirmation">
          <button id="button" disabled={disabled}>
            {" "}
            ORDER !
          </button>
        </Link>

        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.phone}</div>
          <div>{errors.size}</div>
          <div>{errors.toppings}</div>
        </div>
      </div>
    </form>
  );
}
