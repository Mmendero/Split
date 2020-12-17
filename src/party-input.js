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


class PartyInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      textinput: '',
    }
  }
  
  onAddMember = member => {
    this.setState({
      textinput: ''
    })
    this.props.add(member);
  }

  onChangeInput = event => {
    this.setState({
        textinput: event
    })
  }

  render() {
    return (
      
      <View style={styles.memberPromptContainer}>
        <TextInput
          value = {this.state.textinput}
          style = {styles.memberName}
          onChangeText = {this.onChangeInput}
        />

        <Button 
          title='Add Member'
          onPress={() => this.onAddMember(this.state.textinput)}
        />
      </View>
        
      
    );
  }
}

export default PartyInput;