import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className="About">
      <div className="About__aboutus">
        <div className="About__summary">

        </div>
        <div className="About__facts">

        </div>
      </div>
      <div className="About__team">
        <h2>The Team</h2>
        <div className="About__members">
          {
            ['Shaedon', 'Eric', 'Shanda', 'Muna', 'Carlos', 'Mike'].map((member, index) => (
              <div key={index} className="About__member">
                {member}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
