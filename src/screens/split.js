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
  state = {
    bill: '0',
    party: ['Matt','Sandra', 'Merlinda', 'Rossette', 'Brandon', 'Jerry', 'Angel', 'Jason', 'Jordan']
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
        bill: total_bill
      }
    })
    
  }

  evenSplit = this.evenSplit.bind(this);
  addMember = this.addMember.bind(this);
  
  
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