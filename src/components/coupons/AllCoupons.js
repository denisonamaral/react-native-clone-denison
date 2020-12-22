import React from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';
import Coupon from './Coupon';
import dataCoupons from './dataCoupons';

function AllCupons() {
  return (
    <View>
      <FlatList
        horizontal
        data={dataCoupons}
        keyExtractor={(item, i) => `${i}`}
        renderItem={({item}) => {
          return (
            <Coupon
              logoImg={item.logoImg}
              title={item.title}
              titleSecond={item.titleSecond}
              titleThird={item.titleThird}
              badge={item.badge}
            />
          );
        }}></FlatList>
    </View>
  );
}

export default AllCupons;
