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
  const [text, setOnChangeText] = useState('');
  const [latitude, setOnChangeLatitude] = useState('');
  const [longitude, setOnChangeLongitude] = useState('');
  const [description, setOnChangeDescription] = useState('');

  const {pushStore} = useStores();
  const navigation = useNavigation();

  const pushStoreMarker = () => {
    pushStore({
      latlng: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      title: text,
      description: description,
    });
    navigation.goBack();
  };

  /*const castLatAndLong = () => {
    setOnChangeLatitude(latitude);
    setOnChangeLongitude(longitude);
  };*/

  // const handleChangeTextToNumberLat = () => {
  //   let auxLat = latitude;
  //   setOnChangeLatitude(String(auxLat));
  // };

  // const handleChangeTextToNumberLong = () => {
  //   let newTextInputValue = '***' + text;
  //   this.setState({
  //     textInputValue: String(newTextInputValue),
  //   });
  // };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setOnChangeText}
        value={text}
        placeholder="Restaurant's Name"
      />
      <TextInput
        onChangeText={setOnChangeLatitude}
        keyboardType="numeric"
        value={latitude}
        placeholder="Latitude"
      />
      <TextInput
        onChangeText={setOnChangeLongitude}
        keyboardType="numeric"
        value={longitude}
        placeholder="Longitude"
      />
      <TextInput
        onChangeText={setOnChangeDescription}
        value={description}
        placeholder="Restaurant's Description"
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
    color: 'white',
  },
});
