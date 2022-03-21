import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
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
      description: 'Minha Loja disponível',
    });
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="Nome da Loja"
      />
      <TouchableOpacity onPress={pushStoreMarker}>
        <Text>Cadastrar Loja</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateStore;
