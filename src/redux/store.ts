import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { markersReducer } from './ducks/markers';
import { MarkerStateType } from '../../types';

export const store: Store<MarkerStateType> = createStore(
  markersReducer,
  composeWithDevTools()
);