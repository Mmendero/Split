import { StyleSheet, Dimensions } from "react-native";

const deviceheight = Dimensions.get("window").height;
const devicewidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  //App.js Styles
  appContainer: {
    backgroundColor: "#FBFAFA",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  boldText: {
    fontWeight: "bold",
  },

  //Bill Styles
  billContainer: {
    flex: 2,
    justifyContent: "center",
  },
  billInputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  billButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  billInput: {
    width: "50%",
    backgroundColor: "white",
    fontSize: 50,
    textAlign: "center",
  },
  billButton: {
    backgroundColor: "dodgerblue",
    margin: 10,
    fontSize: 25,
  },
  billText: {
    backgroundColor: "white",
    fontSize: 50,
  },
  //Tip
  tipInputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tipInput: {
    width: "50%",
    backgroundColor: "white",
    fontSize: 50,
    textAlign: "center",
  },
  tipInputText: {
    backgroundColor: "white",
    fontSize: 50,
  },
  tipText: {
	fontWeight: "bold",
	fontSize: 30,
  },
  tipTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  //Add Member Styles
  memberPromptContainer: {
    width: "100%",
    flexDirection: "row",
  },
  memberName: {
    width: "75%",
    borderWidth: 2,
    backgroundColor: "silver",
    fontSize: 20,
  },
  //Party Styles
  partyHeaderContainer: {
    width: devicewidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#b92b27",
    borderWidth: 2,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  addMemberButton: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#4285f4",
    justifyContent: "center",
    alignItems: "center",
  },
  headerButtonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  memberlist: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  memberscroll: {
    width: "100%",
    height: "30%",
    borderWidth: 1,
  },
  members: {
    width: "100%",
    fontSize: 20,
    color: "black",
    borderWidth: 1,
    padding: 20,
    borderColor: "#cecece",
    backgroundColor: "white",
  },
  memberwrapper: {
    backgroundColor: "lightgray",
    padding: 5,
  },
  //Split Results Styles
  partyHeader: {
    fontSize: 20,
  },
  outputText: {
    fontSize: 20,
    textAlign: "center",
  },
  totalBill: {
    fontSize: 60,
  },
  splitBill: {
    fontSize: 40,
  },
  tip: {
    fontSize: 40,
  },
  tipContainer: {
    width: "100%",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  priceContainer: {
    width: "100%",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  partyContainer: {
    width: "100%",
    flex: 3,
  },
  //Popup Styles
  outsidePopup: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  popupContainer: {
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputBorder: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    width: devicewidth * 0.8,
    height: deviceheight * 0.3,
  },
  popupText: {
    flex: 1,
    color: "#4285f4",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    margin: 20,
  },
  popupInput: {
    flex: 1,
    fontSize: 25,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#c2c2c2",
    width: devicewidth * 0.6,
    textAlign: "center",
    marginBottom: 30,
  },
  popupButtonContainer: {
    flex: 1,
    borderWidth: 1,
  },
  popupButton: {
    color: "white",
    backgroundColor: "#4285f4",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
});

export default styles;
