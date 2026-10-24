import React, { useState } from 'react'

import { authContext } from './AuthContext'

export const AuthProvider = ( {children}) => {

     const [openNavBar, setOpenNavBar] = useState(false);

     const isAuth = localStorage.getItem("authToken");

  return (
    <authContext.Provider value={{openNavBar, setOpenNavBar, isAuth}}>
        {children}
    </authContext.Provider>
  )
}
