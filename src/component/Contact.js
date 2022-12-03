import React, { useState } from 'react'

function Contact() {
  const [Data, SetData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  })

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(Data)

    alert("Your responce will be submitted to shubham soon he will contact you. Thank you!")


  }

  const InputEvent = (event, property) => {

    SetData({ ...Data, [property]: event.target.value })

  }
  return (
    <>
      <div className="my-2">
        <h1 className="text-center"> Contact US </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} >
              <div class="mb-2">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={Data.fullname}
                  onChange={(e) => InputEvent(e, 'fullname')}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-2">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={Data.phone}
                  onChange={(e) => InputEvent(e, 'phone')}
                  placeholder="mobile number"
                />
              </div>
              <div class="mb-2">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={Data.email}
                  onChange={(e) => InputEvent(e, 'email')}
                  placeholder="name@example.com"
                />
              </div>

              <div class="mb-2">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={Data.msg}
                  onChange={(e) => InputEvent(e, 'msg')}
                ></textarea>
              </div>

              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact