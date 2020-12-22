import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function CouponBadge(props) {
  return (
    <View style={style.Badge}>
      <Text style={style.Text}>{props.name}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  Badge: {
    width: 46,
    height: 15,
    backgroundColor: 'rgb(73, 51, 1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  Text: {
    color: 'white',
    fontSize: 9,
  },
});

export default CouponBadge;
