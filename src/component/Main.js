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
import Item from './Item';

class Main extends Component {

  componentWillMount() {
    this.props.loadData();
  }

  render() {
    const {loading, data} = this.props;
    // If we're loading, show a spinner.
    if (loading) {
      return <ActivityIndicator />
    }

    return (
      <ScrollView style={styles.contentContainer}>
        {data.map((t) => <Item data={t} />)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    
  }
});

const mapStateToProps = state => {  
  const {data, loading}  = state.main;
  return {data, loading};
};

export default connect(mapStateToProps, { loadData })(Main);
