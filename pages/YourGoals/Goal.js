import React, {useState} from 'react';
import { StyleSheet, Text, Textinput, TouchableOpacity, ScrollView, View, Image, Button} from 'react-native';
import styles from './styles'

const Goal = ({navigation}) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, marginBottom: 20}}>Workout Goal Achieved</Text>
      <Text style={{fontSize:20, color:"#5AFAA7"}}>80% Completed</Text>
      <Text style={{marginBottom: 50}}>Weekly Workout</Text>
      <View style={{flexDirection:"row"}}>
        <Text>Cardio Exercises</Text>
        <Text style={styles.strengthexercise}>Strength Exercises</Text>
        <Text>Stretching</Text>
      </View>
      <Text style={{marginBottom:20}}>20th Mar, Friday</Text>
      <Image style={styles.LineImg} source={require('../../images/Line.png')} />
      <View style={styles.Workout1}>
        <Text>Gym workout</Text>
        <Text>Exercise</Text>
        <Text>2 hours</Text>
      </View>
      <View style={styles.Workout2}>
        <Text>Morning workout</Text>
        <Text>Exercise</Text>
        <Text>1 hours</Text>
      </View>
      <View style={styles.Workout3}>
        <Text>Outside workout</Text>
        <Text>Exercise</Text>
        <Text>1 hour</Text>
      </View>
    </View>
  );
}

export default Goal;