import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { postCreateUpdate, postCreateSave } from '../actions';
import { CardSection, ButtonAsText } from './common';
import PostForm from './PostForm';

class PostCreate extends Component {
  onButtonPress() {
    const { postText } = this.props;
    this.props.postCreateSave({ postText });
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
  const { postType, postText } = state.postCreate;
  return { postType, postText };
};

export default connect(mapStateToProps, {
  postCreateUpdate, postCreateSave
})(PostCreate);
