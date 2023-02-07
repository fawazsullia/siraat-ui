// this component will for the base container for the entire app
// main reason is to persist logged in user state between routings

import React, { createContext, useEffect, useState } from 'react'
import { axiosInstance } from '../../utils/AxiosInstance';

const Layout = (props) => {

const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
const [loggedInUser, setLoggedInUser] = useState({})

// global context with user logged in details
useEffect(() => {
    axiosInstance.get("/auth/local")
    .then((response)=> {
        setIsUserLoggedIn(true);
        setLoggedInUser(response.data);
    })
    .catch((err)=> {
        console.log(err, "Error in user verification");
    })
}, [])

const UserContext = createContext(null);

    if(isUserLoggedIn){
        return (
            <>
            {props.children}
            </>
          )
    }else{
        return "This needs to go to logged In"
    }
  
}

export default Layout