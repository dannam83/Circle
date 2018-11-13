import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: '#ff1c1c' }}>
      <Scene key="root" hideNavBar>

        <Scene key="auth" initial>
          <Scene key="login" component={LoginForm} hideNavBar />
        </Scene>

        <Scene key="home">
          <Scene
            key="employeeList"
            component={EmployeeList}
            initial
            backTitle={null}
            title="Circle"
            titleStyle={styles.logoTitleStyle}
            rightTitle="➕"
            onRight={() => Actions.prayerRequest()}
          />
          <Scene
            key="prayerRequest"
            component={EmployeeCreate}
            title="Post"
            titleStyle={{ color: 'white' }}
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>

      </Scene>
    </Router>
  );
};

const styles = {
  logoTitleStyle: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 25,
    color: 'white'
  }
};

export default RouterComponent;
