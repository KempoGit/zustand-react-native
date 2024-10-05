import React, { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { globalStyles } from '../../../config/theme';
import { useCounterStore } from '../../store/counter-store';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
    const count = useCounterStore( state => state.count);
    const incrementBy = useCounterStore( state => state.incrementBy);

    const navigator = useNavigation();

    useEffect(() => {

        navigator.setOptions({
            title: 'Contador ' + count,
        });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);


  return (
    <View style={ globalStyles.container }>
      <Text>Count: {count}</Text>
      <Pressable
        style={ globalStyles.primaryButton }
        onPress={ () => incrementBy(+1) }>
        <Text>+1</Text>
      </Pressable>
      <Pressable
        style={ globalStyles.primaryButton }
        onPress={ () => incrementBy(-1) }>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
