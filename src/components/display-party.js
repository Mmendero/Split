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

//Diplay Party Function
class DisplayParty extends Component{
    constructor(props){
        super(props);
    }

    //Edit Handler Function
    edit = member => {
        if(this.props.edittable){
            this.props.edit(member);
        }
        else{
            console.log("Edittable: false");
        }
    }

    //Display List
    render(){
        return (
            <ScrollView style={styles.memberscroll}> 
                {
                    this.props.party.map( person => (
                        <TouchableOpacity
                            style={styles.memberwrapper}
                            onPress={() => {this.edit(person)}}
                            key={person.key}
                        >
                            <Text style={styles.members}>{person.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        );
    }
    
}

  export default DisplayParty;