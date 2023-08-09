import styles from "../styles/styles"
import {View,Text,Pressable} from 'react-native'

function GoalItem(props){
    return(
        <View style={styles.goalItem}>
        <Pressable android_ripple={{color:'#dddddd'}} style={({pressed})=>{
        return pressed && styles.pressedItem
        }} onPress={props.onDeleteItem.bind(this,props.id)}>
        <Text style={styles.goalText}>{props.data}</Text>
        </Pressable>
        </View>
    )
}
export default GoalItem