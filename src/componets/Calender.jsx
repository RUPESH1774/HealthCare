import React from 'react'
import './Calender.css'
import './Media.css'

export default function Calender() {
  return (
    <div>
      <div className="container1">

     <div className='d-flex justify-content-end gap-2 me-5'>
    <img className='img-fluid' style={{height:'7vh',borderRadius:'10px'}} title='Profile' src="data:image/jpeg;base64,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" alt="profile" />
     <button style={{height:'7vh',width:'7vh',borderRadius:'10px',backgroundColor:'blue',color:'whitesmoke',fontSize:'20px'}}> + </button>
     </div>

      <div className='d-flex justify-content-between mt-4'>
        <h3 id='h3'>October2021</h3>
        <h3 id='h3'>⏪ -- ⏩</h3>
      </div>

  <div className='d-flex justify-content-between calender'>
    <div className='p-2'>
      <h4>Mon</h4>
      <h4>25</h4>
      <h6>10:00</h6>
      <h6>11:00</h6>
      <h6>12:00</h6>
    </div>
    <div className='appointment_calender p-2'>
      <h4>Tue</h4>
      <h4>26</h4>
      <h6>1:00</h6>
      <h6 className='p-1 rounded-2 text-light' style={{backgroundColor:'rgb(99, 99, 206)'}}>2:00</h6>
      <h6>3:00</h6>
    </div>
    <div  className='p-2'>
      <h4>Wen</h4>
      <h4>27</h4>
      <h6>10:00</h6>
      <h6>---</h6>
      <h6>12:00</h6>
    </div>
    <div className='p-2'>
      <h4>Thu</h4>
      <h4>28</h4>
      <h6>---</h6>
      <h6>10:00</h6>
      <h6> 12:00</h6>
    </div>
    <div className='p-2'>
      <h4>Fri</h4>
      <h4>29</h4>
      <h6>---</h6>
      <h6>15:00</h6>
      <h6>16:00</h6>
    </div>
    <div className='p-2'>
      <h4>Sat</h4>
      <h4>30</h4>
      <h6 className='p-1 text-light' style={{backgroundColor:'rgb(186, 186, 233)',borderRadius:'10px'}}>12:00</h6>
      <h6>13:00</h6>
      <h6>14:00</h6>
    </div>
    <div className='black_style p-2'>
      <h4>Sun</h4>
      <h4>31</h4>
      <h6 className='p-1 text-light' style={{backgroundColor:'rgb(186, 186, 233)',borderRadius:'10px'}}>16:00</h6>
      <h6>17:00</h6>
      <h6>18:00</h6>
    </div>
    </div>
    <br />
  <div className='d-flex  justify-content-evenly'>
    
    <div className='appointment'>
     
        <h5>Dentist 🦷</h5> 
      09:00--11:00
      <h6>Dr. Ramesh Patil</h6>
    </div>

    <div className='appointment2'>
        <h5>PhysicTherapy Appoinment 💪</h5>
      13:00--14:30
      <h6>Dr. Suresh Rane</h6>
    </div>

    </div>
     <br />

     
     <footer>
      <h3 >The Upcoming Schedule</h3>
      <p>On Wensday</p>
  <div className='d-flex  justify-content-evenly'>
      <div className='appointment2'>
        <h5>Health Checkup Complete</h5>
        11:00 AM
      </div>

      <div className='appointment2'>
        <h5>Ophthalmologist 👁</h5>
        15:00 PM
      </div>
  </div>
<br />
  <p>On Saturday</p>
  <div className='d-flex  justify-content-beteen gap-5 ms-5'>
      <div className='appointment2'>
        <h5>Cardiologist 💖</h5>
        12:00 AM
      </div>
      <div className='appointment2'>
        <h5>Neurologist 👨‍⚕️</h5>
        16:00 PM
      </div>
  </div>
     </footer>
     
     
     </div>
    </div>
  )
}
