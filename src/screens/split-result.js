import React, { 
  Component,
  useState,
 } from "react";
 
import { 
  View, 
  Text,
  ScrollView
} from "react-native";

//Import Styles
import styles from '../styles';



class SplitResult extends Component {
  constructor(props){
    super(props);  

    this.state = this.props.navigation.getParam('state');
    console.log(this.state.party.length);
  }

  
  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.appContainer}>
          <Text style={styles.outputText}>Total Bill</Text>
          <Text style={styles.totalBill}>${this.state.bill}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.outputText}>To Evenly Split the Bill{"\n"}Everyone Owes</Text>
          <Text style={styles.splitBill}>${this.state.split}</Text>
        </View>
        <View style={styles.partyContainer}>
          <Text style={styles.partyHeader}>Current Party</Text>
          <ScrollView style={styles.memberscroll}> 
            {
              this.state.party.map( item => (
                <Text style={styles.members} key={item}>{item}</Text>
              ))
            }
          </ScrollView>
        </View>
        
      </View>
      


    );
  }
}

export default SplitResult;