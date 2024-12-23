import React from 'react'
import login from './login'
import logout from './logout'

function Example4(props){
    return (props.isloggedIn?<login/>:<logout/>)
}
export default Example4