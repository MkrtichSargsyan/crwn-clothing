import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../../components/preview-collection/PreviewCollection.component';

import { selectCollections } from '../../redux/shop/shop.selectors.js';

function ShopPage({ collections }) {
  return (
    <div className={'shop-page'}>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
