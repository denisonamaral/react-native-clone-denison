import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

function Highlight(props) {
  return (
    <ImageBackground
      style={style.Highlight}
      source={{
        uri: `${props.backgroundImage}`,
      }}>
      <View>
        <Image
          source={{
            uri: `${props.logo}`,
          }}
          style={style.Img}
        />
      </View>

      <Text style={style.Title}>{props.description}</Text>
      <Image
        style={style.ImageStar}
        source={{uri: 'https://i.imgur.com/jV79n6m.png'}}
      />
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  Highlight: {
    marginTop: 11,
    marginLeft: 9,
    width: 300,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
  },
  Title: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
    marginTop: 2,
    marginLeft: 10,
  },
  Img: {
    marginLeft: 10,
    marginTop: 7,
    width: 45,
    height: 45,
  },
  ImageStar: {
    marginTop: 3,
    marginLeft: 10,
    width: 80,
    height: 15,
  },
});

export default Highlight;
