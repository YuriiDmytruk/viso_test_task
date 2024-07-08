import { createStore, Store } from 'redux';

import { markersReducer } from './ducks/markers';
import { MarkerStateType } from '../../types';

export const store: Store<MarkerStateType> = createStore(
  markersReducer
);