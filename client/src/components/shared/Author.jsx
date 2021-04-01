import React from 'react';

const Author = (props) => {
  const interests = props.author.interests.map((interest) => {
    return <li key={interest}>{interest}</li>
  });
  return (
    <React.Fragment>
      <div className='row author-header-row'>
        <div className='col'>
          <h3 className='stripe-green'>About the Author</h3>
        </div>
      </div>
      <div className='row author-row'>
        <div className='col'>
          <img src={'images/' + props.author.image} />
        </div>
        <div className='col'>
          <div className='author-panel'>
            <p><strong>{props.author.name}</strong></p>
            <p><strong>Location</strong><br />{props.author.location}</p>
            <p><strong>Github</strong><br /><a target='_blank' href={props.author.github}>{props.author.github}</a></p>
            <p><strong>Email</strong><br /><a href={'mailto:' + props.author.email}>{props.author.email}</a></p>
          </div>
        </div>
        <div className='col'>
          <div className='author-panel'>
            <p><strong>Interests</strong></p>
            <ul>
              {interests}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Author;
