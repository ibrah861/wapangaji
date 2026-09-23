import React, { useReducer, useState } from "react";

// Icon for auth // Email & Whatsapp & Facebook
// import icon from auth img
import whatsapp from "./img/whatsapp.png";
import email from "./img/email.png";
import facebook from "./img/facebook.png";

// AXIOS
import { auth } from "../axios/Axios";

// SWEET ALERT
import swal from "sweetalert";

export const Login = () => {
  const [response, setResponse] = useState({
    email: "",
    password: "",
  });

  // SWEERT ALERT

  const successMessage = () => {
    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    }).fire({
      icon: "success",
      text: "Signed in successfully",
    });
  };

  const errorMessage = () => {
    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    }).fire({
      icon: "error",
      text: "Invalid credential, please insure you write correct email_address and password  ",
    });
  };

  // ---------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setResponse((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (ax) {
      Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      }).fire({
        text: "Signing in, please wait a moment  ",
      });
    }

    try {
      const handlePost = await auth.post("/auth-signin", response);

      if (handlePost.status === 201) {
        successMessage();

        const replacePage = () => {
          window.location.replace("/user-dashboard");
        };

        setTimeout(replacePage, 3000);
      }

      const accessToken = handlePost.data.jwt_access_user_token;
      localStorage.setItem("authToken", accessToken);
    } catch (err) {
      if (err.response.status === 401) {
        // errorMessage();
      }
    } finally {
      ax = false;
    }
  };

  return (
    <div className="login-page">
      <div className="wrapper-container">
        <div className="form-container">
          <form className="lg-form" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="text-discription">
              <p>
                Use your <b>username</b> and <b>password</b> to login. Please
                make sure to insert correct credential.
              </p>
            </div>

            <div className="input_label">
              <div className="username">
                <label htmlFor="name" className="label">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="password">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="PASSWORD"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="password submit-credential">
                <button>Submit credential</button>
              </div>
              <p className="messege-of-contact">
                If you have any problem contact with system administrator
              </p>
            </div>
          </form>
          <div className="contact-admin">
            <div className="item-contact">
              <img src={whatsapp} alt="" />
              <p>WhatsApp</p>
            </div>
            <div className="item-contact">
              <img src={email} alt="" />
              <p>E-mail</p>
            </div>
            <div className="item-contact">
              <img src={facebook} alt="" />
              <p>Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
