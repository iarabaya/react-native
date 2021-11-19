import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { 
  Text, 
  StyleSheet, 
  View, 
  TextInput,
  Button,
  TouchableHighlight
 } from 'react-native';

import React from 'react'

function Form() {

  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    const opciones = { year: 'numeric', month: 'long', day:'2-digit' }
    // console.log(date.toLocaleDateString('es-ES', opciones));
    setFecha(date.toLocaleDateString('es-ES', opciones));
    hideDatePicker();
  };

  //Muestra y oculta el Time Picker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    const opciones = { hour12: false, hour:'numeric', minute:'2-digit'}
    setHora(time.toLocaleString('es-ES', opciones));
    hideTimePicker();
  };

  const crearNuevaCita = () =>{

  }

  return (
    <>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            onChangeText={ text => setPaciente(text) }
          />
        </View>
        <View>
          <Text style={styles.label}>Propietario:</Text>
          <TextInput
            style={styles.input}
            onChangeText={ text => setPropietario(text) }
          />
        </View>
        <View>
          <Text style={styles.label}>Telefono de contacto:</Text>
          <TextInput
            style={styles.input}
            onChangeText={ text => setTelefono(text)}
            keyboardType='numeric'
          />
        </View>

        <View>
          <Text style={styles.label}>Fecha:</Text>
          <Button title="Seleccionar fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            locale='es_ES'
          />
          <Text>{fecha}</Text>
        </View>

        <View>
          <Text style={styles.label}>Hora:</Text>
          <Button title="Seleccionar hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
            locale='es_ES'
            is24Hour
          />
          <Text>{hora}</Text>
        </View>

        <View>
          <Text style={styles.label}>Sintomas:</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={ text => setSintomas(text)}
          />
        </View>
        <View>
        <TouchableHighlight onPress={() => crearNuevaCita()} style={styles.btnSubmit}>
          <Text style={styles.txtEliminar}> Crear nueva cita </Text>
        </TouchableHighlight>
      </View>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  form:{
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10
  },
  textSubmit: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign:'center'
  }
})

export default Form
