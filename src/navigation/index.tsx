import React, { useState, useEffect, useReducer } from 'react';
import { } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { isSignedIn } = this.props;
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

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, null)(Navigator);