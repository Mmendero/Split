import React from "react";
import { View, Text, Modal, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

//Import Styles
import styles from "../styles";

class PartyInputPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      name: this.props.name,
    };
  }

  //Text Change Handler
  onChangeInput = (event) => {
    this.setState({
      name: event,
    });
  };

  show = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };

  //Render Member Input
  render() {
    let { show } = this.state;
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
          </View>
        </View>
      </Modal>
    );
  }
}

export default PartyInputPopup;
