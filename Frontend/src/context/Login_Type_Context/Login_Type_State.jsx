import React, { useState } from 'react'
import Login_Type_Context from './Login_Type_Context';


const Login_Type_State = (props)=>{

    const [type, settype] = useState('')

    const update =(str)=>{
        settype(str);
    }
    return (
        <Login_Type_Context.Provider value={{type , update}}>
            {props.children}
        </Login_Type_Context.Provider>
    )

}

export default Login_Type_State;