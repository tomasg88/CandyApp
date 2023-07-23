import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../App';

export const List: FC<
  NativeStackScreenProps<RootStackParamList, 'List'>
> = () => {
  // 1. Loading screen when loading
  // 2. Empty list if !loading && !list
  // 3. List if !loading && list

  return (
    <View>
      <Text>List</Text>
    </View>
  );
};
