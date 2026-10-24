import React, { useReducer, useState } from "react";
import { replace, useNavigate, Link } from "react-router-dom";

// AXIOS
import { auth } from "../axios/Axios";

// SWEET ALERT
import Swal from "sweetalert2";

// Loader2 spinner
import { Loader2 } from "../uiComponent/Loader2";

// images
import house_image from "./img/house_image.png";

export const Login = () => {
  const [response, setResponse] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errDescription, setErrDescription] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  const navigate = useNavigate();

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

  const emptyfieldMessage = () => {
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
      title: "Error",
      text: "Status code 400, all field shoud not be empty",
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

    // submit Laoding
    setIsLoading(true);

    try {
      // sweet aleart
      if (true) {
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
          title: `Signing in...  wait a minute   `,
        });
      }

      const handlePost = await auth.post("/auth-signin", response, {withCredentials : true});

      if (handlePost.status === 201) {
        successMessage();

        const replacePage = () => {
          window.location.replace("/parent/user-dashboard");
        };

        setTimeout(replacePage, 100);
      } else {
        isLoading(true);
      }

      const accessToken = handlePost.data.jwt_access_user_token;
      localStorage.setItem("authToken", accessToken);
    } catch (err) {
      if (err.response.status === 401) {
        errorMessage();
        setErrDescription(true);
      }

      if (err.response.status === 400) {
        emptyfieldMessage();
      }
    } finally {
      setIsLoading(false);
    }
  };
  // "login before--with--space before--without--space"

  function handlePassword() {
    setCheckBox((prev) => !prev);
  }

  return (
    <div className="content-Wrapper">
      <div
        className={
          isLoading
            ? "login before--with--space"
            : " before--without--space login"
        }
      >
        <div className="login_container">
          <div className="login_contents_text">
            <span>Welcome</span>
            <p>your dream now became true</p>
          </div>
          <form className="login_container_form" onSubmit={handleSubmit}>
            <div className="form_image_container">
              <img
                src={house_image}
                alt="house_image"
                loading="lazy"
                width="50"
                height="50"
                className="form_image"
              />
            </div>

            <h1 className="form_h1">Login</h1>

            <div className="form_description">
              <p>Use your email_address and password to login.</p>
            </div>

            <div className="form_contents">
              <div className="contents_username margin--top--bottom inputs--label--flex child-margin">
                <label htmlFor="name" className="label">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  placeholder="email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="contents_password margin--top--bottom inputs--label--flex child-margin">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  type={checkBox ? "text" : "password"}
                  required
                  placeholder="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="form_check_btn">
                <input type="checkbox" onClick={handlePassword} />
                <label htmlFor="checkbox" id="checkbox">{checkBox ? "Hide" : "Show"} password</label>
              </div>
            </div>

            <button
              className={
                isLoading
                  ? "form_btn blue_btn primary_color_btn"
                  : "form_btn blue_btn secondary_color_btn"
              }
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? "Submitting..." : "Submit Credential"}
            </button>

            {errDescription && (
              <p className="contents_assist_message">
                Invalid credential detected, please contact with system admin
              </p>
            )}
          </form>
          <br />
          <Link to="/">Go Back to Land page</Link>
        </div>
      </div>

      {isLoading && (
        <div className="spiner">
          <Loader2 />
          <span>Submitting information...</span>
        </div>
      )}
    </div>
  );
};
