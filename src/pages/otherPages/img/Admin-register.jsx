import React from 'react'

import { Loader} from '../../uiComponent/Loader'

export const Adminregister = () => {




  return (
    <div className='dashbord register'>
      <h2>USER REGISTRATION SECTION</h2>

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
  )
}
