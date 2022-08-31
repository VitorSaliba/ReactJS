import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'

export default ({color='#25CCB0', title='Não informado', onPress}) => {
  return (
    <TouchableOpacity style={[styles.botao, {backgroundColor: color}]} onPress={onPress}>
      <Text style={styles.texto}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  botao: {
    height: 50,
    width: 150,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})