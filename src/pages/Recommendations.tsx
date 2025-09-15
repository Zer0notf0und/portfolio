import React from 'react';
import './Recommendations.css';


const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <div>
            <h3>Ritika Sharma</h3>
            <p>CEO UCule Computing</p>
            <p className="date">July 26, 2024</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "This is to certify that Mr. Raghav Yogi, a student of the Department of Computer Science at 
NMIMS Chandigarh, has successfully completed an internship at UCule Computing Private 
Limited, Chandigarh from 15th May, 2024 to Sth July, 2024. 
During this period, Raghav gained invaluable experience in developing enterprise applications, 
particularly within the Healthcare division. He demonstrated proficiency in a range of technologies, 
including Java, Spring, Oracle, REST Services, and React, and made significant contributions to 
the team's projects and initiatives. 
Raghav's time with us was marked by his dedication, and a genuine passion for software 
developnent. He consistently displayed professionalism and an eagerness to learn, taking initiative 
in tackling complex tasks and effectively collaborating with team members. 
We are confident that the knowledge and skills Raghav acquired during his internship will serve 
him well in his future endeavors. We wish him continued success and growth in his academic and 
professional pursuits. "</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
