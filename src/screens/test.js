import React, { 
  Component,
  useState,
 } from "react";
 
import { 
  View, 
  Text,
  FlatList,
  TextInput,
  TouchableOpacity, 
  Button,
  ScrollView
} from "react-native";

//Import Styles
import styles from '../styles';



class Split extends Component {
  
  render() {
    return (
      <View style={styles.appContainer}>
        <Text>Hello 2nd Page</Text>
      </View>


    );
  }
}

export default Split;