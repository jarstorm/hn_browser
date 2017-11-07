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
import { loadChildren } from '../action';
import { connect } from 'react-redux';
import Comment from './Comment';

class Children extends Component {

  componentWillMount() {
    this.props.loadChildren(this.props.childrenId);
  }

  orderByDateAndParent(data) {
    return data.sort(function(a, b) {
      return b.time - a.time;
    });
  }

  render() {
    const children = this.orderByDateAndParent(this.props.children);
    return (
    <ScrollView style={styles.contentContainer}>
      {children.map((t) => <Comment key={t.id} data={t} />)}
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    
  }, 
});

const mapStateToProps = state => {  
  const {children}  = state.main;
  return {children};
};

export default connect(mapStateToProps, { loadChildren })(Children);
