import React from 'react';

const VideoElement = (props) => {
  return (
    <React.Fragment>
      <div className='row video-header'>
        <div className='col'>
          <h2 className='stripe-green'>Video Demonstration</h2>
        </div>
      </div>
      <div className='row video-player'>
        <div className='col'>
        <div className='video-container'>
          <img className="ratio" src="http://placehold.it/16x9"/>
          <iframe width="100%" height="auto" src={props.source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VideoElement;
