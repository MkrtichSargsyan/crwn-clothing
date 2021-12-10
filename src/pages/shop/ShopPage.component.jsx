import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component';
import CollectionPage from '../collection/Collection.component';

function ShopPage({ match }) {
  return (
    <div className={'shop-page'}>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
} 

export default ShopPage;
