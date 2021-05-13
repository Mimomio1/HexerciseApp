import * as React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, TextInput, ProgressViewIOSComponent, BackHandler } from 'react-native';
import styles from './styles'

const Register = ({navigation}) => {
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
          placeholder="Confirm Password"
        />
        <TouchableOpacity style={styles.button1} 
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.Text1}>Sign Up</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Register;