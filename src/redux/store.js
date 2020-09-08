import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import clients from './reducers/clients-reducer';

const rootReducer = combineReducers({
  clients,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
