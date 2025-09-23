import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ top: 100, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }}>Créer un compte</Text>
      <Entypo name="user" size={48} color="black" style={{ margin: 30 }} />
      <TextInput
        placeholder="Email"
        placeholderTextColor="white"
        style={[localStyles.input, localStyles.inputText]}
      />
      <TextInput
        placeholder="Mot de passe"
        placeholderTextColor="white"
        style={[localStyles.input, localStyles.inputText]}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirmer le mot de passe"
        placeholderTextColor="white"
        style={[localStyles.input, localStyles.inputText]}
        secureTextEntry
      />
      <TouchableOpacity style={localStyles.button} onPress={() => { }}>
        <Text style={localStyles.buttonText}>Crée le compte</Text>
      </TouchableOpacity>
    </View>
  );
}

import { StyleSheet } from 'react-native';

const localStyles = StyleSheet.create({
  input: {
    backgroundColor: '#0a52138f',
    color: 'white',
    height: 60,
    width: Dimensions.get('window').width - 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000ff',
    margin: 10,
    paddingHorizontal: 10,
  },

  inputText: {
    color: "white",
    fontSize: 16,
  },

  button: {
    backgroundColor: "#0a52138f",
    height: 60,
    width: Dimensions.get("window").width - 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000000ff",
    margin: 10,
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  buttonText: {
    color: "white", // texte blanc
    fontSize: 18,
    fontWeight: "bold" as const,
  },
});