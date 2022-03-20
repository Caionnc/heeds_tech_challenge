/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Component, useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Map Screen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4406a1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
