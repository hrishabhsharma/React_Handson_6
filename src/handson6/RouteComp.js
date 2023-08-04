import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contactus from './Contactus'
import Store from './Store'
import './style.css'
import AddNewStudent from './AddNewStudent'
import EditStudent from './EditStudent'

const RouteComp = () => {
  const [Data,setData] = useState([
    {Name : 'John',   Age: 24,  Course : 'MERN',  Batch : 'October',  },
    {Name : 'Doe',    Age: 25,  Course : 'MERN',  Batch : 'November', },
    {Name : 'Biden',  Age: 26,  Course : 'MERN',  Batch : 'September',},
    {Name : 'Barar',  Age: 22,  Course : 'MERN',  Batch : 'September',},
    {Name : 'Christ', Age: 23,  Course : 'MERN',  Batch : 'October',  },
    {Name : 'Elent',  Age: 24,  Course : 'MERN',  Batch : 'November', }
])
  return (
    <>
    <BrowserRouter>
    <div className='header'>
      <NavLink to='/' className='tag'>Home</NavLink>
      <NavLink to='/Student' className='tag'>Student</NavLink>
      <NavLink to='/ContactUs' className='tag'>Contact</NavLink>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Student' element={
        <Store.Provider value={{Students : Data , UpdateStd : setData}}>
          <Student/>
        </Store.Provider>
      }/>
      <Route path='/Contactus' element={<Contactus/>} />
      <Route path='/AddStudent' element={
        <Store.Provider value={{Students : Data , UpdateStd : setData}}>
          <AddNewStudent/>
        </Store.Provider>
      }/>
      <Route path='/Student/:id' element={
        <Store.Provider value={{Students : Data , UpdateStd : setData}}>
          <EditStudent/>
        </Store.Provider>
      }/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteComp