/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Component, useEffect, useState} from 'react';
import {View, StyleSheet, Animated, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//import {Actions} from 'react-native-router-flux';
//Logo Import
const logoCluckinBell = require('../../assets/images/logoCluckinBell.png');

const SplashScreen = () => {
  const [logoAnim, setLogoAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  const switchToHomeScreen = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    Animated.timing(logoAnim, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: false,
    }).start();
  });

  setTimeout(switchToHomeScreen, 4200);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: logoAnim,
        }}>
        <Image source={logoCluckinBell} />
      </Animated.View>
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
