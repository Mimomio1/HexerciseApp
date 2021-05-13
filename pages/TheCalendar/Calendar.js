import * as React from 'react';
import { StyleSheet, Text, Textinput, ScrollView, View, Image, TouchableOpacity, TextInput, ProgressViewIOSComponent, BackHandler } from 'react-native';
import styles from './styles'

const Calendar = ({navigation}) => {
  // const [text, onChangeText] = React.useState("Username");
  return (
    <View style={styles.container}>
       <Text style={{color:"#707070", fontSize:25}}>Workout Schedule Calendar</Text>
       <Image style={styles.runningMan} source={require('../../images/runningman.png')}/>
       <Text style={styles.DateText}>Date: March 18 2021</Text>
       <TouchableOpacity style={styles.editpicbtn} 
            onPress={() => navigation.navigate('Schedule')}>
            <Text style={styles.Text1}>Edit Schedule</Text>
       </TouchableOpacity>
    </View>
  );
}

export default Calendar;