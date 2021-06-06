import React, { useState, useEffect, useReducer } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import * as Helper from '../utils/Helper';
import { restoreTokenAction } from '../actions/AuthAction';
import SplashScreen from '../screens/splash/SplashScreen';

interface NavigatorProps {
    props: any
}

interface NavigatorState {

}

class Navigator extends React.Component<NavigatorProps, NavigatorState> {
    props: any;
    constructor(props: any) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = async () => {
        let token = await Helper.getToken();
        if (token != '' && token != null) {
            this.props.restoreToken(true);
        } else {
            this.props.restoreToken(false);
        }
    }

    render() {
        const { isSignedIn, loading } = this.props;
        if (loading) {
            return <SplashScreen />
        }
        return (
            <NavigationContainer>
                {
                    isSignedIn
                        ?
                        <AppNavigator />
                        :
                        <AuthNavigator />
                }
            </NavigationContainer>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        loading: state.auth.loading
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        restoreToken: (isSignedIn: boolean) => dispatch(restoreTokenAction(isSignedIn))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);