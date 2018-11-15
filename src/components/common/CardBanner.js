import React from 'react';
import { Text, View, Image } from 'react-native';
import { CardSection } from './CardSection';

const CardBanner = ({ post }) => {
  // const {
  //   author,
  //   postType,
  //   thumbnail_image,
  // } = post;

  const {
    // thumbnailStyle,
    headerContentStyle,
    // thumbnailContainerStyle,
    headerTextStyle,
  } = styles;

  return (
    <CardSection>
      <View style={headerContentStyle}>
      <Text style={headerTextStyle}>author</Text>
      <Text>postType</Text>
      </View>
    </CardSection>

  );
};
// <View style={thumbnailContainerStyle}>
// <Image
// style={thumbnailStyle}
// source={{ uri: thumbnail_image }}
// />

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export { CardBanner };
