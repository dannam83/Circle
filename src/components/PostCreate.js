import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
// import { employeeUpdate, employeeCreate } from '../actions';
import { postUpdate, postCreate } from '../actions';
import { Card, CardSection, Button } from './common';
// import EmployeeForm from './EmployeeForm';
import PostForm from './PostForm';

class PostCreate extends Component {
  onButtonPress() {
    // const { name, phone, shift } = this.props;
    // this.props.postCreate({ name, phone, shift: shift || 'Monday' });
  }

  // <PostForm {...this.props} />
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <PostForm></PostForm>
      </KeyboardAvoidingView>
    );
  }
}
// <CardSection>
//   <Button onPress={this.onButtonPress.bind(this)}>
//     Create
//   </Button>
// </CardSection>

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.postForm;
  return { name, phone, shift };
};

export default connect(null, {
  postUpdate, postCreate
})(PostCreate);
