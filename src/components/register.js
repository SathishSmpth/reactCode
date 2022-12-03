import { useState, useRef } from "react";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";

const Posts = () => {
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const submit = () => {
    if (validator.current.allValid()) {
      alert("You submitted the form and stuff!");
      post();
    } else {
      validator.current.showMessages();
      forceUpdate();
    }
  };

  const post = async () => {
    await axios
      .post("http://localhost:4000/register", {
        Email: email,
        Password: password,
        ConfirmPassword: confirmPassword,
        Phone: phone,
        FirstName: name
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container p-1">
      <h1 className="text-center">Register</h1>
      <div className="row g-3 form">
        <div className="row g-3 ">
          <label className="form-label">Full Name</label>
          <div className="col-md-12">
            <input
              onChange={(e) => setName(e.target.value)}
              name="Full Name"
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
            {validator.current.message("name", name, "required|alpha|min:3")}
          </div>
        </div>

        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            name="Phone"
            type="number"
            className="form-control"
            placeholder="+91"
          />
          {validator.current.message("Phone", phone, "required")}
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="Email"
            type="email"
            className="form-control"
            placeholder="XYZ@example.com"
          />
          {validator.current.message("Email", email, "required|email")}
        </div>
        <div className="col-md-6">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="Password"
            type="password"
            className="form-control"
            placeholder="Password"
          />
          {validator.current.message("title", password, "required|regex")}
        </div>
        <div className="col-md-6">
          <label className="form-label">Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="ConfirmPassword"
            type="password"
            className="form-control"
            placeholder="Confirm Password"
          />
          {validator.current.message(
            "title",
            confirmPassword,
            "required|regex"
          )}
        </div>

        <div className="col-12 text-center">
          <button type="Register" onClick={submit} className="btn btn-primary">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
