import React, { useContext } from 'react'
import Store from './Store'
import { useNavigate } from 'react-router-dom'
import './Addnewbutton.css'


const AddNewStudent = () => {
  const ContextData = useContext(Store)
  const Navigate = useNavigate()
  // console.log(ContextData.Students)
  
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
      ContextData.Students.push(newStu)
    }
    Navigate(-1)
    console.log(ContextData.Students)
  }
  return (
    <div>
      <form action='/Student'>
        <fieldset>
        <input type='text' id='name' name='Name' placeholder=' ' onChange={handleChange} required/>
        <legend>
          <label >Name</label><br/>
        </legend>
        </fieldset>
        <br/>
        
        <span class="mdc-floating-label" id="my-label-id">Hint text</span>
      <label >Age</label><br/>
      <input type='text' id='age' name='Age' placeholder='Age' onChange={handleChange} required/><br/>
      <label htmlFor='course'>Course</label>
      <input type='text' id='course' name='Course' placeholder='Course' onChange={handleChange} required/><br/>
      <label htmlFor='batch'>Batch</label>
      <input type='text' id='batch' name='Batch' placeholder='Batch' onChange={handleChange} required/><br/>
      <button type='button' onClick={()=>Navigate(-1)}>Cancel</button><br/>
      <button type='button' onClick={handleClick}>Submit</button><br/>
      </form>
    </div>
  )
}

export default AddNewStudent