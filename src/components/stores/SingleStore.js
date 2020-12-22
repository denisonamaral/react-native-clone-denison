import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function SingleStore() {
  return (
    <View style={style.StoreComponent}>
      <Image
        style={style.LogoImg}
        source={{
          uri:
            'https://logos-world.net/wp-content/uploads/2020/04/McDonalds-Logo.png',
        }}
      />
      <View>
        <Text style={style.Title}>MC Donald's Restaurante</Text>
        <View></View>
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
    flexDirection: 'row',
  },
  LogoImg: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  Title: {
    color: 'white',
  },
});

export default SingleStore;
