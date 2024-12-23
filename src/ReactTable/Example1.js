import React from 'react'
import './Example1.css'
function Example1() {
  return (
    <>
      <div className='container'>
        <table border={"1"}>
            <caption>Student Data</caption>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Branch</th>
                <th>Age</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Raj</td>
                <td>CSE</td>
                <td>22</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Riya</td>
                <td>ISE</td>
                <td>21</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Virat</td>
                <td>ECE</td>
                <td>20</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Sachin</td>
                <td>Civil</td>
                <td>19</td>
            </tr>
        </table>
      </div>
    </>
  )
}

export default Example1