import React from 'react';
import {Text} from 'react-native';

function Title(props) {
  return <Text style={style.Title}>{props.name}</Text>;
}

const style = {
  Title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 9,
  },
};

export default Title;
