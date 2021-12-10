import React from 'react';
import Directory from '../../components/directory/Directory.component';
import './homepage.styles.scss';

function HomePage(props) {
  return (
    <div className="homepage">
      <Directory data={props} />
    </div>
  );
}

export default HomePage;
