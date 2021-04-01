import React from 'react';

const HomePage = () => {
  return (
    <React.Fragment>
      <div className='row header-row'>
        <div className='col'>
          <h1 className='stripe-green'>Computer Science Visualized</h1>
        </div>
      </div>
      <div className='row image-row'>
        <div className='col'>
          <div id='home-image'></div>
        </div>
      </div>
      <div className='descriptions home-descriptions'>
        <div className='row'>
          <div className='col'>
            <h2 className='stripe-blue'>About</h2>
            <p>One of the keys to writing better code is a solid understanding of how common data structures work and when to use them. Memorizing a definition or an implementation is insufficient. But with the help of clear visualizations and gradually more difficult interactive features, the student truly learns the paradigm and can apply it naturally when needed.</p>
            <p>Take a look around and try out the interactive exercises!</p>
          </div>
          <div className='col'>
            <img src='images/networking.jpg' className='basic-image' />
          </div>
        </div>
        <div className='row home-lists-row'>
          <div className='col'>
            <h2 className='stripe-green'>Data Structures:</h2>
            <ul>
              <li>Stack</li>
              <li>Queue</li>
              <li>Linked Lists</li>
              <li>Hash Tables</li>
            </ul>
          </div>
          <div className='col'>
            <h2 className='stripe-blue'>Algorithms:</h2>
            <ul>
              <li>Largest Number</li>
              <li>Path Finding</li>
              <li>Least Common Denominator</li>
              <li>Array Searches</li>
            </ul>
          </div>
          <div className='col'>
            <h2 className='stripe-green'>Networking:</h2>
            <ul>
              <li>TCP 3-Way Handshake</li>
              <li>HTTPS Protocol</li>
              <li>UDP vs TCP</li>
              <li>Routing</li>
            </ul>
          </div>
        </div>
        <div className='row home-collaborate-row'>
          <div className='col'>
            <img src='images/work-together.jpg' className='basic-image' />
          </div>
          <div className='col'>
            <h2 className='stripe-blue'>Collaborate</h2>
            <p>There's a lot of talent in our cohort, but we need ways to show prospective employers that we can code real world applications, work as part of a larger team, and explain our ideas clearly. What better way to do that than to build components to visualize computer science concepts? Link to your code and your Github profile. Embed a video of you walking through your visualization or how you wrote your code. Be creative!</p>
            <p>View the code at <a href='https://github.com/BirdHighway/CS-Visualized'>github.com/BirdHighway/CS-Visualized</a></p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
