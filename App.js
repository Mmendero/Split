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
import Input from "./src/input";

//Import Styles
import styles from './src/styles';



class App extends Component {
  state = {
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

  addMember = this.addMember.bind(this);
  
  
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.totalbill}>
          <Text>Hello World!</Text>
        </View>


        <View style={styles.memberlist}>
          <Input
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

export default App;