import React from 'react';
import { TextInput, View } from 'react-native';

const LoginInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  containerStyle,
  textStyle,
  placeholderTextColor
}) => {
  const { inputStyle, viewStyle } = styles;

  return (
    <View style={[viewStyle, containerStyle]}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={[inputStyle, textStyle]}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
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
