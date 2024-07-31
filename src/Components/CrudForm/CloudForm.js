import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const CloudForm = () => {
  return (
    <>
      <div className="my-5 border" style={{ width: "40%", margin: "auto" }}>
        <h1 className="text-center bg-secondary text-white py-2">User Form</h1>
        <form className="p-4 ">
          <div className="form-group">
            <div className="form-group">
              <label for="exampleInputPassword1">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="You Name"
              />
            </div>
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="+91"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile" />
  </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>

          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CloudForm;
