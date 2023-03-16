import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BLogo from './assets/svg/1.svg';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <BLogo width={150} height={150} />
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
