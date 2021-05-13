// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, Textinput, ScrollView, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { block } from 'react-native-reanimated';
import styles from './styles';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
          <Image
            source={{
              uri:
                'sidemenu.png',
            }}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
        <View style ={styles.profilecon}>
              <View style={styles.groupimgntitle}>
                <Text style={{fontSize:25, color: '#888888'}}>User Profile</Text>
                <Image style={{marginBottom:10, width:85, height: 100, marginRight: 20}} source={require('../../images/gokublack.png')}/>
              </View>
              <View style={styles.grouptextnbtn}>
                <TouchableOpacity style={styles.profilebtn} 
                  onPress={() => navigation.navigate('EditProfile')}>
                  <Text style={styles.Text1}>Edit Profile</Text>
                </TouchableOpacity>
                <Text style={{fontSize:15}}>Marcus Imomio</Text>
                <Text>Trainer</Text>
                <Text>marcusimomio@gmail.com</Text>
              </View>  
        </View>
        <Text style={styles.profilepar}>Hexercise is a state of health and well-being and, 
        more specifically, the ability to perform aspects of sports, 
        occupations and daily activities.</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.row1btn} 
            onPress={() => navigation.navigate('Workout')}>
            <Image style={styles.trophyimg} source={require('../../images/trophy.png')}/>
            <Text style={styles.Text2}>Workout</Text>
            <Text style={styles.partext}>67% Achieved</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row2btn} 
            onPress={() => navigation.navigate('Activity')}>
            <Image style={styles.rocketimg} source={require('../../images/rocket.png')}/>
            <Text style={styles.Text2}>Activity</Text>
            <Text style={styles.partext}>8000 Steps</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity style={styles.row1btn} 
            onPress={() => navigation.navigate('Schedule')}>
            <Image style={styles.fireimg} source={require('../../images/fire.png')}/>
            <Text style={styles.Text2}>Schedule</Text>
            <Text style={styles.partext}>78% Complete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row2btn} 
            onPress={() => navigation.navigate('Setting')}>
            <Image style={styles.settingimg} source={require('../../images/setting.png')}/>
            <Text style={styles.Text2}>Setting</Text>
            <Text style={styles.partext}>100% Complete</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

export default Profile;
