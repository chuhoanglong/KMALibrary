import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import HeaderScreen from '../common/Header';

interface AccountState {

}
interface AccountProps {
    signOut: () => void
}

class AccountScreen extends Component<AccountState, AccountProps> {
    props: any;
    constructor(props: any) {
        super(props);
    }

    render() {
        const { signOut } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* <HeaderScreen /> */}
                {/* <Text>AccountScreen</Text> */}
                <TouchableOpacity onPress={() => {
                    signOut();
                }}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AccountScreen;