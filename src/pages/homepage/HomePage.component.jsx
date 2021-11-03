import React from 'react';
import './homepage.styles.scss';
import { Directory } from '../../components/directory/Directory.component';

function HomePage(props) {
  return (
    <div className="homepage">
      <Directory data={props}/>
    </div>
  );
}

export default HomePage;
