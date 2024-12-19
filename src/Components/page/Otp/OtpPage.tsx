import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OtpPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>OtpPage</Text>
    </View>
  );
};

export default OtpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});
