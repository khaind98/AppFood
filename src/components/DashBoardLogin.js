import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard
} from 'react-native';
import Button from 'react-native-button';

export default class DashBoardLogin extends Component {

  render() {
    return (
      <View style={style.view}>
        <View style={{
          flex: 1
        }}>
          <Text style={style.text}>
            Welcome Black
          </Text>
          <View style={style.viewInput}>
            <Text style={{
              marginBottom: 1,
              marginLeft: 12,
              color: '#aaaaaf',
            }}>Email</Text>
            <TextInput
              style={style.textInput}
              keyboardType='email-address'
              placeholder='PassWord'
              returnKeyType='done'
              onSubmitEditing={Keyboard.dismiss}
            />
            <Text style={{
              marginBottom: 1,
              marginLeft: 12,
              color: '#aaaaaf',
            }}>Password</Text>
            <TextInput
              style={style.textInput}
              keyboardType='email-address'
              placeholder='PassWord'
              returnKeyType='done'
              onSubmitEditing={Keyboard.dismiss}
            />
            <Button style={style.forgotPass}>Forgot PassWord ?</Button>
          </View>
          <View style={{flex: 1}}>
            <View style={{flex: 80}}>
              <Button
                containerStyle={style.button}
                style={{
                  color: '#ffffff',
                  paddingTop: 2,
                }}
              >
                Login
              </Button>
              <Text style={{
                fontSize: 14,
                textAlign: 'center',
                marginTop: 5,
                marginBottom: 5,
              }}>OR</Text>
              <Button
                onPress={() => this.props.navigation.navigate('DashBoardScreen')}
                style={{
                  fontSize: 14,
                  marginTop: 5,
                  marginBottom: 5,
                }}> NextDashBoard </Button>
            </View>
            <View style={{flex: 20}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={style.textSignup}> Don't Have Account? </Text>
                <Button
                  containerStyle={{flex: 50}}
                  style={{paddingRight: 90, fontSize: 14}}
                >Signup</Button>
              </View>
            </View>
          </View>

        </View>
      </View>
    )
  }
}


const style = StyleSheet.create(
  {
    view: {
      flex: 1,
    },
    button: {
      width: 255,
      height: 40,
      marginTop: 20,
      marginRight: 60,
      marginLeft: 60,
      marginBottom: 20,
      borderRadius: 4,
      backgroundColor: '#00BFFF',
      justifyContent: 'center',
    },
    text: {
      marginTop: 90,
      fontSize: 25,
      marginLeft: 15,
      marginBottom: 15,
      marginRight: 15,
      fontWeight: 'bold',
      color: '#333335',
    },
    textInput: {
      flex: 1,
      flexDirection: 'row',
      height: 40,
      marginTop: 12.5,
      marginLeft: 13,
      marginRight: 13,
      marginBottom: 12.5,
      padding: 5,
      width: 300,
      borderColor: 'gray',
      borderBottomWidth: 0.4,
    },
    viewInput: {
      height: 200,
      marginTop: 30,
      marginLeft: 20,
      marginBottom: 30,
      marginRight: 30,
    },
    forgotPass: {
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 190,
      fontSize: 12,
    },
    textSignup: {
      marginLeft: 90,
      fontSize: 14,
      flex: 50,
    }
  }
);