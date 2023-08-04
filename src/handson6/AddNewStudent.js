import React, { useContext } from 'react'
import Store from './Store'
import { useNavigate } from 'react-router-dom'
import './StudentAddUpdate.css'



const AddNewStudent = () => {
  const ContextData = useContext(Store)
  const Navigate = useNavigate()
  
  const newStu = {
    Name : '',
    Age : '',
    Course: '',
    Batch : ''
  }

  const handleChange = (e) =>{
    newStu[e.target.name] = e.target.value;
  }
  const handleClick = () =>{
    if(newStu.Name!=='' && newStu.Age!=='' && newStu.Course!=='' && newStu.Batch!==''){
      ContextData.Students.push(newStu);
    }
    Navigate(-1)
    console.log(ContextData.Students)
  }
  return (
    <div>
      <form action='/Student'>
        <div className='Box'>
          <div className='FloatingInput'>
            <input type='text' id='name' name='Name' placeholder='Name' onChange={handleChange} required/>
            <label htmlFor='name' >Name</label>
          </div>
          <div className='FloatingInput'>
            <input type='text' id='age' name='Age' placeholder='Age' onChange={handleChange} required/>
            <label htmlFor='age'>Age</label>
          </div>
          <div className='FloatingInput'>
            <input type='text' id='course' name='Course' placeholder='Course' onChange={handleChange} required/>
            <label htmlFor='course'>Course</label>
          </div>
          <div className='FloatingInput'>
            <input type='text' id='batch' name='Batch' placeholder='Batch' onChange={handleChange} required/>
            <label htmlFor='batch'>Batch</label>
          </div>
        </div>
        <div className='footer'>
          <button type='button' className='btn' onClick={()=>Navigate(-1)}>Cancel</button>
          <button type='button' onClick={handleClick}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddNewStudent