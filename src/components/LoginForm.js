import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { LoginInputSection, LoginInput, LoginButton, Spinner } from './common';

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

  renderLoginButton() {
    if (this.props.loading) {
      return (
        <Spinner size="large" />
      );
    }

    return (
      <LoginButton onPress={this.onButtonPress.bind(this)}>
        Sign In
      </LoginButton>
    );
  }

  renderNewAccountText() {
    return (
      <Text onPress={this.onButtonPress.bind(this)} style={{ color: 'white' }}>
        Create a new account
      </Text>
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
    const {
      linearGradientStyle,
      containerViewStyle,
      logoViewStyle,
      logoTextStyle,
      loginButtonSectionStyle,
      loginContainerStyle,
      newAccountTextStyle
     } = styles;

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
                placeholderTextColor="rgba(0, 0, 0, 0.35)"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
                containerStyle={loginContainerStyle}
              />
            </LoginInputSection>

            <LoginInputSection>
              <LoginInput
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="rgba(0, 0, 0, 0.35)"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
                style={loginContainerStyle}
              />
            </LoginInputSection>

            {this.renderError()}

            <LoginInputSection style={loginButtonSectionStyle}>
              {this.renderLoginButton()}
            </LoginInputSection>

            <LoginInputSection style={newAccountTextStyle}>
              {this.renderNewAccountText()}
            </LoginInputSection>


        </View>
      </LinearGradient>
    );
  }
}

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
  loginButtonSectionStyle: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    opacity: 1.0,
    borderBottomWidth: 0,
    paddingTop: 20
  },
  newAccountTextStyle: {
    justifyContent: 'center',
    borderBottomWidth: 0,
  },
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
