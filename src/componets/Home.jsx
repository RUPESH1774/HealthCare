import React from 'react'
import './home.css'
import ActivityFeed from './ActivityChart'
import './Media.css'
export default function Home() {
  return (
    <div>
        <main className='main'>    
        <div className="container" id='container'>
   
   <div>
        <input type="search" name="Search" id="Search"  placeholder='Search' /> &nbsp;&nbsp;&nbsp;
        <img className='bell' width="40" height="40" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-notification-web-flaticons-lineal-color-flat-icons-2.png" alt="external-notification-web-flaticons-lineal-color-flat-icons-2"/>
  </div>
<div className='d-lg-flex justify-content-between'>
    <h2>Dashboard</h2>
    <p className=''>This Week ➡</p>
  </div>
  
    <div className='d-lg-flex justify-content-between gap-5' >
   
        <img className='img-fluid ' id='body' src="https://i.postimg.cc/hvmW5qnG/body.png" alt="" />
       
        <div className='allOrgone'>
            
            <div className='orgone'>
            <img className='img-fluid' src="https://i.postimg.cc/TPLYVFst/lung.png" alt="lungs" /> Lungs
            <p>20-30-2019</p>
            <div class="containerr">
        <div class="body heart">.</div>
          </div>
            </div>

            <div className='orgone'>
            <img className='img-fluid'   src="https://i.postimg.cc/W3gdczMR/teeth.png" alt="Teeth" /> Teeth
            <p>21-05-2012</p>
            <div class="containerr">
        <div class="body teeth">.</div>
        </div>
            </div>
          
            <div className='orgone'>
            <img className='img-fluid'  src="https://i.postimg.cc/V6F9jK5H/bone.png" alt="Bone" /> Bone
            <p>25-07-2025</p>
            <div class="containerr">
        <div class="body bone">.</div>
        </div>
            </div>
             <br />
            <p className='text-end'>Details ➡</p>
        </div>
    </div>
    
    <ActivityFeed/>
    


        </div>
        </main>
    </div>
  )
}
