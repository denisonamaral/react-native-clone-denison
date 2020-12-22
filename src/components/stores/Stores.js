import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import SingleStore from './SingleStore';
import dataStore from './dataStore';

function Stores() {
  return (
    <View style={style.Stores}>
      <FlatList
        data={dataStore}
        keyExtractor={(item, i) => `${i}`}
        renderItem={({item}) => {
          return (
            <SingleStore
              LogoImg={item.LogoImg}
              Title={item.Title}
              BadgeText={item.BadgeText}
              BadgeColor={item.BadgeColor}
            />
          );
        }}></FlatList>
    </View>
  );
}

const style = StyleSheet.create({
  Stores: {
    marginTop: 10,
  },
});

export default Stores;
