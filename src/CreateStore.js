import {createStore,applyMiddleware} from 'redux';
import RootReducer from './Reducers';
import ReduxThunk from 'redux-thunk';


export const middlewares = [ReduxThunk];
export const createStoreMiddleware = applyMiddleware(...middlewares)(createStore); 

export const store = createStoreMiddleware(RootReducer); 