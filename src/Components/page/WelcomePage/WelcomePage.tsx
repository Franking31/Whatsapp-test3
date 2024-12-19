import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import WelcomeArt from "../../../../assets/svg/welcome_page_art.svg";
import TextLogo from '../../../baseui/TextLogo/TextLogo';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Définir le type des paramètres pour la navigation
type RootStackParamList = {
  Welcome_Page: undefined;
  Otp_Page: undefined;
};

// Props pour l'écran WelcomePage
type Props = NativeStackScreenProps<RootStackParamList, 'Welcome_Page'>;

const WelcomePage: React.FC<Props> = ({ navigation }) => {
  const handlePrivacyPolicyPress = () => {
    console.log("Privacy Policy Pressed");
  };

  const handleTeamServicePress = () => {
    console.log("Terms of Service Pressed");
  };

  const handleAgreeAndContinue = () => {
    console.log("Agree and Continue Pressed");
    navigation.navigate('Otp_Page'); // Navigation vers l'écran OTP
  };

  return (
    <View style={styles.root}>
      {/* Titre */}
      <Text style={styles.titleStyle}>Welcome to FRANDERS</Text>

      {/* Illustration */}
      <View style={styles.imageContainer}>
        <WelcomeArt width={250} height={250} />
      </View>

      {/* Texte explicatif */}
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

      {/* Bouton */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={handleAgreeAndContinue}
      >
        <Text style={styles.buttonText}>AGREE AND CONTINUE</Text>
      </TouchableOpacity>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <TextLogo />
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  titleStyle: {
    marginTop: 50,
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  descStyle: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    marginHorizontal: 30,
    marginBottom: 20,
  },
  linkStyle: {
    color: "#0c42cc",
    textDecorationLine: "underline",
  },
  buttonStyle: {
    backgroundColor: "#00A884",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
});
