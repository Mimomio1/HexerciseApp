import React, {useState} from 'react';
import { StyleSheet, Text, Textinput, TouchableOpacity, ScrollView, View, Image, Button} from 'react-native';
import styles from './styles'

const Activity = ({navigation}) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View style={styles.container}>
        <Text style={styles.workhistory}>Workout Activity History</Text>
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
      <View style={{flexDirection:"row", marginBottom:30}}>
        <View styles ={{flexDirection:"column"}}>
          <Text>Monday - February 14</Text>
          <Text>From 6:00 am to 7:00 am</Text>
        </View>
        <TouchableOpacity style={styles.profilebtn} 
            onPress={() => navigation.navigate('Goal')}>
          <Text style={styles.Text1}>View</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row", marginBottom:30}}>
        <View styles ={{flexDirection:"column"}}>
          <Text>Monday - February 22</Text>
          <Text>From 6:00 am to 7:00 am</Text>
        </View>
        <TouchableOpacity style={styles.profilebtn} 
          onPress={() => navigation.navigate('Goal')}>
          <Text style={styles.Text1}>View</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row", marginBottom:30}}>
        <View styles ={{flexDirection:"column"}}>
          <Text>Monday - March 14</Text>
          <Text>From 6:00 am to 7:00 am</Text>
        </View>
        <TouchableOpacity style={styles.profilebtn} 
          onPress={() => navigation.navigate('Goal')}>
          <Text style={styles.Text1}>View</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row", marginBottom:30}}>
        <View styles ={{flexDirection:"column"}}>
          <Text>Monday - March 24</Text>
          <Text>From 6:00 am to 7:00 am</Text>
        </View>
        <TouchableOpacity style={styles.profilebtn} 
          onPress={() => navigation.navigate('Goal')}>
          <Text style={styles.Text1}>View</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row", marginBottom:30}}>
        <View styles ={{flexDirection:"column"}}>
          <Text>Monday - April 10</Text>
          <Text>From 6:00 am to 7:00 am</Text>
        </View>
        <TouchableOpacity style={styles.profilebtn} 
          onPress={() => navigation.navigate('Goal')}>
          <Text style={styles.Text1}>View</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row", marginBottom:80}}>
        <View styles ={{flexDirection:"column"}}>
          <Text>Monday - April 16</Text>
          <Text>From 6:00 am to 7:00 am</Text>
        </View>
        <TouchableOpacity style={styles.profilebtn} 
          onPress={() => navigation.navigate('Goal')}>
          <Text style={styles.Text1}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Activity;