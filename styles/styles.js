import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    appContainer:{
      paddingTop:50,
      paddingHorizontal:10,
      flex:1
    },
    inputContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:16,
      borderBottomColor:'#ccc',
      backgroundColor:'#bc6356',
    },
    textInput:{
      borderWidth:1,
      borderColor:"#efd0ff",
      borderRadius:6,
      backgroundColor:"#bc6367",
      color:'#fff',
      width:'100%',
      padding:12
    },
    buttonContainer:{
    flexDirection:'row',
    marginTop:16
    },
    button:{
width:100,
marginHorizontal:8
    },
    image:{
    width:100,
    height:100,
    margin:20
    },
    goalsContainer:{
      flex:3
    },
    goalItem:{
      margin:8,
      borderRadius:6,
      backgroundColor:"#5e0acc"
    },
    pressedItem:{
     opacity:0.5
    },
    goalText:{
      color:'#fff',
      padding:8,
    }
  
  })
