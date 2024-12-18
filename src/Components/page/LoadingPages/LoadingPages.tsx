import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import BackgroundImg from "../../../../assets/svg/loading_background.svg"

export default function LoadingPages() {
  return (
    <View style={styles.root}>
      <View>
      <BackgroundImg />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: "relative",
  },
});
