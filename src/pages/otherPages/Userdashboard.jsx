import React, { useEffect, useState } from "react";

// image
import image from "./img/server.jpeg";

// AUTH
import { auth } from "../axios/Axios";

// LOADER
import { Loader } from "../uiComponent/Loader";

export const Userdashboard = () => {
  // states
  const [fetchUserData, setFetchUserData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch data from api
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await auth.get("/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        const userInfor = response.data.userData;

        setFetchUserData(userInfor);
      } catch (err) {
        if (err.response.data.success === false) {
          window.location.replace("/auth-login");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <div className="content">
        <div className="dashbord">
          <div className="flex">
            <h2>Welcome, &nbsp; Ibrahim Amour</h2>
            <div className="rounde-image">
              <img src={image} alt="img" />
            </div>
          </div>
          <hr />

          <h3 className="tax-payer-details">MY PERSONAL INFORMATION</h3>

          {
            <>
              {loading ? (
                <div className="loadingContainer">
                  <div className="loaderClass">
                    <Loader />
                    <p>Fetching content, Please wait</p>
                  </div>
                </div>
              ) : (
                <div className="personal-details">
                  <div className="col">
                    <div className="data">
                      <p>User Name</p>
                      {!fetchUserData.firstname ? (
                        <p>...</p>
                      ) : (
                        <>
                          <span>{fetchUserData?.firstname}</span>
                          &nbsp;
                          <span>{fetchUserData?.lastname}</span>
                        </>
                      )}
                    </div>
                    <div className="data">
                      <p>Home Address</p>
                      <p>Masingini "Limpopo"</p>
                    </div>
                    <div className="data">
                      <p>Registered date</p>
                      <p>20 / 09 / 2026</p>
                    </div>
                    <div className="data">
                      <p>Email address</p>
                      {!fetchUserData.email ? (
                        <p>...</p>
                      ) : (
                        <>
                          <span>{fetchUserData?.email}</span>
                        </>
                      )}
                    </div>
                    <div className="data">
                      <p>Payment status</p>
                      <p
                        style={{
                          color: "blue",
                          background: "white",
                          padding: "0.5em",
                          width: "fit-content",
                        }}
                      >
                        Completed
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="data">
                      <p>Phone number</p>
                      {!fetchUserData.phone ? (
                        <p>...</p>
                      ) : (
                        <>
                          <span>{fetchUserData?.phone}</span>
                        </>
                      )}
                    </div>
                    <div className="data">
                      <p>Total current tax</p>
                      <p>250,000</p>
                    </div>
                    <div className="data">
                      <p>Tax remainder</p>
                      <p>0 balance</p>
                    </div>
                    <div className="data">
                      <p>Transaction date</p>
                      <p>23 / 11 / 2026</p>
                    </div>
                    <div className="data">
                      <p>Duration</p>
                      <p>6 months</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          }
        </div>
      </div>
    </>
  );
};
