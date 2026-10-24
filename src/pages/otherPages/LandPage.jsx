import computer from "./img/computer.png";

import { FaCheckCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

export const LandPage = () => {
  return (
    <>
      <div className="section_one">
        <div className="page_wrapper  flex_wrapper">
          <div className="flex_container_section_one">
            <h1 className="title_h1_section_one">
              Tax payer management system
            </h1>

            <div className="section_description">
              <p>
                The Tax Payer Management System is a web-based application
                designed to simplify and improve the management of taxpayer
                information, tax records, and payment transactions. The system
                provides a centralized platform for administrators to register
                taxpayers, manage taxpayer profiles, monitor tax obligations,
                track payments, and maintain accurate financial records. The
                system aims to reduce manual paperwork, minimize data entry error
              </p>

              <div className="take_action_button">
                <Link to="/user-login">
                   <button>Login</button></Link>
             
              </div>
            </div>
          </div>

          <div className="flex_container_section_one_img">
            <img
              src={computer}
              alt="computer_image"
              width="250"
              height="2s00"
            />
          </div>
        </div>
      </div>

      <div className="section_two">
        <div className="page_wrapper flex-section_two">
          <h2>Basic Principle for tax payer to understand</h2>

          <div className="section_two_container">
            <div className="section_two_col_one">
              <ul>
                <li>
                  <FaCheckCircle size={34} color="green" />  Pay Tax on Time: Every
                  taxpayer must pay the required house tax within the specified
                  payment period.
                </li>
                <li>
                  <FaCheckCircle size={34} color="green" /> Keep Payment
                  Receipts: Taxpayers should keep their payment receipts as
                  proof of payment for future reference.
                </li>
                <li>
                  <FaCheckCircle size={34} color="green" /> Verify Tax
                  Information: Every taxpayer should check their tax details and
                  outstanding balance regularly to ensure that the information
                  is correct.
                </li>
                <li>
                  <FaCheckCircle size={34} color="green" /> Use Official Payment
                  Methods: Taxpayers should use only officially approved payment
                  methods when paying house tax.
                </li>
                <li>
                  <FaCheckCircle size={34} color="green" /> Protect Account
                  Information: Taxpayers must keep their login details and other
                  confidential account information secure.
                </li>
              </ul>
            </div>
            <div className="section_two_col_two">
              <ul>
                <li>
                  <FaCheckCircle size={34} color="green" /> Follow Rules and
                  Regulations: All taxpayers must follow the rules and
                  regulations established by the relevant tax authority.
                </li>
                <li>
                  <FaCheckCircle size={34} color="green" /> Report Problems
                  Immediately: Any problem related to tax payments, house
                  information, or the tax system should be reported to the
                  responsible authority as soon as possible.
                </li>
                <li>
                  <FaCheckCircle size={34} color="green" /> Avoid False
                  Information: Taxpayers must not provide false information or
                  submit misleading documents during registration or tax
                  payment.
                </li>
                <li>
                  <FaCheckCircle size={34} color="green" /> Seek Clarification
                  When Necessary: If a taxpayer does not understand a tax
                  amount, payment deadline, or any other requirement, they
                  should contact the responsible authority for assistance.
                </li>
                <li>
                  <FaCheckCircle size={34} color="green" /> Do Not Engage in
                  Fraud: Taxpayers must not attempt to manipulate payment
                  records, forge receipts, or interfere with the tax management
                  system.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
