import React from 'react';
import {View, FlatList} from 'react-native';
import SingleCategory from './singlecategory/SingleCategory';
import data from './dataCategories';

function Categories() {
  return (
    <View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item, i) => `${i}`}
        renderItem={({item}) => {
          return <SingleCategory title={item.title} color={item.color} />;
        }}></FlatList>
    </View>
  );
}

export default Categories;
