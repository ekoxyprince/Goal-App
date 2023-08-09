import {View,TextInput,Button,Modal,Image} from 'react-native'
import styles from '../styles/styles'
import {useState} from 'react'

function GoalInput(props){
    const [input,setInput] = useState('')
  function goalInputHandler(enteredValue){
    setInput(enteredValue)
  } 
  function addGoalHandler(){
    props.addGoalHandler(input)
    setInput('')
  }
    return(
      <Modal animationType='slide' visible={props.showModal}>
        <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput onChangeText={goalInputHandler} value={input} style={styles.textInput} placeholder='Your Course Goals'/>
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button color='#f31252' title='cancel' onPress={props.closeModal}/>
        </View>
        <View style={styles.button}>
        <Button color='#bc6375' title='Add Goal' onPress={addGoalHandler}/>
        </View>
        </View>
       </View>
       </Modal>
    )
}

export default GoalInput