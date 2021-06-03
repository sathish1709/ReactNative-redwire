import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import React from 'react';
import App from './src/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './src/store/reducers';
import {DarkTheme,Provider as PaperProvider} from 'react-native-paper';
import Toast from 'react-native-toast-message';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = createStore(reducers, composeEnhancers(applyMiddleware(promiseMiddleware)))

const reduxApp = () =>{
    <Provider store={createStoreWithMiddleware}>
        <PaperProvider theme ={DarkTheme}>
             <App/>
             <Toast ref ={(ref)=> Toast.setRef(ref)}/>  
        </PaperProvider>
    </Provider>
}


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

//registerRootComponent(reduxApp);

AppRegistry.registerComponent(appName, () => reduxApp);

