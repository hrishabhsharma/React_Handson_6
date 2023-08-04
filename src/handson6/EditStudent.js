import React, { useContext } from 'react'
import Store from './Store'
import { useLocation, useNavigate } from 'react-router-dom'
import './StudentAddUpdate.css'

const EditStudent = () => {
    const ContextData = useContext(Store)
    const Navigate = useNavigate()
    const IndexValue = useLocation().state.data
    const Data = ContextData.Students[IndexValue]

//   const newStu = {
//     Name : ContextData.Students[IndexValue].Name,
//     Age : ContextData.Students[IndexValue].Age,
//     Course: ContextData.Students[IndexValue].Course,
//     Batch : ContextData.Students[IndexValue].Batch
//   }

    const handleChange = (e) =>{
      Data[e.target.name] = e.target.value;
      // ContextData.Students[IndexValue][e.target.name] = e.target.value;
    }
    
    const handleClick = () =>{
        // ContextData.Students[IndexValue] 
        Navigate(-1)
        console.log(ContextData.Students)
    }
    const handleDelete = ()=>{
      ContextData.Students.splice(IndexValue,1)
      Navigate(-1)
      console.log(ContextData.Students)
    }
    return (
      <>
      <form action='/Student'>
          <div className='Box'>
          <div className='FloatingInput'>
            <input type='text' id='name' name='Name' placeholder={Data.Name} onChange={handleChange}/>
            <label htmlFor='name'>Name</label>
          </div>
          <div className='FloatingInput'>
            <input type='text' id='age' name='Age' placeholder={Data.Age} onChange={handleChange}/>
            <label htmlFor='age'>Age</label>
          </div>
          <div className='FloatingInput'>
            <input type='text' id='course' name='Course' placeholder={Data.Course} onChange={handleChange}/>
            <label htmlFor='course'>Course</label>
          </div>
          <div className='FloatingInput'>
            <input type='text' id='batch' name='Batch' placeholder={Data.Batch} onChange={handleChange}/>
            <label htmlFor='batch'>Batch</label>
          </div>
          </div>
          <div className='footer'>
            <button type='button' className='btn' onClick={()=>Navigate(-1)}>Cancel</button>
            <button type='button' className='btn' onClick={handleDelete}>Delete</button>
            <button type='button' onClick={handleClick}>Update</button>
          </div>
        </form>
      </>
    )
}

export default EditStudent