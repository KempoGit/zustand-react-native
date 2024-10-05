import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../../config/theme';
import { useProfileStore } from '../../store/profile-store';
import { useCounterStore } from '../../store/counter-store';

export const HomeScreen = () => {

    const name = useProfileStore( state => state.name);
    const email = useProfileStore( state => state.email);
    const count = useCounterStore( state => state.count);

  return (
    <View style={ globalStyles.container }>
      <Text>Count: {count}</Text>
      <Text style={ globalStyles.title }>{name}</Text>
      <Text style={ globalStyles.title }>{email}</Text>
    </View>
  );
};
