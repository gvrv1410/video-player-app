import {View, StyleSheet} from 'react-native';
import React from 'react';

const Divider = () => {
  return <View style={style.divider} />;
};

const style = StyleSheet.create({
  divider: {
    height: 10,
  },
});

export default Divider;
