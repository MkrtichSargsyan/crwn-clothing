import React, { Component } from 'react';
import PreviewCollection from '../../components/preview-collection/PreviewCollection.component';

import SHOP_DATA from './shop.data';

export class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div className={'shop-page'}>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
