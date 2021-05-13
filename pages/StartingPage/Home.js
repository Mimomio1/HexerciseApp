import * as React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, TextInput, ProgressViewIOSComponent, BackHandler } from 'react-native';
import styles from './styles'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Image style={styles.hexercisetitle} source={require('../../images/HexerciseTTLE.png')} />
        <Image style={styles.stickmanimg} source={require('../../images/stickmanexercise.jpg')}/>
        <TouchableOpacity style={styles.button1} 
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.Text1}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} 
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.Text2}>Register</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Home;