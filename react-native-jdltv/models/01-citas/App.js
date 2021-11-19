import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Cita from './components/Cita';
const App = () => {

  const [ citas, setCitas] = useState([
    { id: "1", paciente: "Hook", propietario: "Juan", sintomas: "No Come"},
    { id: "1", paciente: "Redux", propietario: "Lucia", sintomas: "No Duerme"},
    { id: "1", paciente: "Native", propietario: "Román", sintomas: "No Canta"}
  ]);


  //Elimina los pacientes del state
  const eliminarPaciente = id => {
    setCitas( (citasActuales) => {
      return citasActuales.filter( cita => cita.id !== id )
    })
  }

  return (
  <View style={styles.contenedor}>
    <Text style={styles.titulo}>Administraor de Citas</Text>

    <Text style={styles.titulo}>{ citas.length > 0?'Administra tus citas': 'No hay citas, agrega una' }</Text>
    <FlatList
      data={citas}
      renderItem={ (item) => <Cita cita={item} eliminarPaciente={eliminarPaciente}/>}
      keyExtractor={ cita => cita.id }
      // renderItem={ (item) => (
      //   <View>
      //     <Text>{item.paciente}</Text>
      //   </View>
      // )/>}
    />
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
    marginBottom: 20,
    fontSize:24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;