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

    getDataOffset(dataTemp, selfId) {
    let data = [];
      dataTemp.map(e => {
        if (e.parent === selfId) {
          e.offset = 0;
        } else {
          e.offset = 10;
        }
        data.push(e);
      });
      return data;
  }

    render() {
      let dataTemp = this.props.children;
      console.log(dataTemp);

      const children = this.getDataOffset(dataTemp, this.props.childrenId);   
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
