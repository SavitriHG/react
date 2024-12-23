import React from 'react'
import login from './login'

function Example5(props){
    return(
        <div>
            {props.booleanValue &&<h1>welcome user</h1>}
            {props.booleanValue && <login/>}
        </div>
    )
}
export default Example5