import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  View,
  Linking
} from 'react-native';
import { loadData } from '../action';
import { connect } from 'react-redux';

class Children extends Component {


  render() {    
    return (
      <ScrollView style={styles.contentContainer}>
        <Text>Hijos</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    
  }, 
});

const mapStateToProps = state => {  
  const {data, loading}  = state.main;
  return {data, loading};
};

export default connect(mapStateToProps, { loadData })(Children);
