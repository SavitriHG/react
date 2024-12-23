//conditionally rendering elements in react
import React from 'react'

function Example1(props){
    if(props.isloggedIn){
        return <h1>Welcome user{props.name}</h1>
    }
    else{
        return <h1>PLEASE LOG IN AGAIN</h1>
    }
}
export default Example1