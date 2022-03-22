import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useStores} from '../../contexts/use-store';

const CreateStore = () => {
  const [text, onChangeText] = useState('');
  const {pushStore} = useStores();
  const navigation = useNavigation();

  const pushStoreMarker = () => {
    pushStore({
      latlng: {
        latitude: -7.115,
        longitude: -34.86306,
      },
      title: text,
      description: 'Available Restaurant',
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="Restaurant's Name"
      />
      <TouchableOpacity
        onPress={pushStoreMarker}
        style={styles.registrationButton}>
        <Text>Create Restaurant's Marker</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateStore;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  registrationButton: {
    borderRadius: 15,
    color: 'black',
    backgroundColor: '#dc4b3e',
    padding: 16,
  },
  textButton: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});
