import * as React from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import styles from "./styles"

const ExerciseTips = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.ExerciseTitle}>Excercise Tips</Text>
        <Text style={styles.Exercisepara}>Below Are Various Exercises You Can 
         Implement In Your Daily Exercises:</Text>
        <View style={styles.VariousExercise}>
          <Text style={styles.StrengthExercise}>Strength Exercises</Text>
          <Text style={styles.CardioExercise}>Cardio Exercises</Text>
          <Text style={styles.AbExercise}>Ab Exercises</Text>
          <Text style={styles.StretchExercise}>Stretching</Text>
        </View>
    </View>
  );
}

export default ExerciseTips;