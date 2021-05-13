import * as React from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles'

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.ProfileText}>Edit Profile</Text>
        <Image style={{width:60, height: 60}} source={require('../../images/aprofilepic.jpg')}/>
        <TouchableOpacity style={styles.editpicbtn} 
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.Text1}>Edit Picture</Text>
        </TouchableOpacity>
        <TextInput
          style={{
            height: 40,
            borderColor: '#EEEEEE',
            backgroundColor: '#EEEEEE',
            borderWidth: 10,
            paddingLeft: 45,
            paddingRight: 45,
            borderRadius: 30,
            marginBottom: 20,
          }}
          placeholder="Full name" 
        >
        </TextInput>
        <TextInput
          style={{
            height: 40,
            borderColor: '#EEEEEE',
            backgroundColor: '#EEEEEE',
            borderWidth: 10,
            paddingLeft: 45,
            paddingRight: 45,
            borderRadius: 30,
            marginBottom: 20,
          }}
          placeholder="Email"
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
            marginBottom: 20,
          }}
          placeholder="Phone Number"
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
            marginBottom: 20,
          }}
          placeholder="mm/dd/yyyy"
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
            marginBottom: 20,
          }}
          placeholder="Gender"
        />
        <TouchableOpacity style={styles.button1} 
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.Text1}>Save changes</Text>
        </TouchableOpacity>
    </View>
  );
}

export default EditProfile;