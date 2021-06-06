import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { Provider } from 'react-redux';
import RootNavigator from './navigation';
import store from './store';
import rootSaga from './sagas';
import sagaMiddleware from './middleware/sagaMiddleware';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
    componentDidMount() {
        if (Text.defaultProps == null) Text.defaultProps = {};
        Text.defaultProps.allowFontScaling = false;
        if (TextInput.defaultProps == null) TextInput.defaultProps = {};
        TextInput.defaultProps.allowFontScaling = false;
        SplashScreen.hide();
    }

    render() {
        return (
            <Provider store={store}>
                <RootNavigator />
            </Provider>
        );
    }
}

sagaMiddleware.run(rootSaga);
