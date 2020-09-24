import React, { Fragment,useState, useEffect } from 'react'

const API = process.env.REACT_APP_API;
var fecha = ""

export const Real = () => {

  let [real,setValor] = useState([]);
  useEffect(() => {
    getReal();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
          getReal();
        }, 5000);
        return () => clearInterval(interval);
  }, []);


  const getReal = async () => {
  const res = await fetch(`${API}/cotizacion/real`);
  const data = await res.json();
  fecha = new Date()
  setValor(data);
  };

  return (
  <Fragment>
  <h1>Real</h1>

    <form>
    <div className="form-group row">
      <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Ultima actualización</label>
      <div className="col-sm-10">
        <input type="text" readOnly className="form-control-plaintext" id="fecha" defaultValue={fecha} />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Valor</label>
      <div className="col-sm-10">
        <input type="text" readOnly className="form-control" id="valor" value= {real.precio} />
      </div>
    </div>
  </form>


  </Fragment>
);
};
