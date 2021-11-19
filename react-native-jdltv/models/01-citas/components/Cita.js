import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
const Cita = ({cita, eliminarPaciente}) => {

  const dialogoEliminar = (id) =>{
    console.log('Eliminando...', id);
    eliminarPaciente(id);
  }
  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <Text>{cita.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario:</Text>
        <Text>{cita.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas:</Text>
        <Text>{cita.sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight onPress={() => dialogoEliminar(cita.id)} style={styles.btnEliminar}>
          <Text style={styles.txtEliminar}> Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

//<Button title="Eliminar"/> es nativo, no se puede modificar el style
const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
  },
  text: {
    fontSize: 18
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: red,
    marginVertical: 10
  },
  txtEliminar: {
    color:'#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
export default Cita
