import { StyleSheet } from "react-native";

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
});

export default styles;
