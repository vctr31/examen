import React, { Fragment,useState, useEffect} from 'react'


const API = process.env.REACT_APP_API;
var fecha = ""

export const Dolar = () => {

  let [dolar,setValor] = useState([]);
  useEffect(() => {
    getDolar();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
          getDolar();
        }, 5000);
        return () => clearInterval(interval);
  }, []);


const getDolar = async () => {
  const res = await fetch(`${API}/cotizacion/dolar`);
  const data = await res.json();
  fecha = new Date()
  setValor(data);
};

  return (
<Fragment>
  <h1>Dolar</h1>

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
        <input type="text" readOnly className="form-control" id="valor" value= {dolar.precio} />
      </div>
    </div>
  </form>


</Fragment>
);
};
