import React from "react";
import Form from "./Form";
import { useSelector } from "react-redux";

const Conversor = () => {
  const { conversor } = useSelector(state => state);

  return (
    <div className="content">
      <div className="row justify-content-md-center">
        <div className="card text-center w-50">
          <div className="card-header bg-info">Xumes Broker</div>
          <Form />
          <div className="card-footer text-light bg-dark">
            {JSON.stringify(conversor)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversor;
