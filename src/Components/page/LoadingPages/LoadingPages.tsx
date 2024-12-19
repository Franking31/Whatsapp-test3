import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import BackgroundImg from "../../../../assets/svg/loading_background.svg";
import LOGO from "../../../../assets/svg/Franders (2).svg"


export default function LoadingPages() {
  return (
    <View style={styles.root}>
      <View style={styles.bgStyleView}>
      <BackgroundImg />
      </View>
      <View style={styles.contentViewStyle}>
        <LOGO width="78" height="78" />
        <Text style={styles.titleStyle}>
            Franders
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
    //flexDirection: "row",
  },
  titleStyle:{
    color:"#000",
    fontSize: 35,
    fontWeight: "500",
    marginTop: 12,
  }

});
