import React, { Component } from "react";
import { 
  View, 
  Text,
  FlatList,
  TextInput,
  TouchableOpacity, 
  Button,
} from "react-native";

//Import Styles
import styles from './styles';


class Input extends Component {
  
  state = {
    textinput: '',
    party: ['User']
  }

  onChangeInput = event => {
    this.setState({
        textinput: event
    })
  }

  onAddMember = () => {
    this.setState(prevstate => {
      return{
        //Set field back to empty
        textinput:'',
        //update state's list with new entry
        party:[...prevstate.party,prevstate.textinput]
      }
        
    })
  }

  render() {
    return (
      <View style={styles.inputWrapper}>
        
        {
          this.state.party.map( item => (
            <Text style={styles.members} key={item}>{item}</Text>
          ))
        }
        
        <TextInput
          value = {this.state.textinput}
          style = {styles.input}
          onChangeText = {this.onChangeInput}
        />

        <Button 
          title='Add Member'
          onPress={this.onAddMember}
        />

      </View>
      
      
      
    );
  }
}

export default Input;