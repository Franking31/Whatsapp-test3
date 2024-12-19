import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoadingPages from './src/Components/page/LoadingPages/LoadingPages';
import WelcomePage from './src/Components/page/WelcomePage/WelcomePage';
export default function App() {
  return (
    <View style={styles.container}>
    <LoadingPages />
    { /* <WelcomePage />*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
