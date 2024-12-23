import React from 'react'

function Example1(){
    return(
        <>
        <h1>Ordered List</h1>
        <ol type='a'>
            <li>Benx</li>
            <li>BMW</li>
            <li>Audi</li>
        </ol>
        <h1>Unordered List</h1>
        <ul type='square'>
            <li>Benx</li>
            <li>BMW</li>
            <li>Audi</li>
        </ul>
        <h1>Definition List</h1>
        <dl>
            <dt>Student 1</dt>
            <dd>i m savitri i know html css</dd>
            <dt>Student 2</dt>
            <dd>i m rathan i know javascript</dd>
            <dt>Student 3</dt>
            <dd>i m sachin i know python</dd>
        </dl>
        <h1>nested List</h1>
        <ol type='1'>
            <li>Java full stack</li>
            <ul type='circle'>
                <li>Core Java</li>
                <li>Web Technology</li>
                <li> MySQL</li>
            
            </ul>
            <li>Python Full Stack</li>
            <ul type='square'>
                <li>Core python</li>
                <li>Web Technology</li>
                <li> MySQL</li>
                <li>Django</li>
                <li>RestApi</li>
            
            </ul>
            <li>Mern Stack</li>
            <ul type='disc'>
                <li>Core python</li>
                <li>Web Technology</li>
                <li> MySQL</li>
                <li>Django</li>
                <li>RestApi</li>
            
            </ul>
        </ol>
        </>
    )
}
export default Example1