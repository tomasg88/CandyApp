import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View} from 'react-native';
import {RootStackParamList} from '../App';

export const Analyze: FC<
  NativeStackScreenProps<RootStackParamList, 'Analyze'>
> = () => {
  return <View>Analyze</View>;
};
