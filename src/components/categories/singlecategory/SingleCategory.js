import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function CategorieOne(props) {
  return (
    <View style={[style.singleCategory, {backgroundColor: `${props.color}`}]}>
      <View style={style.icon} />
      <Text style={style.title}>{props.title}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  singleCategory: {
    width: 100,
    height: 120,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 15,
    margin: 10,
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 50,
    marginTop: 15,
    marginLeft: 50,
  },
});

export default CategorieOne;
