import * as React from 'react';
import { StyleSheet, Text, Textinput, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles'

const Setting = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.Text1}>Settings</Text>
        <Text style={styles.Text2}>Notifications</Text>
        <Text style={styles.Text3}>Enabled</Text>
        <Text style={styles.Text2}>Goals</Text>
        <Text style={styles.Text3}>Enabled</Text>
        <Text style={styles.Text2}>Activity Alerts</Text>
        <Text style={styles.Text3}>Disabled</Text>
        <Text style={styles.Text2}>Workout Analysis</Text>
        <Text style={styles.Text3}>Enabled</Text>
        <Text style={styles.Text2}>Behaviour Track</Text>
        <Text style={styles.Text3}>Enabled</Text>
        <Text style={styles.Text2}>Sounds And Beeps</Text>
        <Text style={styles.Text3}>Enabled</Text>
        <Text style={styles.Text2}>About this app</Text>
        <Text style={styles.Text3}>Enabled</Text>
    </View>
  );
}

export default Setting;