import React, { Fragment } from "react";


export const About = () => (
  <Fragment>
  <div className="row">
      <div className="col-lg-6 col-sm-12 col-xs-12 text-center wow fadeInLeft" >
        <div className="about_me">
          <img src="http://ekramit.net/tf/nick-berg/nick-berg/assets/img/me.png" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInRight">
        <div className="about_me_title">
          <span>Hola Saludos!</span>
          <h1>Mi nombre es Víctor Manzanero</h1>
          <h4>Desarrollador de sofware </h4>
        </div>
        <div className="profile_info">
        <lu>
          <li> Mérida Yucatán México.</li>
          <li> +52 9991 92 52 48</li>
          <li> vctr.31@hotmail.com</li>
          <li> https://www.udemy.com/user/victor-alfonso-manzanero-loeza/</li>
      </lu>
        </div>

      </div>
    </div>
  </Fragment>
);
