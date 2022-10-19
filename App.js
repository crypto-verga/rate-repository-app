import React, {useState} from 'react'
// import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import _raw from './data.xlsx'; //este archivo esta en mi ubicacion, contiene el texto "Hola Mundo!!..."
import * as XLSX from 'xlsx/xlsx.mjs';

export default function App() {
  const [raw, setRaw] = useState();
  
  fetch(_raw).then(res => { 
    return res.arrayBuffer();
  }).then(res => {
    const workbook = XLSX.read(new Uint8Array(res), {
        type: 'array'
    });
    const workBookSheets = workbook.SheetNames
    const datos =  XLSX.utils.sheet_to_json(workbook.Sheets[workBookSheets[0]])
    setRaw(datos)
  })
  
  
  console.log(raw)
  return (
    <div className="App">
      <div>
        <h1></h1>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
