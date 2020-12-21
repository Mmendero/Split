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

//Source Files
import PartyInput from "../components/party-input";
import Bill from "../components/bill-input";

//Import Styles
import styles from '../styles';



class Split extends Component {
  constructor(props){
    super(props);  
     
    this.navigation = this.props.navigation;

    this.state = {
      bill: '0',
      split: '0',
      party: ['Matt','Sandra', 'Merlinda', 'Rossette', 'Brandon', 'Jerry', 'Angel', 'Jason', 'Jordan']
    }

    this.evenSplit = this.evenSplit.bind(this);
    this.addMember = this.addMember.bind(this);
  }

  

  addMember = (member) => {
    if(!(this.state.party.includes(member))){
      this.setState(() => {
        return{
          party:[member, ...this.state.party]
        }
      })
    }
  }
  
  evenSplit = (total_bill) => {
    this.setState(() => {
      return{
        bill: total_bill,
        split: (parseFloat(total_bill) / this.state.party.length).toFixed(2)
      }
    }, () => {
      this.navigation.navigate('Output', {
        state: this.state
      })
    });

    
  }

  render() {
    return (
      <View style={styles.appContainer}>
        
        <View style={styles.billContainer}>
          <Bill
            bill={this.state.bill}
            even={this.evenSplit}
          />
        </View>


        <View style={styles.memberlist}>
          <PartyInput
            party={this.state.party}
            add={this.addMember}
          />

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

export default Split;