import React from 'react'
function Example3(props){
    const welcomeMSg=<h1 style={{color:"green",fontsize:"x-large",textAlign:"center"}}>Welcome user</h1>
    const loginMSg=<h1 style={{color:"red",fontsize:"x-large",textAlign:"center"}}>Please login</h1>

    return(props.isloggedIn? welcomeMSg:loginMSg)

}
export default Example3