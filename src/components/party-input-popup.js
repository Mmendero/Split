import React from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StatusBar,
  SafeView,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

//Import Styles
import styles from "../styles";

export class PartyInputPopup extends React.Component {
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
    return <View style={styles.memberPromptContainer}></View>;
  }
}
