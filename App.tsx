import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingPages from './src/Components/page/LoadingPages/LoadingPages';
import WelcomePage from './src/Components/page/WelcomePage/WelcomePage';
import OtpPage from './src/Components/page/Otp/OtpPage';

// Déclaration du type pour les noms d'écran (utile pour éviter les erreurs dans la navigation)
type RootStackParamList = {
  Loading_Page: undefined;
  Welcome_Page: undefined;
  Otp_Page: undefined;
};

// Création du stack avec typage
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome_Page"
        screenOptions={{
          headerShown: false, // Désactiver les en-têtes par défaut
        }}
      >
        <Stack.Screen name="Loading_Page" component={LoadingPages} />
        <Stack.Screen name="Welcome_Page" component={WelcomePage} />
        <Stack.Screen name="Otp_Page" component={OtpPage} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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
