import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	//App.js Styles
	appContainer: {
        backgroundColor: "#FBFAFA",
        flex: 1,
        justifyContent: "center",
		alignItems: "center",
	},
	//Bill Styles
	billContainer: {
		flex: 2,
		justifyContent: 'center',
	},
	billInputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: "center",
	},
	billButtonContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: "center",
	},
	billInput: {
		width: '50%',
		backgroundColor: 'white',
		fontSize: 50,
		textAlign: 'center'
	},
	billButton: {
		backgroundColor: 'dodgerblue',
		margin: 10,
		fontSize: 25,
	},
	billText: {
		backgroundColor: 'white',
		fontSize: 50,
	},
	//Add Member Styles
	memberPromptContainer: {
		width: '100%',
		flexDirection: 'row',
	},
	memberName: {
		width: '75%',
		borderWidth: 2,
		backgroundColor: '#808080',
		fontSize: 20,
	},
	//Party Styles
	memberlist: {
		width: '100%',
		flex: 1,
        justifyContent: "center",
        alignItems: "center",
	},
	memberscroll: {
		width: '100%',
		height: '30%',
		borderWidth: 4
	},
	members: {
		width: '100%',
		fontSize: 20,
		borderWidth: 2,
		padding: 10,
		borderColor: '#cecece'
	},
});

export default styles;