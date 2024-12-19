import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import WelcomeArt from "../../../../assets/svg/welcome_page_art.svg";
import TextLogo from '../../../baseui/TextLogo/TextLogo';

const WelcomePage = () => {
  const handlePrivacyPolicyPress = () => {
    console.log("Privacy Policy Pressed");
  };

  const handleTeamServicePress = () => {
    console.log("Teams of Service Pressed");
  };

  const handleAgreeAndContinue = () => {
    console.log("Agree and Continue Pressed");
    // Ajoutez ici la logique pour continuer
  };

  return (
    <View style={styles.root}>
      <Text style={styles.titleStyle}>Welcome to FRANDERS</Text>
      {/* Rendre le SVG avec une taille */}
      <WelcomeArt width={200} height={200} />
      <Text style={styles.descStyle}>
        Read our{' '}
        <Text style={styles.linkStyle} onPress={handlePrivacyPolicyPress}>
          Privacy Policy
        </Text>
        . Tap Agree and continue to accept the{' '}
        <Text style={styles.linkStyle} onPress={handleTeamServicePress}>
          Terms of Service
        </Text>
        .
      </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={handleAgreeAndContinue}
      >
        <Text style={styles.buttonText}>AGREE AND CONTINUE</Text>
      </TouchableOpacity>
      <TextLogo />
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#fff", // Ajoutez une couleur de fond si nécessaire
    paddingTop: 10,
  },
  titleStyle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
  },
  contenStyle:{},
  LogoStyle:{},
  descStyle: {
    color: "#000",
    fontSize: 13,
    fontWeight: "400",
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  linkStyle: {
    color: "#0c42cc",
    textDecorationLine: "underline",
  },
  buttonStyle: {
    backgroundColor: "#00A884",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
