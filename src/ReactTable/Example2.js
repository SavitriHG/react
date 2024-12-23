import React from 'react'
import './Example1.css'

function Example2() {
    const data=[{
        id:1,name:"Raja",age:25,gender:"male",skill:"ReactJs"
    },{
         id:2,name:"Vikas",age:25,gender:"male",skill:"ReactJs"
    },{
         id:3,name:"Priya",age:25,gender:"female",skill:"ReactJs"
    }] 
    return(
        <div>
            <table border={"1"}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Skills</th>
                </tr>

                {/* key-act as a index */}

                {data.map((val,key)=>{
                    return(
                        <>
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                                <td>{val.skill}</td>
                            </tr>
                        </>
                    )
                })}


            </table>
        </div>
    )
}

export default Example2