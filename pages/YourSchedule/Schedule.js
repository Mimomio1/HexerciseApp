import * as React from 'react';
import { StyleSheet, Navbar, Text, TextInput, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles'

const Schedule = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:25, color:"#707070", marginRight:160, marginBottom:15, marginTop:15}}>Workout Schedule</Text>
        <View style={styles.wdayscontainer}>
          <Text style={{paddingRight:20, fontWeight:"bold"}}>
            Sun
          </Text>
          <Text style={{paddingRight:20, fontWeight:"bold"}}>
            Mon
          </Text>
          <Text style={{paddingRight:20, fontWeight:"bold"}}>
            Tue
          </Text>
          <Text style={{paddingRight:20, fontWeight:"bold"}}>
            Wed
          </Text>
          <Text style={{paddingRight:20, fontWeight:"bold"}}>
            Thur
          </Text>
          <Text style={{fontWeight:"bold"}}>
            Fri
          </Text>
        </View>
          <TextInput
            style={styles.mytextinput}
            placeholder="Enter Title Here"
          />
        <View style={styles.TheContainer}>
          <Text style={{fontSize: 20}}>Monday</Text>
          <Text>Strength Exercises</Text>
          <Text>Outdoor Running</Text>
          <Text>Ab Exercises</Text>
        </View>
        <ScrollView> 
         <View style={{flexDirection:"row"}}>
          <Image style={styles.CheckImg} source={require('../../images/check.png')}/>
          <View style={{flexDirection:"column"}}>
            <Text>Outdoor Running</Text>
            <Text>From 6:00 am to 7:00 am</Text>
          </View>
          <TouchableOpacity style={styles.editpicbtn} 
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.Text1}>Add</Text>
          </TouchableOpacity>
         </View>
         <View style={{flexDirection:"row"}}>
          <Image style={styles.CheckImg} source={require('../../images/check.png')}/>
          <View style={{flexDirection:"column"}}>
            <Text>Strength Exercises</Text>
            <Text>From 6:00 am to 7:00 am</Text>
          </View>  
          <TouchableOpacity style={styles.editpicbtn} 
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.Text1}>Add</Text>
          </TouchableOpacity>
         </View>
         <View style={{flexDirection:"row"}}>
          <Image style={styles.CheckImg} source={require('../../images/check.png')}/>
          <View>  
            <Text>Stretching</Text>
            <Text>From 6:00 am to 7:00 am</Text>
          </View>
          <TouchableOpacity style={styles.editpicbtn} 
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.Text1}>Add</Text>
          </TouchableOpacity>
         </View>
        </ScrollView>
        <TouchableOpacity style={styles.schedulebtn} 
          onPress={() => navigation.navigate('Calendar')}>
          <Text style={styles.Text1}>Create Schedule</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Schedule;