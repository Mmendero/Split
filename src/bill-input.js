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
    if (/^\d+$/.test(text)) {
      this.setState({
        billInput: text
      });
    }
  }

  render() {
    return (
      <View>
        <View style={styles.billInputContainer}>
          <Text style={styles.billText}>$</Text>

          <TextInput 
            style={styles.billInput}
            keyboardType='phone-pad'
            onChangeText={this.onChangeInput}
            maxLength={4}
          />
        </View>

        <View style={styles.billButtonContainer}>
          <Button 
            title='Even Split'
            style={styles.billButton}
            onPress={() => {this.props.even(this.state.billInput)}}
          />
        </View>
      </View>
      
    );
  }
}

export default Bill;