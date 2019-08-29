/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Auth0 from 'react-native-auth0';

const credentials = require('./auth0.config');
const auth0 = new Auth0(credentials);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { accessToken: null };
    }

    _onLogin = () => {
        auth0.webAuth
            .authorize({
                scope: 'openid profile',
                audience: 'https://' + credentials.domain + '/userinfo'
            })
            .then(credentials => {
                Alert.alert(
                    'Success',
                    'AccessToken: ' + credentials.accessToken, [{
                        text: 'OK',
                        onPress: () => console.log('OK Pressed')
                    }], { cancelable: false }
                );
                this.setState({ accessToken: credentials.accessToken });
            })
            .catch(error => console.log(error));
    };

    _onLogout = () => {
        auth0.webAuth
            .clearSession({})
            .then(success => {
                Alert.alert(
                    'Logged out!'
                );
                this.setState({ accessToken: null });
            })
            .catch(error => {
                console.log("Log out cancelled");
            });
    };

    render() {
        let loggedIn = this.state.accessToken === null ? false : true;
        return ( 
        <View style = { styles.container }>
            <Text style = { styles.header }> Auth0Sample - Login </Text>    
            <Text>
                You are { loggedIn ? '' : 'not ' } logged in . </Text>    
                <Button onPress = { loggedIn ? this._onLogout : this._onLogin }
                title = { loggedIn ? 'Log Out' : 'Log In' }/>   
        </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default App;
