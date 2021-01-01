import React from "react";

import { View } from "react-native";

//Source Components
import PartyInput from "../components/party-input";
import DisplayParty from "../components/display-party";
import Bill from "../components/bill-input";
import PartyInputPopup from "../components/party-input-popup";

//Import Styles
import styles from "../styles";

//Generate Unique Id for Party Members
function uniqueKey(name) {
  return name + "_key_" + name;
}

function isInParty(target, party) {
  for (var i = 0; i < party.length; i++) {
    if (party[i].name == target) {
      return true;
    }
  }
  return false;
}

//Input Screen Class
class Split extends React.Component {
  constructor(props) {
    super(props);

    this.navigation = this.props.navigation;

    this.state = {
      bill: "0",
      split: "0",
      party: [
        { name: "Matt", key: uniqueKey("Matt") },
        { name: "Sandra", key: uniqueKey("Sandra") },
        { name: "Merlinda", key: uniqueKey("Merlinda") },
        { name: "Rossette", key: uniqueKey("Rossette") },
        { name: "Jason", key: uniqueKey("Jason") },
        { name: "Jerry", key: uniqueKey("Jerry") },
        { name: "Angel", key: uniqueKey("Angel") },
        { name: "Brandon", key: uniqueKey("Brandon") },
        { name: "Jordan", key: uniqueKey("Jordan") },
      ],
    };

    this.evenSplit = this.evenSplit.bind(this);
    this.addMember = this.addMember.bind(this);
    this.editMember = this.editMember.bind(this);
  }

  //Adds member to State party
  addMember = (member) => {
    console.log(isInParty(member, this.state.party));
    if (!isInParty(member, this.state.party)) {
      this.setState(() => {
        return {
          party: [
            { name: member, key: uniqueKey(member) },
            ...this.state.party,
          ],
        };
      });
    }
  };

  //Edit member to State party
  editMember = (member) => {
    console.log("Edittable: True");
  };

  //Even Split Logic
  evenSplit = (total_bill) => {
    this.setState(
      () => {
        return {
          bill: total_bill,
          split: (parseFloat(total_bill) / this.state.party.length).toFixed(2),
        };
      },
      () => {
        this.navigation.navigate("EvenOutput", {
          state: this.state,
        });
      }
    );
  };

  //Render Input Screen
  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.billContainer}>
          <Bill bill={this.state.bill} even={this.evenSplit} />
        </View>

        {/*<PartyInputPopup />*/}

        {/*Output Party List*/}
        <View style={styles.memberlist}>
          <PartyInput party={this.state.party} add={this.addMember} />

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
