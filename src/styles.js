import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
        backgroundColor: "#FBFAFA",
        flex: 1,
        justifyContent: "center",
		alignItems: "center",
	},
	inputWrapper: {
		width: '100%',
		flex: 1,
        justifyContent: "center",
        alignItems: "center",
	},
	totalbill: {
		flex: 2,
		justifyContent: 'center',
	},
	input: {
		width: '100%',
		flexDirection: 'row',
	},
	inputname: {
		width: '75%',
		borderWidth: 2,
		backgroundColor: '#808080',
		fontSize: 20,
	},
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