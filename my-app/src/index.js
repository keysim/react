import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';


let store = createStore(allReducers);

function displayStore(data) {
    console.log(store.getState());
}

store.subscribe(displayStore);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

