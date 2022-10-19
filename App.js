import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import _raw from './data.xlsx' //este archivo esta en mi ubicacion, contiene el texto "Hola Mundo!!..."
import * as XLSX from 'xlsx/xlsx.mjs'

const splitData = res => {
  const workbook = XLSX.read(new Uint8Array(res), {
      type: 'array'
  });
  const workBookSheets = workbook.SheetNames
  const datos =  XLSX.utils.sheet_to_json(workbook.Sheets[workBookSheets[0]])

  return datos
}

function exceldata(){
  const [datos, setDatos] = useState()
  
  fetch(_raw)
    .then(res => { return res.arrayBuffer() })
    .then(splitData)
    .then(data => {
      
      console.log(data)
      setDatos(data)
    })

  return datos
}

console.log(exceldata())

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Pepe!</Text>
      <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
