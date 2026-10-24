import React, { useEffect, useState } from "react";

// AUTH
import { auth } from "../axios/Axios";

// LOADER
import { Loader } from "../uiComponent/Loader";

export const Payment = () => {
  const [loading, setLoading] = useState(false);

  const [userPayment, setUserPayment] = useState([]);

  useEffect(() => {
    // Fetch data from api
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await auth.get("/mypayment", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        const userPayment = response?.data?.data;

        setUserPayment(userPayment);

        const moreUserInfor = await auth.get("/getOtherInfor", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        console.log(moreUserInfor)
      } catch (err) {
        
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="page_wrapper">
      <span className="payment_title">My payment</span>

      <p className="payment_p_targ">This account belong to : &nbsp;</p>

      <div className="payment_content">
        {userPayment.map((index, key) => (
          <div className="content_collection" key={index._id}>
            <p>
              transaction date :
              {index?.createdAt
                ?.split("T")[0]
                ?.split("-")
                .reverse()
                ?.join(" / ")}
            </p>

            <p>status : {index.remainder < 0 ? "incomplete" : "completed"}</p>

            <div className="payment_received">
              <p>{index?.transactionAmount?.toLocaleString()} Tsh</p>
            </div>

            <div className="payment_amount">
              <p>
                Expected amount: &nbsp; &nbsp; &nbsp;
                {index?.expectedtransactionAmount?.toLocaleString()} Tsh
              </p>

              <p>
                Letf over amount: &nbsp; &nbsp; &nbsp;
                {index?.remainder?.toLocaleString()} Tsh
              </p>
              <p>
                Duration: {index?.duration}
                {index?.duration <= 1 ? "Month" : "Months"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
