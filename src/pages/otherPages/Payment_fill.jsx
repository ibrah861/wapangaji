import  { useState } from "react";

export const Payment_fill = () => {
    const [viewUser, setViewUser] = useState(false);

    const viewUser_and_Upadate = () => {
        setViewUser(true);
    }
    const close_viewUser_and_Upadate = () => {
        setViewUser(false);
    }
  return (
    <div className="page_wrapper">
      <h3>Fill payment</h3>
      <div className="paymet_fill">
        <p>
          This page is related with user payment and update user payment
          information only, use user phone number to search for their details
        </p>
      </div>

      <div className="payment_search">
        <label htmlFor="search">Search user payment : </label>
        <div className="choose_typ">
          <div className="type">
            <input type="radio" id="radio" />
            <label htmlFor="">Mobile phone</label>
          </div>
          <div className="type">
            <input type="radio" id="radio"/>
            <label htmlFor="">Email</label>
          </div>
          </div>
        <div className="search_iput">
          <input
            type="text"
            placeholder="Search for payment (only phone number accepted)"
          />
          <button>Search</button>
        </div>

        <div className="paymet_user_details">
          <div className="no_user_found_payment">
            <>
              {viewUser ? (
                <p>User details will appear here once you search it</p>
              ) : (
                <>
                  {viewUser ? (
                    <div className="user_information_payment">
                      <p>IBRAHIM AMOUR ALI</p> <p>0773820021</p>
                      <p>ibra1980f@gmail.com</p>
                      <p>Mtoni kidatu</p>

                      <div className="view_payment_details">
                        <button onClick={viewUser_and_Upadate}>View user payment</button>
                      </div>
                    </div>
                  ) : (
                    <p>No user record found</p>
                  )}
                </>
              )}
            </>
          </div>
        </div>

        { viewUser &&
            <div className="payment_update" id="black_update_color">
                <span onClick={close_viewUser_and_Upadate}>&times;</span>
                
            <h4 >Update user information</h4>
        </div>}
      </div>
    </div>
  );
};
