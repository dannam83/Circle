import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
// import { CardSection, Input } from './common';
import { postUpdate } from '../actions';

class PostForm extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text>hi</Text>
      </View>
    );
  }
}

// const styles = {
//   pickerTextStyle: {
//     fontSize: 18,
//     paddingLeft: 20
//   }
// };

const mapStateToProps = state => {
  const { name, phone, shift } = state.postForm;

  return { name, phone, shift };
};

export default connect(null, { postUpdate })(PostForm);
