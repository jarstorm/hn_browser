import React, {Component} from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Main from './component/Main';
import Children from './component/Children';
import User from './component/User';

class RouterComponent extends Component {

  render() {
    
  return (
    <Router>
      <Scene key="initial">
        <Scene key="main" component={Main} title="Main" />
        <Scene key="elementChildren" component={Children} title="Children" />
        <Scene key="user" component={User} title="User" />
      </Scene>
    </Router>
  )
}
};

export default RouterComponent;