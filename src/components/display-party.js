import React, { 
    Component,
    useState,
   } from "react";
   
import { 
    View, 
    Text,
    FlatList,
    TouchableOpacity, 
    ScrollView
} from "react-native";

//Import Styles
import styles from '../styles';

//Input Screen Class
function DisplayParty(props){
return (
    <ScrollView style={styles.memberscroll}> 
        {
        props.party.map( item => (
            <Text style={styles.members} key={item}>{item}</Text>
        ))
        }
    </ScrollView>
);
}

  export default DisplayParty;