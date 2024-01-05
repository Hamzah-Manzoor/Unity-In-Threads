import React, { useState } from "react";
import Retail_User_Context from "./Retail_User";

const Retail_User_State = (props)=>{
    
    const [user, setuser] = useState({});

    const update = (user)=>{
        setuser(user);
    }
    const logout_user = ()=>{
        setuser(null);
    }

    return (
        <Retail_User_Context.Provider value={{ user ,update , logout_user}}>
            {props.children}
        </Retail_User_Context.Provider>
    )
}

export default Retail_User_State;