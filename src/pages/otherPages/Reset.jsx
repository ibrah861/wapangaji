import React, { useState } from "react";

export const Reset = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkBox, setCheckBox] = useState(false);
    

   const matched = newPassword === confirmPassword;

   const checkbox = () => {
    setCheckBox((prev) => !prev)
   }
    
     
    
  return (
    <div className="resetBOx">
      <div className="resetBox_container">
        <span>Reset Password</span>
        <div className="container_description">
            <span>Please insure you are filling correct information before submition. you can not undo action after that </span>
        </div>
        <form  className="form_reset">
          <div className="form_content">
            <label htmlFor="" className="label_form" >
              Old password
            </label>
            <input type={checkBox ? "text" : "password"} placeholder="Enter old password" onChange={(e) => setOldPassword(e.target.value.trim())}  />
          </div>
          <div className="form_content">
            <label htmlFor="" className="label_form">
              New password
            </label>
            <input type={checkBox ? "text" : "password"} placeholder="Enter new password" onChange={(e) => setNewPassword(e.target.value.trim())}/>
            <span  className={matched ? "psw_matched form--matched--psw" : "psw_not_matched form--matched--psw"}>
              {matched ?  "Password matched" : "  Password does not match" }
            </span>
          </div>
          <div className="form_content">
            <label htmlFor="" className="label_form">
              Confirm password
            </label>
            <input type={checkBox ? "text" : "password"} placeholder="Confirm new password" onChange={(e) => setConfirmPassword(e.target.value.trim())} />
             <span className={matched ? "psw_matched form--matched--psw" : "psw_not_matched form--matched--psw"}>
              {matched ?  "Password matched" : "  Password does not match" }
            </span>
          </div>

          <div className="reset_checkBox">
            <input type="checkbox"  onClick={checkbox}/>
            <label htmlFor="checkbox">{checkBox ? "Hide" : "Show"} password</label>
          </div>

          <button className="blue_btn form_btn btn--margin--top">Change password</button>
        </form>
      </div>
    </div>
  );
};
