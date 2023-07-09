import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../App';

export const List: FC<
  NativeStackScreenProps<RootStackParamList, 'List'>
> = () => {
  return (
    <View>
      <Text>List</Text>
    </View>
  );
};
