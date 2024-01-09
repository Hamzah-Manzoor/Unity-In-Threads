import React, { useState } from 'react'


const Login_Type_State = (props)=>{

    const [type, settype] = useState('')

    const update =(str)=>{
        settype(str);
    }
    return (
        <Login_Type_State.Provider value={{type , update}}>
            {props.children}
        </Login_Type_State.Provider>
    )

}

export default Login_Type_State;