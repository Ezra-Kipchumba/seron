import React from "react";


function Signup() {
    const handleSubmit = () =>{
        alert("Submitted successfully kindly log in")
       }
    
  return (
    <div className="forms-page">
      <form className="forms">
        <br></br>
        <h2 className="title">Register</h2>
        <br></br>
        <br></br>
        <div className="form">
          <div className="inputfield">
            <input
              type="text"
              className="form-group form-control"
              placeholder="First Name"
            />
          </div>
          <div className="inputfield">
            <input
              type="text"
              className="form-group form-control"
              placeholder="Last Name"
            />
          </div>
          <div className="inputfield">
            <select className="form-group form-control">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="inputfield">
            <input
              type="text"
              className="form-group form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="inputfield">
            <input
              type="text"
              className="form-group form-control"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="inputfield">
            <input
              type="password"
              className="form-group form-control"
              placeholder="Password"
            />
          </div>
          <div className="inputfield">
            <input
              type="password"
              className="form-group form-control"
              placeholder="Confirm Password"
            />
          </div>
          <div className="inputfield">
            <label>Register as</label>
            <div className="custom_select">
              <select className="form-control">
                <option value="advocate">Advocate</option>
                <option value="guardian/parent">Parent/Guardian</option>
              </select>
            </div>
          </div>
          <br></br>
          <div className="inputfield terms">
            <label className="check">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p>Agreed to terms and conditions</p>
          </div>
          <button
            className="btn btn-primary"
            type="submit" onClick={handleSubmit}>
            <a href="http://localhost:3000/portal" id="btn">
              Register
            </a>
          </button>
        </div>
      </form>
    </div>
  );
}
export default Signup;