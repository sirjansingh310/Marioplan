import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import firebaseConfig from './config/firebaseConfig'

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig, {useFirestoreForProfile: true, userProfile: 'users',attachAuthIsReady: true})
    ) // store enhancers
    );

store.firebaseAuthIsReady.then(()=> {
    ReactDOM.render(<Provider store = {store} ><App /></Provider>, document.getElementById('root'));
})