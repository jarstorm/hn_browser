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
import { Actions } from 'react-native-router-flux';

class Main extends Component {

  componentWillMount() {
    this.props.loadData();
  }

  seeChildren() {
    Actions.elementChildren();
  }

  renderText = (data) => {
    return (
      <View style={styles.card}>
      <Image          
          source={{uri: 'https://cdn0.iconfinder.com/data/icons/mobile-development-icons/256/Web_page.png'}}
          style={styles.image}
        />      
        <Text style={styles.title}>
            {data.title} (
            <Text style={{color: 'blue'}}
              onPress={() => Linking.openURL('{data.url}')}>
                url
            </Text>
            )
        </Text>
        <Text>
            By: {data.by}
        </Text>
        <Text>
            Points: {data.score}
        </Text>
        
        <Text style={{color: 'blue'}} onPress={() => this.seeChildren()}>
            See comments ({data.kids.length})
        </Text>
      
        
      </View>
    )
  }

  render() {
    const {loading, data} = this.props;
    // If we're loading, show a spinner.
    if (loading) {
      return <ActivityIndicator />
    }

    return (
      <ScrollView style={styles.contentContainer}>
        {data.map((t) => this.renderText(t))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    
  },
  card: {
    top: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    borderRadius: 4,
    borderWidth: 3.5,
    borderColor: '#d6d7da',
  }, title: {
    fontWeight: 'bold'
  }, image: {
    marginLeft: 10,
    marginRight: 10,
    height: 100, 
    resizeMode: 'cover'
  }
});

const mapStateToProps = state => {  
  const {data, loading}  = state.main;
  return {data, loading};
};

export default connect(mapStateToProps, { loadData })(Main);
