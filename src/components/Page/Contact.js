import React from "react";

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Contact Me!</h1>
        </div>
        <div className="row">
          <p>Name: Anthony Nguyen</p>
          <p>Email: nguyen.dev@protonmail.com</p>
          <p>Phone: 210-000-0000</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <form className="col-6">
          <div className="mb-3">
            <label htmlFor="name" name="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" name="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" name="mesage" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
