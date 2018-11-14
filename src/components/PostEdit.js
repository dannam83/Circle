import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, KeyboardAvoidingView } from 'react-native';
// import { text } from 'react-native-communications';
import PostForm from './PostForm';
// import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { postEditUpdate, postSave, postDelete } from '../actions';
import { Card, CardSection, ButtonAsText, Confirm } from './common';

class PostEdit extends Component {
  state = { showModal: false }

  componentWillMount() {
    _.each(this.props.post, (value, prop) => {
      this.props.postEditUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { postText } = this.props;

    this.props.postSave({ postText, uid: this.props.post.id });
  }

  onAccept() {
    this.props.postDelete({ uid: this.props.post.id });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <PostForm {...this.props} />
        <CardSection style={{ justifyContent: 'center', borderTopWidth: 1 }}>
          <ButtonAsText onPress={this.onButtonPress.bind(this)}>
            Save
          </ButtonAsText>
        </CardSection>
      </KeyboardAvoidingView>
    );
  }
}
// <View style={{ flex: 1 }}>
//   <Confirm
//     visible={this.state.showModal}
//     onAccept={this.onAccept.bind(this)}
//     onDecline={this.onDecline.bind(this)}
//     >
//     Are you sure you want to delete this post?
//   </Confirm>
// </View>

const mapStateToProps = state => {
  const { postText, postType } = state.postEdit;

  return { postText, postType };
};

export default connect(mapStateToProps, {
  postEditUpdate, postSave, postDelete
})(PostEdit);
