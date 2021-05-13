// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import 'react-native-gesture-handler';
import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/StartingPage/Home';
import Login from './pages/SignIn/Login';
import Register from './pages/SignUp/Register';
import Profile from './pages/YourProfile/Profile';
import Workout from './pages/Workouts/Workout';
import Activity from './pages/Activities/Activity';
import Schedule from './pages/YourSchedule/Schedule'
import EditProfile from './pages/ProfileEdit/EditProfile'
import Goal from './pages/YourGoals/Goal'
import Calendar from './pages/TheCalendar/Calendar'
import Contact from './pages/ContactUs/Contact'
import ExerciseTips from './pages/Exercise/ExerciseTips'
import Trainer from './pages/TheTrainer/Trainer'
import Setting from './pages/TheSetting/Setting'

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Register" component={Register} />
       <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile', //Set Header Title
            headerLeft: () => (
              <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
              backgroundColor: '#5AFAA7', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        /> 
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Goal" component={Goal} />
      <Stack.Screen name="Calendar" component={Calendar} />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Workout"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#5AFAA7', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Workout"
        component={Workout}
        options={{
          title: 'Workout', //Set Header Title
        }}
      />
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={{
          title: 'Activity', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function thirdScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Activity"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#5AFAA7', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={{
          title: 'Activity', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function fourthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Schedule"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#5AFAA7', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Schedule"
        component={Schedule}
        options={{
          title: 'Schedule', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function fifthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Contact"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#5AFAA7', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Contact Us"
        component={Contact}
        options={{
          title: 'Contact Us', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}


function SixthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Excercise Tips"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#5AFAA7', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ExcerciseTips"
        component={ExerciseTips}
        options={{
          title: 'ExerciseTips', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}
function SeventhScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Trainer"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#5AFAA7', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Trainer"
        component={Trainer}
        options={{
          title: 'Trainer', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}
function EigthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#5AFAA7', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: 'Setting', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Profile"
          options={{ drawerLabel: 'Profile' }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="Workout"
          options={{ drawerLabel: 'Workout' }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="Activity"
          options={{ drawerLabel: 'Activity' }}
          component={thirdScreenStack}
        />  
        <Drawer.Screen
          name="Schedule"
          options={{ drawerLabel: 'Schedule' }}
          component={fourthScreenStack}
        />  
        <Drawer.Screen
          name="Contact Us"
          options={{ drawerLabel: 'Contact Us' }}
          component={fifthScreenStack}
        />  
        <Drawer.Screen
          name="ExerciseTips"
          options={{ drawerLabel: 'Excercise Tips' }}
          component={SixthScreenStack}
        />  
          <Drawer.Screen
          name="Trainer"
          options={{ drawerLabel: 'Request A Trainer' }}
          component={SeventhScreenStack}
        />  
             <Drawer.Screen
          name="Setting"
          options={{ drawerLabel: 'Setting' }}
          component={EigthScreenStack}
        />  
        <Drawer.Screen
          name="Sign Out"
          options={{ drawerLabel: 'Sign Out' }}
          component={Home}
        />  
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
