// import createStore from redux
import { createStore } from 'redux';
// import our reducer
import reducer from './reducer';

// create store
export default createStore(reducer);