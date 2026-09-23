import React, { useEffect, useRef, useState } from "react";
import profileImage from "./img/manwater.png";

// IMPORT LOADER
import { Loader } from "../uiComponent/Loader";

// AUTH
import { auth } from "../axios/Axios";

export const Profile = () => {
  // FETCHING DATA
  const [fetchUserData, setFetchUserData] = useState("");
  const [loading, setLoading] = useState(false);

  // ----------------

  const [modaclass, setModalclass] = useState(false);
  const [wordAccount, setWordAccount] = useState("");
  const [confirm, setConfirm] = useState("");
  const [handleAction, setHandleAction] = useState(false);

  // HANDLE PROCESSING
  const [deleteing, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [suspending, setSuspending] = useState(false);

  //  get Button id by using Use Ref
  const editButton = useRef();
  const deleteButton = useRef();
  const suspendButton = useRef();

  // MODAL CLASS

  const editAccount = () => {
    setModalclass(true);
    setWordAccount("Edit");
    setEditing(true);

    setConfirm(editButton.current.id);
  };
  // ==========
  const deletetAccount = () => {
    setModalclass(true);
    setWordAccount("Delete");
    setDeleting(true);

    setConfirm(deleteButton.current.id);
  };
  // ==========
  const suspendAccount = () => {
    setModalclass(true);
    setWordAccount("Suspend");
    setSuspending(true);

    setConfirm(suspendButton.current.id);
  };
  // ===========
  const cencel = () => {
    setModalclass(false);
    setSuspending(false);
    setDeleting(false);
    setEditing(false);
  };
  //  =============

  // CONFIRM BUTTON
  const confirmButton = () => {
    setHandleAction(true);
  };

  // CANCEL EDIT BUTTON
  const cancelEdit = () => {
    setHandleAction(false);
    setModalclass(false);
    setSuspending(false);
    setDeleting(false);
    setEditing(false);
  };

  //----------------------------

  // FETCHING DATA FROM API

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
      <div className="dashbord ">
        <h2>Profile</h2>
        <hr />
        {loading ? (
          <div className="loadingContainer">
            <div className="loaderClass">
              <Loader />
              <p>Fetching content, Please wait</p>
            </div>
          </div>
        ) : (
          <div className="bg-color">
            <div className="profile-container">
              <div className="left-col">
                <div className="user-info-col-1">
                  <div className="infor">
                    <p>User name</p>
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
                  <div className="infor">
                    <p>Phone number</p>
                    {!fetchUserData.phone ? (
                      <p>...</p>
                    ) : (
                      <>
                        <span>{fetchUserData?.phone}</span>
                      </>
                    )}
                  </div>
                  <div className="infor">
                    <p>Email address</p>
                    {!fetchUserData.email ? (
                      <p>...</p>
                    ) : (
                      <>
                        <span>{fetchUserData?.email}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="user-info-col-2">
                  <div className="infor">
                    <p>Home address</p>
                    <p>Masingini "Limpopo"</p>
                  </div>
                  <div className="infor">
                    <p>Gender</p>
                    <p>Male</p>
                  </div>
                  <div className="infor">
                    <p>Account status</p>
                    <p>Active</p>
                  </div>
                </div>
              </div>
              <div className="right-col">
                <div className="img-container">
                  <img src={profileImage} alt="account" />
                </div>
              </div>
            </div>

            <div className="button-container">
              <button
                id="edit"
                ref={editButton}
                onClick={() => {
                  editAccount();
                }}
              >
                Edit information
              </button>
              <button
                id="delete"
                ref={deleteButton}
                onClick={() => {
                  deletetAccount();
                }}
              >
                Delete Account
              </button>
              <button
                id="suspend"
                ref={suspendButton}
                onClick={() => {
                  suspendAccount();
                }}
              >
                Suspend Account
              </button>
            </div>

            {modaclass && (
              <div className="modal-class">
                <div className="confirmation">
                  {handleAction ? (
                    <div className="processing">
                      {deleteing && (
                        <div className="deleting">
                          <h4>Deleting account</h4>
                          <p>Please wait...</p>
                          <div className="loaderContainer">
                            <Loader />
                          </div>
                        </div>
                      )}

                      {editing && (
                        <div className="edit">
                          <div className="cancel-btn">
                            <span
                              onClick={() => {
                                cancelEdit();
                              }}
                            >
                              &times;
                            </span>
                          </div>
                          <h3>Edit user profile</h3>

                          <div className="user-profile-infor">
                            <form className="update-user">
                              <div className="colum-1">
                                <div className="field">
                                  <label htmlFor="name">User name</label>
                                  <input type="text" placeholder="Username" />
                                </div>
                                <div className="field">
                                  <label htmlFor="name">Phone number</label>
                                  <input
                                    type="text"
                                    placeholder="Phone number"
                                  />
                                </div>
                                <div className="field">
                                  <label htmlFor="name">Email address</label>
                                  <input
                                    type="text"
                                    placeholder="Email address"
                                  />
                                </div>
                                <div className="field">
                                  <label htmlFor="name">Suspend account</label>
                                  <select name="" id="">
                                    <option
                                      value="Do you need suspend ?"
                                      disabled
                                      hidden
                                      selected
                                    >
                                      Do you need to suspend ?
                                    </option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                  </select>
                                </div>
                              </div>
                              <div className="colum-1">
                                <div className="field">
                                  <label htmlFor="name">Home address</label>
                                  <select name="" id="">
                                    <option value="">Masingini </option>
                                    <option value="">Mtoni Kidatu</option>
                                  </select>
                                </div>
                                <div className="field">
                                  <label htmlFor="name">Gender</label>
                                  <select name="" id="">
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                  </select>
                                </div>
                                <div className="field">
                                  <label htmlFor="block">Block account</label>

                                  <select name="" id="">
                                    <option
                                      value="blocked"
                                      hidden
                                      selected
                                      disabled
                                    >
                                      Do you need to block ?
                                    </option>
                                    <option value="blocked">Yes</option>
                                    <option value="blocked">No</option>
                                  </select>
                                </div>
                                <div className="field">
                                  <label htmlFor="name">Choose image</label>
                                  <input
                                    type="file"
                                    placeholder="Account status"
                                  />
                                </div>
                              </div>
                            </form>

                            <div className="submit-btn">
                              <div className="btn">
                                <button>Update information</button>
                              </div>

                              <div className="ld">
                                <Loader />
                                <span>
                                  Updating information
                                  <span className="blinkinDot">...</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {suspending && (
                        <div className="suspend">
                          <h4>Suspending account</h4>
                          <p>Please wait...</p>
                          <div className="loaderContainer">
                            <Loader />
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="message">
                      <h3>{wordAccount} Account</h3>
                      <p>
                        Are you sure do want to &nbsp;
                        <span className="cx">{wordAccount} </span> &nbsp;this
                        account
                      </p>
                      <div className="doit">
                        <button
                          onClick={() => {
                            cencel();
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            confirmButton();
                          }}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
