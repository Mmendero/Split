import React from "react";

import { Button, Text, View } from "react-native";

//Source Components
import DisplayParty from "../components/display-party";
import Bill from "../components/bill-input";
import PartyInputPopup from "../components/party-input-popup";
import PartyEditPopup from "../components/party-edit-popup";

//Import Styles
import styles from "../styles";
import { TouchableHighlight } from "react-native-gesture-handler";

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
      tip: "0",
      split: "0",
      edit: "",

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

  //Modal references
  addRef = React.createRef();
  editRef = React.createRef();

  //Adds member to State party
  addMember = (member) => {
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
    let newparty = [];
    for (var i = 0; i < this.state.party.length; i++) {
      if (this.state.party[i].name == this.state.edit.name) {
        newparty.push({ name: member, key: this.state.edit.key });
      } else {
        newparty.push(this.state.party[i]);
      }
    }
    this.setState({ party: newparty });
  };

  //Even Split Logic
  evenSplit = (total_bill, tip_percentage) => {
    this.setState(
      () => {
        return {
          bill: total_bill,
          tip: (tip_percentage / 100) * total_bill,
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
    const onShowAdd = () => {
      this.addRef.show();
    };

    const onCloseAdd = () => {
      this.addRef.close();
    };

    //Edit Helpers

    const editHandler = (member) => {
      this.setState({ edit: member }, () => {
        this.editRef.show();
      });
    };

    const onCloseEdit = () => {
      this.editRef.close();
    };

    return (
      <View style={styles.appContainer}>
        <View style={styles.billContainer}>
          <Bill
            bill={this.state.bill}
            tip={this.state.tip}
            even={this.evenSplit}
          />
        </View>

        <PartyInputPopup
          title="Add Party Member"
          ref={(target) => (this.addRef = target)}
          add={this.addMember}
          onTouchOutside={onCloseAdd}
        />

        <PartyEditPopup
          title="Edit Party Member"
          ref={(target) => (this.editRef = target)}
          member={this.state.edit}
          edit={this.editMember}
          onTouchOutside={onCloseEdit}
        />

        {/*Output Party List*/}
        <View style={styles.memberlist}>
          {/*<PartyInput party={this.state.party} add={this.addMember} />*/}

          <View style={styles.partyHeaderContainer}>
            <View>
              <Text style={{ padding: 5, fontSize: 20, color: "white" }}>
                Current Party({this.state.party.length})
              </Text>
            </View>

            <TouchableHighlight
              onPress={onShowAdd}
              style={styles.addMemberButton}
            >
              <Text style={styles.headerButtonText}>+</Text>
            </TouchableHighlight>
          </View>

          <DisplayParty
            party={this.state.party}
            edit={editHandler}
            edittable={true}
          />
        </View>
      </View>
    );
  }
}

export default Split;
