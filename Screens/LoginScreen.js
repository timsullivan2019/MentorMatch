import React, {useState} from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, Image, View } from 'react-native';
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";


function LoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== ""){
      signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Login Success"), navigation.navigate('HomeScreen'))
      .catch((err) => Alert.alert("Login error", err.message));
    }
  };
  
  return (
    <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} behavior="padding">
        <Image style = {{width: 100, height: 100}} source = {require('../assets/idea.png')} />
        <Text style={styles.title}>MentorMatch</Text>
        <Text style={styles.slogan}>Connecting people, creating opportunities</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value = {email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value = {password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}
        onPress = {onHandleLogin}
        >Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText} 
       onPress={() => navigation.navigate('RegisterScreen')} >Sign Up</Text>
      </TouchableOpacity>
      </View>
     

    </KeyboardAvoidingView>
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
        marginBottom: 12,
        marginTop: 12,
      },
      slogan: {
        fontSize: 16,
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
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      
})


export default LoginScreen;
