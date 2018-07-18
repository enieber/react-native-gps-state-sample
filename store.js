import { createStore, compose } from 'redux';
import { combineReducers } from 'redux';

import { reducer } from './car/duck';

const rootReducer = combineReducers({
  car: reducer,
});

export default function configureStore() {
  const enhacer = compose(
    global.reduxNativeDevTools ? global.reduxNativeDevTools() : noop => noop,
  );

  const store = createStore(rootReducer, {}, enhacer);

  if (global.reduxNativeDevTools) {
    global.reduxNativeDevTools.updateStore(store);
  }

  return store;
}
