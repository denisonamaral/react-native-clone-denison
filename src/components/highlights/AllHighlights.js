import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Highlight from './Highlight';
import dataHighlights from './dataHighlights';

function AllHighlights() {
  return (
    <View>
      <FlatList
        horizontal
        data={dataHighlights}
        keyExtractor={(item, i) => `${i}`}
        renderItem={({item}) => {
          return (
            <Highlight
              description={item.description}
              logo={item.logo}
              backgroundImage={item.backgroundImage}
            />
          );
        }}></FlatList>
    </View>
  );
}

export default AllHighlights;
