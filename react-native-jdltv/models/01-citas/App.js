import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const App = () => {

  const [ citas, setCitas] = useState([
    { id: "1", paciente: "Hook", propietario: "Juan", sintomas: "No Come"},
    { id: "1", paciente: "Redux", propietario: "Lucia", sintomas: "No Duerme"},
    { id: "1", paciente: "Native", propietario: "Román", sintomas: "No Canta"}
  ]);
  return (
  <View style={styles.contenedor}>
    <Text style={styles.titulo}>Administraor de Citas</Text>

    
    {/* {citas.map( cita => (
      <View>
        <Text>{cita.paciente}</Text>
      </View>
    ))} */}
  </View>
  );
};
const styles = StyleSheet.create({
 contenedor:{
   backgroundColor: '#AA076B',
   flex: 1
 },
  titulo: {
    color: '#FFF',
    marginTop: 40,
    fontSize:24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;