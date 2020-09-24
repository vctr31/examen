import React, { Fragment,useState, useEffect} from 'react'


const API = process.env.REACT_APP_API;
var fecha = ""

export const Index = () => {

  let [monedas,setValor] = useState([]);
  useEffect(() => {
    getmonedas();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
          getmonedas();
        }, 5000);
        return () => clearInterval(interval);
  }, []);


const getmonedas = async () => {
  const res = await fetch(`${API}/cotizacion/monedas`);
  const data = await res.json();
  fecha = new Date()
  setValor(data);
};

  return (
<Fragment>
  <h1>Todas las monedas refrencias ARS </h1>

  <div className="row">
    <div className="col-md-12">
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Moneda</th>
          <th>Ultima actualización</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {monedas.map((moneda) => (
          <tr>
            <td>{moneda.to}</td>
            <td>{moneda.date}</td>
            <td>{moneda.rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>


</Fragment>
);
};
