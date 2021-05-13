import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0ffef',
      alignItems: 'center',
      justifyContent: 'center',
    },
    strengthexercise: {
      paddingLeft:20,
      paddingRight:20, 
      marginBottom: 50,
    },
    LineImg: {
      width:400, 
      height:2, 
      marginBottom:40, 
      zIndex: -1, 
      position:"absolute", 
      top:273,
    },
    Workout1: {
      backgroundColor:"#F6EFEF", 
      marginBottom: 20, 
      padding: 20,
    },
    Workout2: {
      backgroundColor:"#F6EFEF", 
      marginBottom: 20, 
      padding: 20,
    },  
    Workout3: {
      backgroundColor:"#F6EFEF", 
      padding: 20,
    },  
  });

export default styles;