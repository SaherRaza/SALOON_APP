import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import  FontAwesome from "react-native-vector-icons/FontAwesome";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const numStars = 5

export default class FilledStars extends React.Component{
    state = {
        rating: 5
    };

    rate = star => {
        this.setState({ rating: star});
    };

    render() {

        let stars = []
        for (let x = 1; x <= numStars; x++){
            stars.push(
                <TouchableWithoutFeedback key={x}
                    onPress={() => {
                        this.rate(x);
                }}
                >
                    <View>
                        <Star filled = { x<= this.state.rating ? true : false} />
                    </View>
                
                </TouchableWithoutFeedback>
            )
        }
        return (
            <View style={styles.container}>
                <View style={{flexDirection:"row"}}>
                    {stars}
               </View>
          </View>  
        );
    }
}

class Star extends React.Component{
    render() {
        return (
            <FontAwesome name={this.props.filled === true ? "star" : "star-o"}
                color="#FDC83C" size={16}  />
        );
    }
}

const styles = StyleSheet.create({
   
})
