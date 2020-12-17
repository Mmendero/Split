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


class Bill extends Component {
  constructor(props){
    super(props);

    this.state = {
      billInput: this.props.bill,
    }
  }

  render() {
    return (
      
      <View style={styles.input}>
        <Text>{this.state.billInput}</Text>
      </View>
        
      
    );
  }
}

export default Bill;