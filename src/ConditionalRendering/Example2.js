import React from 'react'
import login from './login'
import logout from './logout'

function Example2(props){
    if(props.isloggedIn){
        return<login/>

    }
    else{
        return<logout/>
    }
}

export default Example2;
