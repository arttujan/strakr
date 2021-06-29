import { Platform } from 'react-native';    
import { 
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { combineReducers } from "redux";
import CryptoReducer from './Reducers';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk,promise)

const rootReducer = combineReducers({
    crypto:CryptoReducer
})

const Store = createStore(
    rootReducer,middleware
)


export default Store