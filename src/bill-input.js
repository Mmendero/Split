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

  onChangeInput = text => {
    this.setState({
      billInput: text
    })
  }

  render() {
    return (
      <View>
        <View style={styles.billInputContainer}>
          <Text style={styles.billText}>$</Text>

          <TextInput 
            style={styles.billInput}
            keyboardType='numeric'
            onChangeText={this.onChangeInput}
            value={this.state.billInput}
            maxLength={4}
          />
        </View>

        <View style={styles.billButtonContainer}>
          <Button style={styles.billButton} title='Button1'/>
          <Button style={styles.billButton} title='Button2'/>
          <Button style={styles.billButton} title='Button3'/>
        </View>
      </View>
      
      
        
      
    );
  }
}

export default Bill;