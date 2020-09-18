import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be 3 characters or longer"),
  phone: yup
    .string()
    .required("phone number is required")
    .min(10, "area code + number"),

  topping: yup
    .string()
    .oneOf(["personal", "small", "medium", "large", "party"], "Pick a size"),

  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  ham: yup.boolean(),
  pineapple: yup.boolean(),
});
