import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, LoginInputSection, LoginInput, Button, Spinner } from './common';

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
  // <Card>
  //   <CardSection style={logoStyle}>
  //   </CardSection>

  render() {
    const {
      linearGradientStyle,
      containerViewStyle,
      logoViewStyle,
      logoTextStyle,
      inputStyle } = styles;

    return (
      <LinearGradient
        colors={['#ff0000', '#ff5050', '#cc3399']}
        style={linearGradientStyle}
      >
        <View style={containerViewStyle}>

            <View style={logoViewStyle}>
              <Text style={logoTextStyle}>Circle</Text>
            </View>

            <LoginInputSection>
              <LoginInput
                placeholder="Email"
                placeholderTextColor="white"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </LoginInputSection>

            <LoginInputSection>
              <LoginInput
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="white"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </LoginInputSection>

            {this.renderError()}

            <CardSection style={inputStyle}>
              {this.renderButton()}
            </CardSection>
        </View>
      </LinearGradient>
    );
  }
}
// </Card>

const styles = StyleSheet.create({
  linearGradientStyle: {
    flex: 1,
    display: 'flex',
  },
  containerViewStyle: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  logoViewStyle: {
    alignSelf: 'center',
    paddingBottom: 85
  },
  logoTextStyle: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 32,
    color: 'white'
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
