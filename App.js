import { View, Button,TextInput,FlatList } from 'react-native';
import styles from './styles/styles';
import {useState} from 'react'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals,setGoals] = useState([])
  const [modalIsVisible,setModalIsVisible] = useState(false)
  function addGoalHandler(enteredValue){
    setGoals((prevValue)=>{
      return [...prevValue,{item:enteredValue, id:Math.random().toString()}]
    })
    endModalVisibility()
  }
  function deleteGoals(id){
    setGoals(currentGoals=>{
      return currentGoals.filter(goal=>goal.id !== id)
    })
  }
  function endModalVisibility(){
    setModalIsVisible(false)
  }
  function setModalVisibility(){
    setModalIsVisible(true)
  }
  return (
    <>
    <StatusBar style='light'/>
   <View style={styles.appContainer}>
<Button title='Add New Goal' color='#bc6375' onPress={setModalVisibility}/>
<GoalInput showModal={modalIsVisible} closeModal={endModalVisibility}  addGoalHandler={addGoalHandler}/>
    <View style={styles.goalsContainer}>
    <FlatList data={goals}  renderItem={(goal)=>{
        return(
        <GoalItem data={goal.item.item} id={goal.item.id} onDeleteItem={deleteGoals} />
        )
    }} keyExtractor={(items,index)=>{
      return index;
    }}/>
    </View>
   </View>
   </>
  );
}


