import React, { useEffect, useState } from "react";

// image
import image from "./img/server.jpeg";

// AUTH
import { auth } from "../axios/Axios";

// LOADER
import { Loader } from "../uiComponent/Loader";

// --------REACT ICON-------------
import { CircleUserRound, Bell } from "lucide-react";

export const Userdashboard = () => {
  // states
  const [fetchUserData, setFetchUserData] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [fulluserDetails, setFullUserDetails] = useState("");

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

        const userResponse = await auth.get("/singleLastPayment", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        const moreUserInfor = await auth.get("/getOtherInfor", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        setFullUserDetails(moreUserInfor?.data?.data);

        const user = userResponse?.data?.data;

        setUserEmail(response?.data?.userData);

        setResponseData(user);

        const userInfor = response?.data?.userData;

        setFetchUserData(userInfor);
      } catch (err) {
        if (err?.response?.data?.success === false) {
          window.location.replace("/user-login");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  
const logout = async () => {
  try {
    const response = await auth.post(
      "/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );

    console.log(response.data);

    // Remove the token after successful logout
    localStorage.removeItem("authToken");

  } catch (err) {
    console.log(err.response?.data || err.message);
  }
};

  return (
    <>
      <div className="page_wrapper">
        <div className="wrapper_container">
          <div className="flex-title_contents">
            <span style={{ color: "white" }}>
              Welcome, &nbsp; {fulluserDetails?.fullName?.split(" ")[0]}
            </span>
            <div className="contents_flex">
              <CircleUserRound size={48} strokeWidth={1.5} color="white" />

              <div className="logOut_user">
                <button onClick={logout}>Log out</button>
              </div>
            </div>
          </div>

          <div className="flex_wrapper_page">
            <span className="tax-payer-details">
              Account status : &nbsp; active
            </span>
            <div className="icon_flex">
              <div className="active_flex">
                <CircleUserRound size={28} strokeWidth={1.5} color="white" />
                <div className="status_dot   status--green-bg "></div>
              </div>

              <div className="active_flex">
                <Bell size={28} strokeWidth={1.5} color="white" />
                <div className="status_dot status--red-bg ">
                  <p>9+</p>
                </div>
              </div>
            </div>
          </div>

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
                <div className="user_dashboard_details">
                  <div className="details_col">
                    <div className="data">
                      <p>
                        <strong>JINA KAMILI</strong> : &nbsp; &nbsp;
                        {!fulluserDetails.fullName ? (
                          <span>...</span>
                        ) : (
                          <span>
                            {fulluserDetails?.fullName?.split(" ")?.join("_")}
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="data">
                      <p>
                        <strong>SHEHIA </strong> : &nbsp; &nbsp;
                        {fulluserDetails?.homeAddress?.split(" ")?.join("_")}
                      </p>
                    </div>

                    <div className="data">
                      <p>
                        <strong>TAREHE YA USAJILI</strong> : &nbsp; &nbsp;
                        {fulluserDetails?.createdAt
                          ?.split("T")[0]
                          ?.split("-")
                          ?.reverse()
                          ?.join(" / ")}
                      </p>
                    </div>

                    <div className="data">
                      <p>
                        <strong>BARUA PEPE : &nbsp; &nbsp; </strong>
                        {!fetchUserData.email ? (
                          <span>...</span>
                        ) : (
                          <>
                            <span style={{ color: "blue" }}>
                              {userEmail?.email}
                            </span>
                          </>
                        )}
                      </p>
                    </div>

                    <div className="data">
                      <p>
                        <strong>MALIPO</strong> : &nbsp; &nbsp;
                        {responseData?.remainder < 0
                          ? "Incomplete"
                          : "Completed"}
                      </p>
                    </div>

                    <div className="data">
                      <p>
                        <strong>NAMBARI ZA SIMU</strong> : &nbsp; &nbsp;
                        {!fulluserDetails?.phoneNumber ? (
                          <span>...</span>
                        ) : (
                          <>
                            <span>{fulluserDetails?.phoneNumber}</span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="details_col">
                    <div className="data">
                      <p>
                        <strong> JUMLA YA KODI</strong> : &nbsp; &nbsp;
                        <span style={{ color: "blue" }}>
                          {responseData?.expectedtransactionAmount?.toLocaleString()}
                        </span>
                        Tsh
                      </p>
                    </div>

                    <div className="data">
                      <p>
                        <strong>JUMLA YA KODI ILIO LIPWA</strong> : &nbsp;
                        &nbsp;
                        <span style={{ color: "green" }}>
                          {responseData?.transactionAmount?.toLocaleString()}
                        </span>
                        Tsh
                      </p>
                    </div>

                    <div className="data">
                      <p>
                        <strong>KODI ILIO BAKI</strong> : &nbsp; &nbsp;
                        <span style={{ color: "red" }}>
                          {responseData?.remainder?.toLocaleString()}
                        </span>
                        Tsh
                      </p>
                    </div>

                    <div className="data">
                      <p>
                        <strong>TAREHE YA MUAMALA</strong> : &nbsp; &nbsp;
                        {responseData.createdAt
                          ?.split("T")[0]
                          ?.split("-")
                          ?.reverse()
                          ?.join(" / ")}
                      </p>
                    </div>

                    <div className="data">
                      <p>
                        <strong>KIPINDI</strong> : &nbsp; &nbsp;
                        {responseData.duration > 1 ? "Miezi" : "Mwezi"}
                        {responseData.duration}
                      </p>
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
