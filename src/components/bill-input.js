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
import styles from '../styles';

class Bill extends Component {
  constructor(props){
    super(props);

    this.state = {
      billInput: this.props.bill,
      tipInput: this.props.tip
    }
  }

  //Handles Bill-Input Change
  billChangeInput = text => {
    if (/^\d+$/.test(text)) {
      this.setState({
        billInput: text

      });
    }
  }

    //Handles Tip-Input Change
    tipChangeInput = text => {
      if (/^\d+$/.test(text)) {
        this.setState({
          tipInput: text
  
        });
      }
    }

  //Render Bill Input/Option
  render() {
    return (
      <View>
        <View style={styles.billInputContainer}>
          <Text style={styles.billText}>$</Text>

          <TextInput
            style={styles.billInput}
            keyboardType='phone-pad'
            onChangeText={this.billChangeInput}
            maxLength={4}
          />
        </View>

        <View style={styles.billButtonContainer}>
          <Button
            title='Even Split'
            style={styles.billButton}
            onPress={() => {this.props.even(this.state.billInput, this.state.tipInput)}}
          />
        </View>
        
        {/* Tip */}

        <View style={styles.tipInputContainer}>
          <Text style={styles.tipInputText}>%</Text>

          <TextInput
            style={styles.tipInput}
            keyboardType='phone-pad'
            onChangeText={this.tipChangeInput}
            maxLength={4}
          />
        </View>

        <View style={styles.tipTextContainer}>
          <Text style={styles.tipText}>Tip</Text>
        </View>

      </View>
    );
  }
}

export default Bill;