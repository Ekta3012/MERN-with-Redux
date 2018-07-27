import {createStore, applyMiddleware} from 'redux';  
import { addDataToView } from "./reducers";
import thunk from 'redux-thunk';

export default function configureStore() {  
  return createStore(
    addDataToView,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}