import * as React from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles'

const Trainer = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.trainertxt}>Request A Trainer</Text>
    </View>
  );
}

export default Trainer;