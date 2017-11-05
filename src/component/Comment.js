import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Timestamp from 'react-timestamp';

class Comment extends Component {

  	render() {
	    const {data} = this.props;
	    
	    return (
	      <View key={data.id} style={[styles.card, {marginLeft: data.offset}]}>      	
	      	<Text style={styles.by}>
	            By: {data.by}
	        </Text>
	        <Text>
	        	{data.text}
	        </Text>   
	        <Timestamp time={data.time} component={Text} />             
	      </View>
	    )
	}
}

const styles = StyleSheet.create({
  card: {
    top: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    borderRadius: 4,
    borderWidth: 3.5,
    borderColor: '#d6d7da',
  }, by: {
    fontWeight: 'bold'
  }
});

export default Comment;
