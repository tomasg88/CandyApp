import React, {FC} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Section} from '../components/section/Section';
import {RootStackParamList} from '../App';

export const Home: FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = ({
  navigation,
}) => {
  return (
    <View style={homeStyles.container}>
      <Section title="Bienvenido">
        <Button onPress={() => navigation.navigate('List')} title="Comenzar" />
      </Section>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
});
