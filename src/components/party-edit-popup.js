import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import {
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

//Import Styles
import styles from "../styles";

class PartyEditPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      name: this.props.member.name,
    };
  }

  //edit button handler
  editHandler = () => {
    if (!(this.state.name == "")) {
      this.setState({ show: false });
      console.log(this.state.name);
    }
  };

  //Text Change Handler
  onEditInput = (event) => {
    this.setState({
      name: event,
    });
  };

  show = () => {
    this.setState({ show: true, name: this.props.member.name });
  };

  close = () => {
    this.setState({ show: false });
  };

  //Render Member Input
  render() {
    let { show } = this.state;
    let name = this.state.name;
    const { onTouchOutside, title } = this.props;

    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={show}
        onRequestClose={this.close}
      >
        <TouchableWithoutFeedback onPress={this.close}>
          <View style={styles.outsidePopup} />
        </TouchableWithoutFeedback>

        <View style={styles.popupContainer}>
          <View style={styles.inputBorder}>
            <Text style={styles.popupText}>{title}</Text>

            <TextInput
              style={styles.popupInput}
              value={this.state.name}
              onChangeText={(value) => this.setState({ name: value })}
              maxLength={50}
            />

            <TouchableWithoutFeedback
              onPress={this.editHandler}
              style={styles.popupButtonContainer}
            >
              <Text style={styles.popupButton}>Edit Member</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
    );
  }
}

export default PartyEditPopup;
