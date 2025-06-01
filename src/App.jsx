import React from 'react'
import Home from './componets/Home'
import Sidebar from './componets/Sidebar'
import Calender from './componets/Calender'

export default function App() {
  return (
    <div>
      <div className='p-4 ' style={{backgroundColor:'powderblue'}}>
      
      <div className="d-md-flex rounded-5"> 
      <Sidebar/>
      <Home/>
      <Calender/>
      </div>

      </div>
    </div>
  )
}
