import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const RutTien = () => {
  return (
    <View style={styles.container}>
      <Text>Rut Tien</Text>
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
export default RutTien;
