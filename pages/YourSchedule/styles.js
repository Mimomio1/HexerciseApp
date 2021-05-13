import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0ffef',
        alignItems: 'center',
        justifyContent: 'center',
      },
      TheContainer: {
        backgroundColor: "#F6EFEF",
        marginBottom: 40,
        padding: 40
      },
      CheckImg: {
        marginBottom:45, 
        width:20, 
        height: 20, 
        marginRight: 20,
      },
      wdayscontainer: {
        backgroundColor:"#F6EFEF",
        padding: 20,
        flexDirection: "row" 
      },
      editpicbtn: {
        alignItems: "center",
        backgroundColor: "#5AFAA7",
        marginTop: 10,
        borderRadius: 30,
        marginLeft: 15,
        width: 60,
        height: 20
      },
      schedulebtn: {
        alignItems: "center",
        backgroundColor: "#5AFAA7",
        paddingBottom: 18,
        paddingTop: 18,
        paddingLeft: 100,
        paddingRight: 100,
        padding: 20,
        borderRadius: 30,
        marginBottom: 30
      },
      mytextinput: {
        height: 35,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        borderWidth: 10,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 30,
        margin: 10,
        textAlign: "center",
      },
      inputss: {
        height: 40,
        margin: 52,
        borderWidth: 1,
        paddingLeft: 50,
        paddingRight: 50,
      },
      title: {
        fontSize: 50,
        fontWeight: 'bold',
        borderWidth:10,
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },
      Text1: {
        color: 'white',
        fontWeight: 'bold'
      },
});

export default styles;