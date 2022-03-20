import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4406a1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
