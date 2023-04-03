import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  ImageBackground,
  Text,
} from 'react-native'

import RegistrationScreen from './Screens/RegistrationScreen.jsx'
import LoginScreen from './Screens/LoginScreen.jsx'

export default function App() {
  const [isRegistered, setIsRegistered] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const nameHandler = (text) => setName(text)
  const passwordHandler = (text) => setPassword(text)

  const onRegister = () => {
    setIsRegistered(true)
  }

  const onLogin = () => {
    Alert.alert('Credentials', `${name} + ${password}`)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('./assets/images/BG.jpg')}
        >
          <Text style={styles.text}>Inside</Text>
        </ImageBackground>
        {isRegistered ? (
          <LoginScreen
            name={name}
            password={password}
            nameHandler={nameHandler}
            passwordHandler={passwordHandler}
            onLogin={onLogin}
          />
        ) : (
          <RegistrationScreen
            name={name}
            password={password}
            nameHandler={nameHandler}
            passwordHandler={passwordHandler}
            onRegister={onRegister}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})
