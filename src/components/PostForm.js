import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
// import { CardSection, Input } from './common';
import { postUpdate } from '../actions';

class PostForm extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white', padding: 10, flex: 1 }}>
        <TextInput
          placeholder="What would you like to share?"
          multiline
          value={this.props.postText}
          onChangeText={value => this.props.postUpdate({ value })}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { postText: state.postForm.postText };
};

export default connect(mapStateToProps, { postUpdate })(PostForm);
