import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';
// import LoginForm from './components/LoginForm';
// import EmployeeList from './components/EmployeeList';
// import EmployeeCreate from './components/EmployeeCreate';
// import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <View>
          <Text>hello world</Text>
        </View>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
