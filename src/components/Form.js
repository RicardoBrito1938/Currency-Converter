import React, { useState } from "react";
import ListCurrency from "./ListCurrency";
import { useDispatch } from "react-redux";
import convertCurrncies from "../actions";

const Form = () => {
  const dispatch = useDispatch();
  const [from, setfrom] = useState("");
  const [to, setTo] = useState("");
  const [value, setValue] = useState(0);

  const onValueChange = e => {
    const value = e.target.value;
    console.log(value);
    setValue(value);
  };

  const onValueFromChange = e => {
    const from = e.target.value;
    console.log(from);

    setfrom(from);
  };

  const onValueToChange = e => {
    const to = e.target.value;
    console.log(to);

    setTo(to);
  };

  const send = () => {
    const data = {
      from: from,
      to: to,
      value: value
    };

    dispatch(convertCurrncies(data));
  };

  return (
    <form>
      <div className="row justify-content-md-center">
        <div className="input-group input-group-lg">
          <input
            onChange={onValueChange}
            type="number"
            className="form-control"
          />
        </div>
      </div>
      <div className="row form-group">
        <div className="col-md-6">
          <label htmlFor="formSelectDE">From:</label>
          <ListCurrency origin="from" onValueChange={onValueFromChange} />
        </div>

        <div className="col-md-6">
          <label htmlFor="formSelectPara">To:</label>
          <ListCurrency origin="to" onValueChange={onValueToChange} />
        </div>
      </div>
      <div className="row">
        <button
          type="button"
          onClick={send}
          href="#"
          className="btn btn-primary btn-lg btn-block"
        >
          Convert
        </button>
      </div>
    </form>
  );
};

export default Form;
