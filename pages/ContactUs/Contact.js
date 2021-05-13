import * as React from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles'

const Contact = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:25, color:"#707070", marginBottom:50}}>Contact Us</Text>
        <View style={styles.DirectContact}>  
          <Text style={{marginBottom:20}}> Direct Phone Number: 404-510-4060</Text>
          <Text style={{marginBottom:20}}> Email: marcusimomio@gmail.com</Text>
          <View style={styles.ImageContainer}>
            <Image style={{height:50, width:50, marginBottom:40}} source={require('../../images/Instagram.png')} />
            <Image style={{height:50, width:50, marginBottom:40, paddingLeft:10, paddingRight:10}} source={require('../../images/Twitter.png')} />
            <Image style={{height:50, width:50, marginBottom:40}} source={require('../../images/Facebook.png')} />
          </View>
        </View>
        <TouchableOpacity style={styles.submitbutton} 
            onPress={() => navigation.navigate('Submit')}>
            <Text style={styles.Text2}>Submit</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Contact;