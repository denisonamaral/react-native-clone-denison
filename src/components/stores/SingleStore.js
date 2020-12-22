import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function SingleStore(props) {
  return (
    <View style={style.StoreComponent}>
      <View style={style.StoreBox}>
        <Image
          style={style.LogoImg}
          source={{
            uri: `${props.LogoImg}`,
          }}
        />
        <View style={style.ViewText}>
          <Text style={style.Title}>{props.Title}</Text>
          <View style={[style.Badge, {backgroundColor: `${props.BadgeColor}`}]}>
            <Text style={style.BadgeText}>{props.BadgeText}</Text>
          </View>
          <Image
            style={style.ImageStar}
            source={{uri: 'https://i.imgur.com/jV79n6m.png'}}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  StoreComponent: {
    width: 340,
    height: 80,
    marginTop: 9,
    marginLeft: 11,
    borderRadius: 4,
    borderWidth: 0.1,
    borderStyle: 'solid',
    borderColor: 'white',
  },
  StoreBox: {flexDirection: 'row', marginLeft: 15, marginTop: 10},
  ViewText: {
    marginLeft: 10,
  },
  LogoImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 2,
  },
  Title: {
    color: 'white',
    fontSize: 13,
    fontWeight: '700',
  },
  BadgeText: {
    color: 'white',
    fontSize: 10,
  },
  Badge: {
    marginTop: 3,
    width: 67,
    height: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStar: {
    marginTop: 3,
    width: 80,
    height: 15,
  },
});

export default SingleStore;
