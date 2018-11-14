import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
// import EmployeeList from './components/EmployeeList';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import EmployeeEdit from './components/EmployeeEdit';
import PostEdit from './components/PostEdit';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: '#ff1c1c' }}>
      <Scene key="root" hideNavBar>

        <Scene key="auth" initial>
          <Scene key="login" component={LoginForm} hideNavBar />
        </Scene>

        <Scene key="home">
          <Scene
            key="postList"
            component={PostList}
            initial
            backTitle={null}
            title="Circle"
            titleStyle={styles.logoTitleStyle}
            rightTitle="➕"
            onRight={() => Actions.post()}
          />
          <Scene
            key="post"
            component={PostCreate}
            title="Post"
            titleStyle={{ color: 'white' }}
          />
          <Scene
            key="postEdit"
            component={PostEdit}
            title="Edit Post"
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
