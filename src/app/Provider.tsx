import React from 'react';
import store from 'store';
import {StoreProvider} from 'easy-peasy';

export default ({children}) => {
  return <StoreProvider store={store}>{children}</StoreProvider>;
};
