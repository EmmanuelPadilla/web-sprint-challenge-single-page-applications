import React from "react";

export default function OrderForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
      const {name, value, type, checked} = evt.target
      const valueToUse = type === 'checkbox' ? checked : value;
      change(name, valueToUse)
  }


  return (
    <form classname="formContainer" onSubmit={onSubmit}>
      <div className="formsubmit">
        <h2>Order</h2>
        <button id="button" dissabled={disabled}>
          {" "}
          ORDER!
        </button>
        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.phone}</div>
          <div>{errors.size}</div>
          <div>{errors.toppings}</div>
          <div>{errors.special}</div>
        </div>
      </div>

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
          name="name"
          type="tel"
          />
        </label>
        <h2>Select a Size</h2>
        <label>
          {""}
          Size
          <select name='size' value={values.size} onChange={onChange}>
            <option value= ""> ---Select a Size---</option>
            <option value= "personal"> 6" Personal</option>
            <option value= "small"> 12" Small</option>
            <option value= "medium"> 14" Medium </option>
            <option value= "large"> 16" Large</option>
            <option value= "party"> 24" Party Box</option>

            </select>
            </label>
            </div>

            <div>
            <h2>Select Toppings</h2>
            
            <label>
                {""}
                toppings
                <input
                type="checkbox"
                name='topping'
                checked={values.topping}


            </label>

      </div>
    </form>
  );
}
