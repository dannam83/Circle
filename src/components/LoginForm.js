import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner size="large" />
      );
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    const { loginMasterViewStyle, loginSubViewStyle, logoStyle, inputStyle } = styles;

    return (
      <View style={loginMasterViewStyle}>
        <View style={loginSubViewStyle}>
          <Card>
            <CardSection style={logoStyle}>
              <Text>LOGO</Text>
            </CardSection>

            <CardSection>
              <Input
                label="Email"
                placeholder="user@email.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                label="Password"
                placeholder="password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </CardSection>

            {this.renderError()}

            <CardSection style={inputStyle}>
              {this.renderButton()}
            </CardSection>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginMasterViewStyle: {
    backgroundColor: 'red',
    flex: 1,
    display: 'flex',
  },
  loginSubViewStyle: {
    backgroundColor: 'red',
    flex: 0.8,
    justifyContent: 'center',
    display: 'flex',
  },
  logoStyle: {
    alignSelf: 'center'
  },
  // inputStyle: {
  // },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
 }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
