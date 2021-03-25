import React, { Component, useState } from "react";

import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import CheckBox from "@react-native-community/checkbox";

//Import Styles
import styles from "../styles";

//Diplay Party Function
class DisplayParty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: false,
      active: false,
    };
  }

  //Edit Handler Function
  edit = (member) => {
    if (this.props.edittable) {
      this.props.edit(member);
    } else {
      console.log("Edittable: false");
    }
  };

  //Display List
  render() {
    return (
      <ScrollView style={styles.memberscroll}>
        {this.props.party.map((person) => (
          <TouchableOpacity
            style={styles.memberwrapper}
            onPress={() => {
              this.edit(person);
            }}
            key={person.key}
          >
            <View style={styles.members}>
              <Text style={styles.memberListName}>{person.name}</Text>
              <CheckBox value={this.state.active} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

export default DisplayParty;
