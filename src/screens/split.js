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

//Source Components
import PartyInput from "../components/party-input";
import DisplayParty from "../components/display-party";
import Bill from "../components/bill-input";

//Import Styles
import styles from '../styles';


//Input Screen Class
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
    this.editMember = this.editMember.bind(this);
  }

  
  //Adds member to State party
  addMember = (member) => {
    if(!(this.state.party.includes(member))){
      this.setState(() => {
        return{
          party:[member, ...this.state.party]
        }
      })
    }
  }

  //Edit member to State party
  editMember = (member) => {
    console.log("Edittable: True");
    
  }
  
  //Even Split Logic
  evenSplit = (total_bill) => {
    this.setState(() => {
      return{
        bill: total_bill,
        split: (parseFloat(total_bill) / this.state.party.length).toFixed(2)
      }
    }, () => {
      this.navigation.navigate('EvenOutput', {
        state: this.state
      })
    });
  }

  //Render Input Screen
  render() {
    return (
      <View style={styles.appContainer}>
        
        <View style={styles.billContainer}>
          <Bill
            bill={this.state.bill}
            even={this.evenSplit}
          />
        </View>

        {/*Output Party List*/}
        <View style={styles.memberlist}>
          <PartyInput
            party={this.state.party}
            add={this.addMember}
          />

          <DisplayParty
            party={this.state.party}
            edit={this.editMember}
            edittable={true}
          />
        </View>
        
      </View>

    );
  }
}

export default Split;