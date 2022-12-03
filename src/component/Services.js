import React from 'react'
import Data from './Data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Card1 from './Card1';



function Services() {
  return (
    <>
      <div className="my-2">
        <h1 className='tab-center' style={{ textAlign: 'center' }}><u>Services</u></h1>
      </div>
      <div className="container-fluid mb-5 ">
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4 m-1 '>

              {
                Data.map((val, ind) => {
                  console.log(val.title);
                  return <Card1
                    key={ind}
                    img={val.img}
                    title={val.title}
                  ></Card1>
                })
              }



            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Services