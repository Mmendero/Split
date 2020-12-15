import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
        backgroundColor: "#FBFAFA",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
	},
	row: {
		flex: 1,
        alignItems: "center",
	},
	text: {
		fontSize: 20,
		marginBottom: 15,
		alignItems: "center",
	},
	inputWrapper: {
		width: '100%',
		flex: 1,
        justifyContent: "center",
        alignItems: "center",
	},
	input: {
		width: '100%',
		backgroundColor: '#f2f2f2',
	},
	members: {
		fontSize: 30,
		borderWidth: 2,
		padding: 10,
		marginBottom: 20,
		borderColor: '#cecece'
	},
});

export default styles;