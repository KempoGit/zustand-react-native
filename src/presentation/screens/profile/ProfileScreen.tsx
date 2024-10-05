import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { globalStyles } from '../../../config/theme';
import { useProfileStore } from '../../store/profile-store';

export const ProfileScreen = () => {

    const name = useProfileStore( state => state.name);
    const email = useProfileStore( state => state.email);
    const changeProfile = useProfileStore( state => state.changeProfile);

  return (
    <View style={ globalStyles.container }>
      <Text style={ globalStyles.title }>{name}</Text>
      <Text style={ globalStyles.title }>{email}</Text>

      <Pressable
        style={ globalStyles.primaryButton }
        onPress={ () => useProfileStore.setState( { name: 'Gaston'} ) }>
        <Text>Cambiar Nombre</Text>
      </Pressable>

      <Pressable
        style={ globalStyles.primaryButton }
        onPress={ () => useProfileStore.setState( { email: 'gaston@gmail.com'} ) }>
        <Text>Cambiar Email</Text>
      </Pressable>

      <Pressable
        style={ globalStyles.primaryButton }
        onPress={ () => changeProfile('John Doe', 'john.doe@gmail.com') }>
        <Text>Regresar a John</Text>
      </Pressable>
    </View>
  );
};
