import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import DropDown from "../../../../assets/svg/dropdown.svg"

type RootStackParamList = {
  Welcome_Page: undefined; // Nom exact du screen défini dans App.tsx
  Login_Page: undefined;
};

// Props pour l'écran LoginPage
type Props = NativeStackScreenProps<RootStackParamList, 'Welcome_Page'>;

const LoginPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleAgreeAndContinue = () => {
    console.log("Agree and Continue Pressed");
    navigation.navigate("Welcome_Page"); // Nom corrigé pour correspondre au Stack.Navigator
  };
  const handleWhatsmynumber = () => {
    console.log(" What's my number?");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentStyle}>
        <Text style={styles.titleStyle}>Enter your phone number</Text>
        <Text style={styles.descStyle}>
          Franders will need to verify your phone number. 
          <Text  style={styles.linkStyle} onPress={handleWhatsmynumber}>
            What's my number?
            </Text> 
        </Text>
        <View style = { styles.inputViewStyle}>
        <View style ={ styles.countryButtonView}>
          <Text>
            India
          </Text>
          <DropDown />
        </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={handleAgreeAndContinue}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    
  },
  contentStyle: {
    marginTop: "25%", // Descend le titre et le texte descriptif
    alignItems: "center",
    
  },
  titleStyle: {
    color: "#000",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    letterSpacing: 0.3,
    marginBottom: 10, // Ajoute un espace entre le titre et le texte descriptif
    
  },
  descStyle: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginHorizontal: 30,
    paddingTop:30,
  },
  linkStyle: {
    color: "#0c42cc",
    textDecorationLine: "underline",
  },
  inputViewStyle:{
    borderBottomWidth: 0.5,
    borderBottomColor: "#00A884"
  },
  countryButtonView:{
    display:"flex",
    flexDirection:"row"
  },
  buttonStyle: {
    position: "absolute",
    bottom: 20, // Contrôle la distance avec la barre de navigation
    alignSelf: "center",
    backgroundColor: "#00A884",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom:90,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
