import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Text1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
      },
      container: {
        flex: 1,
        backgroundColor: '#e0ffef',
        alignItems: 'center',
        justifyContent: 'center',
      },
      profilebtn: {
        alignItems: "center",
        backgroundColor: "#5AFAA7",
        padding: 5,
        marginTop: 10,
        marginLeft: 25,
        borderRadius: 30,
        marginBottom: 5,
        width: 120,
      },
      title: {
        fontSize: 50,
        fontWeight: 'bold',
        borderWidth:10,
      },
      workhistory: {
        fontSize:25, 
        marginBottom: 20, 
        color:"#707070",
      },
      wdayscontainer: {
        marginBottom: 30,
        backgroundColor:"#F6EFEF",
        padding: 20,
        flexDirection: "row" 
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },
});

export default styles;