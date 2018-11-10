import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { LoginInputSection, LoginInput, LoginButton, Spinner } from './common';
import { loginUser, loginUpdate, loginReset } from '../actions';

class LoginForm extends Component {
  state = { newAccount: false };

  onSignInPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  onSignUpPress() {
    const { firstName, lastName, phone, email, password } = this.props;
    this.props.registerUser({ firstName, lastName, phone, email, password });
  }

  renderFirstNameInput(update) {
    return (
      <LoginInputSection>
        <LoginInput
          placeholder="First name"
          onChangeText={value => update({ field: 'firstName', value })}
          value={this.props.firstName}
        />
      </LoginInputSection>
    );
  }

  renderLastNameInput(update) {
    return (
      <LoginInputSection>
        <LoginInput
          placeholder="Last name"
          onChangeText={value => update({ field: 'lastName', value })}
          value={this.props.lastName}
        />
      </LoginInputSection>
    );
  }

  renderPhoneInput(update) {
    return (
      <LoginInputSection>
        <LoginInput
          placeholder="Phone"
          onChangeText={value => update({ field: 'phone', value })}
          value={this.props.phone}
        />
      </LoginInputSection>
    );
  }

  renderNewAccountFields(update) {
    if (this.state.newAccount) {
      return (
        <View>
          {this.renderFirstNameInput(update)}
          {this.renderLastNameInput(update)}
          {this.renderPhoneInput(update)}
        </View>
      );
    }
  }

  renderEmailInput(update) {
    return (
      <LoginInputSection>
        <LoginInput
          placeholder="Email"
          onChangeText={value => update({ field: 'email', value })}
          value={this.props.email}
        />
      </LoginInputSection>
    );
  }

  renderPasswordInput(update) {
    return (
      <LoginInputSection>
        <LoginInput
          secureTextEntry
          placeholder="Password"
          onChangeText={value => update({ field: 'password', value })}
          value={this.props.password}
        />
      </LoginInputSection>
    );
  }

  renderLoginButton() {
    if (this.props.loading) {
      return (
        <Spinner size="large" />
      );
    }
    if (this.state.newAccount) {
      return (
        <LoginButton onPress={this.onSignUpPress.bind(this)}>
          Sign Up
        </LoginButton>
      );
    }
    return (
      <LoginButton onPress={this.onSignInPress.bind(this)}>
        Sign In
      </LoginButton>
    );
  }

  renderNewAccountText() {
    let message;
    if (this.state.newAccount) {
      message = 'Already have an account?';
    } else {
      message = 'Create a new account';
    }
    return (
      <Text
        style={{ color: 'white' }}
        onPress={this.newAccountToggle.bind(this)}
      >
        {message}
      </Text>
    );
  }

  newAccountToggle() {
    this.setState({ newAccount: !this.state.newAccount });
    this.props.loginReset();
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
      logoLoginViewStyle,
      logoNewAccountViewStyle,
      logoTextStyle,
      loginButtonSectionStyle,
      newAccountTextStyle
     } = styles;
    const logoViewStyle =
      this.state.newAccount ? logoNewAccountViewStyle : logoLoginViewStyle
    ;
    const update = this.props.loginUpdate;

    return (
      <LinearGradient
        colors={['#ff0000', '#ff5050', '#cc3399']}
        style={linearGradientStyle}
      >
        <View style={containerViewStyle}>

            <View style={logoViewStyle}>
              <Text style={logoTextStyle}>Circle</Text>
            </View>

            {this.renderNewAccountFields(update)}
            {this.renderEmailInput(update)}
            {this.renderPasswordInput(update)}
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
    flex: 0.90,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  logoLoginViewStyle: {
    alignSelf: 'center',
    paddingBottom: 70
  },
  logoNewAccountViewStyle: {
    alignSelf: 'center',
    paddingBottom: 15
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
  const { email, password, firstName, lastName, phone, error, loading } = auth;
  return { email, password, firstName, lastName, phone, error, loading };
};

export default connect(mapStateToProps, {
  loginUser,
  loginUpdate,
  loginReset
})(LoginForm);
