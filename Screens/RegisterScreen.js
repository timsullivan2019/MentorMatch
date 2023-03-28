import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput, TouchableOpacity, useState, Alert} from 'react-native';

function RegisterScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Image style = {{width: 100, height: 100}} source = {require('../assets/idea.png')} />

      <Text style={styles.title}>MentorMatch</Text>
      <Text style={styles.slogan}>Connecting people, creating opportunities</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} 
        onPress={() => navigation.navigate('MatchScreen')}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
      },
    input: {
      height: 48,
      width: '80%',
      marginVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    button: {
      backgroundColor: 'purple',
      borderRadius: 5,
      paddingVertical: 12,
      paddingHorizontal: 24,
      marginTop: 24,
      marginLeft: 10,
      width: 125
    },
    slogan: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 24,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
    },
})
export default RegisterScreen;
