import React from 'react';

import './collection.styles.scss';

function CollectionPage({ match }) {
  console.log('dddddddddd');
  console.log(match.params.collectionId);
  return (
    <div className="collection-page">
      <h2>Collection page</h2>
    </div>
  );
}

export default CollectionPage;
