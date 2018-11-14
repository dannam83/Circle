import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { postUpdate } from '../actions';

class PostForm extends Component {
  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white', padding: 10, flex: 1 }}>
        <TextInput
          placeholder="What would you like to share?"
          multiline
          autofocus
          ref={(input) => { this.textInput = input; }}
          value={this.props.postText}
          onChangeText={value => this.props.postUpdate({ prop: 'postText', value })}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { postText: state.postForm.postText };
};

export default connect(mapStateToProps, { postUpdate })(PostForm);
