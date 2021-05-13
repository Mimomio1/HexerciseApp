import * as React from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, Image, TouchableOpacity, ProgressViewIOSComponent, BackHandler } from 'react-native';
import styles from './styles'

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.hexercisetitle} source={require('../../images/HexerciseTTLE.png')} />
        <Image style={styles.stickmanimg} source={require('../../images/stickmanexercise.jpg')}/>
        <TextInput
          style={{
            height: 40,
            borderColor: '#EEEEEE',
            backgroundColor: '#EEEEEE',
            borderWidth: 10,
            paddingLeft: 45,
            paddingRight: 45,
            borderRadius: 30,
            marginBottom: 15
          }}
          placeholder="Username"
        />
         <TextInput
          style={{
            height: 40,
            borderColor: '#EEEEEE',
            backgroundColor: '#EEEEEE',
            borderWidth: 10,
            paddingLeft: 45,
            paddingRight: 45,
            borderRadius: 30,
            marginBottom: 15
          }}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.button1} 
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.Text1}>Log In</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Login;