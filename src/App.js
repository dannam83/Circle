import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { View, Text } from 'react-native';
import reducers from './reducers';
// import RouterComponent from './Router';

class App extends Component {
//   componentWillMount() {
//     const config = {
//       apiKey: 'AIzaSyCkwCnJE7plGtrhQ05kpBF9BYCb971rfhI',
//       authDomain: 'circle-7a6bf.firebaseapp.com',
//       databaseURL: 'https://circle-7a6bf.firebaseio.com',
//       projectId: 'circle-7a6bf',
//       storageBucket: '',
//       messagingSenderId: '330326425530'
//     };
//     firebase.initializeApp(config);
//   }
//
// // first argument of createStore is just reducers
// // second argument of createStore is for passing any initial state
  render() {
    // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    // <Provider store={store}>
    return (
        <View>
          <Text>hello world</Text>
        </View>
    );
  }
}
// </Provider>
// // <RouterComponent />
//
export default App;
