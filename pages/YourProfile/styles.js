import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0ffef',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    Text2: {
        fontWeight: 'bold',
    },
    grouptextnbtn: {
        marginTop: 20
    },
    profilecon: {
        flexDirection: "row",
        marginBottom: 10
    },
    profilepar: {
      textAlign: "justify", 
      marginBottom: 20, 
      width: 300,
    },
    partext: {
        color: 'gray'
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 15,
    },
    row2: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    trophyimg: {
        marginBottom:45, 
        width:25, 
        height: 25
    },
    rocketimg: {
        marginBottom:45, 
        width:25,
        height: 25,
    },
    fireimg: {
        marginBottom:45, 
        width:20, 
        height: 25,
    },
    settingimg: {
        marginBottom:45, 
        width:25, 
        height: 25,
    },
    profilebtn: {
        alignItems: "center",
        backgroundColor: "#5AFAA7",
        padding: 10,
        marginTop: 10,
        borderRadius: 30,
        marginBottom: 5,
        width: 120,
    },
    row1btn: {
        alignItems: "center",
        backgroundColor: "#F6EFEF",
        padding: 30,
        width: 172,
        marginRight: 15,
    },
    row2btn: {
        alignItems: "center",
        backgroundColor: "#F6EFEF",
        width: 172,
        padding: 30,
    },
});

export default styles;