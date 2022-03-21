import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useStores} from '../../contexts/use-store';

const Home = () => {
  const {stores} = useStores();

  const navigation = useNavigation();

  const pushCreateStore = () => {
    navigation.navigate('CreateStore');
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: -7.115,
          longitude: -34.86306,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {stores.map((store, index) => (
          <Marker
            key={index}
            coordinate={store.latlng}
            title={store.title}
            description={store.description}
          />
        ))}
      </MapView>
      <TouchableOpacity
        onPress={pushCreateStore}
        style={{
          backgroundColor: 'black',
          marginBottom: 120,
          padding: 16,
        }}>
        <Text style={{color: 'white'}}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
