import React from 'react'
import './sidebar.css'
import './Media.css'
export default function Sidebar() {
  return (
    <div>
         <aside >
        <div className='d-flex head' id='h2'>
        <h2 className='text-info'>Health</h2>
        <h2>Care.</h2>
        </div>
    <main>
        <br />
        <p>General</p>
    <ul >
    <li ><img width="24" height="24" src="https://img.icons8.com/material-sharp/24/dashboard-layout.png" alt="dashboard-layout"/>  DashBoard</li>
    <li><img width="24" height="24" src="https://img.icons8.com/forma-light/24/activity-history.png" alt="activity-history"/> History</li>
    <li><img width="24" height="24" src="https://img.icons8.com/windows/32/calendar-week.png" alt="calendar-week"/> Calender</li>
    <li><img width="24" height="24" src="https://img.icons8.com/plumpy/24/plus-2-math.png" alt="plus-2-math"/> Appoinment</li>
    <li><img width="24" height="24" src="https://img.icons8.com/ios/50/financial-dynamic-presentation.png" alt="financial-dynamic-presentation"/> Statisctics</li>    
    </ul>   
    
    <p>Tools</p>
    <ul>
    <li><img width="24" height="24" src="https://img.icons8.com/ios/50/speech-bubble-with-dots--v1.png" alt="speech-bubble-with-dots--v1"/> Chat</li>
    <li> <img width="24" height="24" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1"/> Support</li>
    </ul>
<br />

<ul  id='setting' className='setting'>
    <li> <img width="24" height="24" src="https://img.icons8.com/ios/50/settings--v1.png" alt="settings--v1"/> Setting</li>
</ul>
   
    </main>

    </aside>
    </div>
  )
}
