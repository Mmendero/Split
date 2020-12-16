import React, { Component } from "react";
import { 
  View, 
  Text,
  FlatList,
  TextInput,
  TouchableOpacity, 
  Button,
  ScrollView,
  SafeView
} from "react-native";

//Import Styles
import styles from './styles';


class Input extends Component {
  
  state = {
    textinput: '',
    party: ['Matt','Sandra', 'Merlinda', 'Rossette', 'Brandon', 'Jerry', 'Angel', 'Jason', 'Jordan']
  }

  onChangeInput = event => {
    this.setState({
        textinput: event
    })
  }

  onAddMember = () => {
    this.setState(prevstate => {
      if(this.state.party.includes(prevstate.textinput)){
        return{
          textinput:'',
          party:[...prevstate.party]
        }
      }
      else{
        return{
          textinput:'',
          party:[prevstate.textinput, ...prevstate.party]
        }
      }


      
        
    })
  }

  render() {
    return (
      
      <View style={styles.memberlist}>
        <View style={styles.input}>
          <TextInput
            value = {this.state.textinput}
            style = {styles.inputname}
            onChangeText = {this.onChangeInput}
          />

          <Button 
            title='Add Member'
            onPress={this.onAddMember}
          />
        </View>
        <ScrollView style={styles.memberscroll}> 
          {
            this.state.party.map( item => (
              <Text style={styles.members} key={item}>{item}</Text>
            ))
          }
        </ScrollView>
      </View>
      
    );
  }
}

export default Input;