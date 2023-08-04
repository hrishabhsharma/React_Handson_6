import React, { useContext } from 'react'
import Store from './Store'
import { NavLink, useNavigate } from 'react-router-dom'

const Student = () => {
  const ContextData = useContext(Store)
  const Navigate = useNavigate()
  return (
        <main>
            <div id='Caption'>
                <h1>Students Details</h1>
                <button onClick={()=>Navigate('/AddStudent')} id='AddNew'>Add New Student</button>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Course</td>
                        <td>Batch</td>
                        <td>Change</td>
                    </tr>
                {
                    ContextData.Students.map((item,index) =>{
                        return(
                            <tr key={index} className='DataTable'>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>{item.Course}</td>
                                <td>{item.Batch}</td>
                                <td><NavLink to={"/Student/"+index} state={{data:index}}>Edit</NavLink></td>
                                
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </main>
  )
}

export default Student