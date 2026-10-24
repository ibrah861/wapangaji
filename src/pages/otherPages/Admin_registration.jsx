import React from 'react'

export const Admin_registration = () => {
  return (
    <div className='page_wrapper '>
        <span className='admin_title'>User registration</span>

        <div className="form_container">
            <form  >
                <div className="form_input">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='IBRAHIM AMOUR ALI'/>
                </div>
                <div className="form_input">
                    <label htmlFor="">Email address</label>
                    <input type="text" placeholder='ibra1980f@gmail.com' />
                </div>
                <div className="form_input">
                    <label htmlFor="">Registration date</label>
                    <input type="text" placeholder='00/ 00/ 0000'/>
                </div>
                <div className="form_input">
                    <label htmlFor="" >Place</label>
                    <input type="text" placeholder="MTONI KIDATU" />
                </div>
                <div className="form_input">
                    <label htmlFor="" >Phone</label>
                    <input type="text" placeholder="0773 820 021" />
                </div>
                <button>Register</button>
            </form>
        </div>
    </div>
  )
}
