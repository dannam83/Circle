import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { postUpdate, postCreate } from '../actions';
import { Card, CardSection, ButtonAsText } from './common';
import PostForm from './PostForm';

class PostCreate extends Component {
  onButtonPress() {
    // const { name, phone, shift } = this.props;
    // this.props.postCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <PostForm {...this.props} />
        <CardSection style={{ justifyContent: 'center', borderTopWidth: 1 }}>
          <ButtonAsText onPress={this.onButtonPress.bind(this)}>
            Share
          </ButtonAsText>
        </CardSection>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => {
  const { postType, postText } = state.postForm;
  return { postType, postText };
};

export default connect(mapStateToProps, {
  postUpdate, postCreate
})(PostCreate);
