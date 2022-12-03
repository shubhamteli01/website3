import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Common from './Common'
import onlinebusiness from '../images/download4.png'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <>

      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Increase Your Business
                    <strong className="brand-name"> Productivity  by 500% </strong>
                  </h1>
                  <h2 className="my-3">
                    Time to shift  business on Internet
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/services" className="btn-get-started ">
                      Get started
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 mb-2 ">
                  <img
                    src={onlinebusiness}
                    className="img-fluid "
                    alt="Commom img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About