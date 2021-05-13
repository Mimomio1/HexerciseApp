import * as React from 'react';
import { StyleSheet, Text, Textinput, ScrollView, View, Image, TouchableOpacity, TextInput, ProgressViewIOSComponent, BackHandler } from 'react-native';
import styles from './styles'

const Workout = ({navigation}) => {
  // const [text, onChangeText] = React.useState("Username");
  return (
    <View style={styles.container}>
        <Text style={styles.WorkoutTxt}>Workout</Text>
    </View>
  );
}

export default Workout;