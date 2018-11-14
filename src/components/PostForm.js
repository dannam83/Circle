import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { postUpdate, postEditUpdate } from '../actions';

class PostForm extends Component {
  componentDidMount() {
    this.textInput.focus();
  }

  getTextValue() {
    if (this.props.routeName === 'postEdit') {
      return this.props.postEditText;
    }
    return this.props.postText;
  }

  getOnChangeText() {
    if (this.props.routeName === 'postEdit') {
      return this.props.postEditUpdate;
    }
    return this.props.postUpdate;
  }

  render() {
    const textValue = this.getTextValue();
    const onChangeText = this.getOnChangeText();
    return (
      <View style={{ backgroundColor: 'white', padding: 10, flex: 1 }}>
        <TextInput
          placeholder="What would you like to share?"
          multiline
          autofocus
          ref={(input) => { this.textInput = input; }}
          value={textValue}
          onChangeText={value => onChangeText({ prop: 'postText', value })}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    postEditText: state.postEdit.postText

  };
};

export default connect(mapStateToProps, { postUpdate, postEditUpdate })(PostForm);
