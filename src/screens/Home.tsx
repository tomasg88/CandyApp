import React, {FC} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import {Section} from '../components/section/Section';
import {RootStackParamList} from '../App';

export const Home: FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = ({
  navigation,
}) => {
  return (
    <View style={homeStyles.container}>
      <Section title="See Your Changes">
        <ReloadInstructions />
      </Section>
      <Button title="Un Botón" onPress={() => navigation.navigate('List')} />
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#878787',
  },
});
