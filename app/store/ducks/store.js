import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './counter';

export default createStore(reducer, applyMiddleware(thunk));
