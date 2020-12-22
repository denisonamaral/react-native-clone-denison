import React from 'react';
import {View, StyleSheet} from 'react-native';

// Components
import Categories from './components/categories/Categories';
import Title from './components/titles/Title';
import AllHighlights from './components/highlights/AllHighlights';
import AllCupons from './components/coupons/AllCoupons';
import Stores from './components/stores/Stores';

function App() {
  return (
    <View style={style.App}>
      <Categories />
      <Title name="Em destaque" />
      <AllHighlights />
      <Title name="Cupons" />
      <AllCupons />
      <Title name="Lojas" />
      <Stores />
    </View>
  );
}

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    backgroundColor: 'rgb(18, 18, 18)',
  },
});

export default App;
