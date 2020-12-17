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
  constructor(props){
    super(props);

    this.state = {
      textinput: '',
    }
  }
  

  onChangeInput = event => {
    this.setState({
        textinput: event
    })
  }

  render() {
    return (
      
      <View style={styles.input}>
        <TextInput
          value = {this.state.textinput}
          style = {styles.inputname}
          onChangeText = {this.onChangeInput}
        />

        <Button 
          title='Add Member'
          onPress={() => this.props.add(this.state.textinput)}
        />
      </View>
        
      
    );
  }
}

export default Input;