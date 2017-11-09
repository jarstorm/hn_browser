import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Item extends Component {

  seeChildren(id) {
    Actions.elementChildren({childrenId: id});
  }

  seeUser(id) {
    console.log(id);
    Actions.user({userId: id});
  }

  render() {
    const {data} = this.props;

    return (
      <View key={data.id} style={styles.card}>
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
        <Text style={{color: 'blue'}} onPress={() => this.seeUser(data.by)}>
            By ({data.by})
        </Text> 
        <Text>
            Points: {data.score}
        </Text>
        
        <Text style={{color: 'blue'}} onPress={() => this.seeChildren(data.id)}>
            See comments ({data.descendants})
        </Text>    
      </View>
    )
  }
}

const styles = StyleSheet.create({
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

export default Item;
