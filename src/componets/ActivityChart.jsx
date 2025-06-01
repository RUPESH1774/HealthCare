import React from 'react';

import './Home.css'
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const barHeights = [40, 60, 45, 70, 55, 35, 25]; // Heights in pixels

const ActivityFeed = () => {
  return (
    <div id='allActivity' className="card p-3 " style={{ maxWidth: '400px',backgroundColor:" rgba(240, 248, 255, 0.945)" ,border:'none' ,borderRadius:'20px'}}>
      <div className="d-lg-flex justify-content-between align-items-center mb-3">
        <h5 className="card-title mb-0">Activity</h5>
        <small className="text-muted">3 appointments on this week</small>
      </div>

      <div className="d-flex justify-content-between align-items-end" style={{ height: '120px' }}>
        {barHeights.map((height, index) => (
          <div key={index} className="text-center mx-1">
            <div
              className="bg-primary rounded-pill mx-auto"
              style={{
                height: `${height}px`,
                width: '8px',
              }}
            ></div>
            <small className="d-block mt-1 text-muted">{days[index]}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
