import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import BackgroundImg from "../../../../assets/svg/loading_background.svg";
import LOGO from "../../../../assets/svg/Franders.svg"

export default function LoadingPages() {
  return (
    <View style={styles.root}>
      <View style={styles.bgStyleView}>
      <BackgroundImg />
      </View>
      <View style={styles.contentViewStyle}>
        <LOGO />
        <Text>
            Franksapp
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: "relative",
    width: "100%",
  },
  bgStyleView: {
    width: "100%",
  },
  contentViewStyle:{
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    width:"100%",
    height:"100%",
  },

});
