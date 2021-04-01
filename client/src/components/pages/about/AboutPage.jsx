import React from 'react';

const AboutPage = () => {
  return (
    <React.Fragment>
      <div className='row header-row'>
        <div className='col'>
          <h1 className='stripe-green'>About Computer Science Visualized</h1>
        </div>
      </div>
      <div className='row image-row'>
        <div className='col'>
          <div id='about-image'></div>
        </div>
      </div>
      <div className='descriptions home-descriptions'>
      <div className='row about-lists-row'>
          <div className='col'>
            <h2 className='stripe-green'>Frontend</h2>
            <ul>
              <li>React</li>
              <li>Bootstrap 4</li>
            </ul>
          </div>
          <div className='col'>
            <h2 className='stripe-blue'>Backend</h2>
            <ul>
              <li>Express</li>
              <li>Nginx</li>
            </ul>
          </div>
          <div className='col'>
            <h2 className='stripe-green'>Hosting</h2>
            <ul>
              <li>Digital Ocean Droplet</li>
              <li>Ubuntu 18.04</li>
            </ul>
          </div>
        </div>

      </div>
    </React.Fragment>
  );
};

export default AboutPage;
