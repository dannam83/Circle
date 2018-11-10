import React from 'react';
import { TextInput, View } from 'react-native';

const LoginInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  loginContainerStyle,
  loginTextStyle,
  placeholderTextColor
}) => {
  const { inputStyle, viewStyle } = styles;

  return (
    <View style={[viewStyle, loginContainerStyle]}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={[inputStyle, loginTextStyle]}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#ffffff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  viewStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { LoginInput };
