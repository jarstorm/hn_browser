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
import { loadUser } from '../action';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';

class User extends Component {

  componentWillMount() {
    this.props.loadUser(this.props.userId);
  }

  render() {
    const {user} = this.props;
    return (
    <View style={styles.contentContainer}>
      <Text>
        Id: {user.id}
      </Text>
      <Text>
        Karma: {user.karma}
      </Text>
      <Text>
        Comments: {user.submitted.length}
      </Text>
      <Text>
        Member since: <Timestamp time={user.created} component={Text} />             
      </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    
  }, 
});

const mapStateToProps = state => {  
  const {user}  = state.main;
  return {user};
};

export default connect(mapStateToProps, { loadUser })(User);
