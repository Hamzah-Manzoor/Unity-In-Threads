import React, { useState } from 'react'
import sidebar_context from './Sidebar'

const SidebarState = (props)=>{
    
    const [toggleState, settoggleState] = useState(false);
    const update = ()=>{
        settoggleState(!toggleState)
    }
    return (
        <sidebar_context.Provider value={{toggleState , update}}>
            {props.children}
        </sidebar_context.Provider>
        
    )
}

export default SidebarState;