import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SuaLoi = () => {
  return (
    <View style={styles.container}>
      <Text>Sua Loi</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F8FB',
    flex: 1,
  },
});
export default SuaLoi;
