import React, { Component } from 'react';
import { Alert,View, Button, Text, TextInput, StyleSheet,Action } from 'react-native';
import Api from "../../Api.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80,
  },
  input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width:300,
      borderRadius:20,
      marginTop:20,
      paddingLeft: 20,
  }
});


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    console.log(this.state.email); // carine
    Api.logIn(
      {
        email: this.state.email,
        password: this.state.password
      },
      res => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          Api.setUser(res);
          
        }
      }
    );

  };


  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            editable = {true}
            maxLength = {40}
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry={true}
            type="password"
            style={styles.input}
            placeholder="Mot de Passe"
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
             />
          <Button
             onPress={this.onButtonPress}
             title="Login"
             color="#841584"
             accessibilityLabel="Learn more about purple"
       />
        </View>
      </View>

    );
  }
}

export default Login;
