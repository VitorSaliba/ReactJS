import React from 'react'
import {View, Text, Button, StyleSheet, Image} from 'react-native'
import Constants from 'expo-constants'

import TextInput from './TextInput'
import CustomButton from './CustomButton'
import Perfil from '../assets/perfil.png'

export default () => {
  return(
    <View style={styles.container}>
      <View>
        <Image source={Perfil} style={styles.imagem}/>
      </View>
      <View style={styles.inputArea}>
        <TextInput />
      </View>
      <View style={styles.botoes}>
        <CustomButton 
          color='#1899c5' 
          title='Entrar' 
          onPress={() => alert('Entrou')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b4bdc2'
  },

  inputArea: {
    justifyContent: 'space-around',
    padding: '5%'
  },

  imagem: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },

  botoes: {
    
  }
})