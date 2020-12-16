import React, { Component } from "react";
import { 
  View, 
  Text,
  FlatList,
  TextInput,
  TouchableOpacity, 
  Button,
} from "react-native";

//Source Files
import Input from "./src/input";

//Import Styles
import styles from './src/styles';


class App extends Component {
  
  
  render() {
    return (

      <View style={styles.container}>
        
        <View style={styles.totalbill}>
          <Text>Hello World!</Text>
        </View>



        <Input/>
        
      </View>


    );
  }
}

export default App;