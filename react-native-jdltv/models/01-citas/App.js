import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import Cita from './components/Cita';
import Form from './components/Form';


/* ej array de citas
[
  { id: "1", paciente: "Hook", propietario: "Juan", sintomas: "No Come"},
  { id: "1", paciente: "Redux", propietario: "Lucia", sintomas: "No Duerme"},
  { id: "1", paciente: "Native", propietario: "Román", sintomas: "No Canta"}
]
*/

const App = () => {

  const [showForm, setShowForm]= useState(false);
  const [ citas, setCitas] = useState([]);

  //Elimina los pacientes del state
  const eliminarPaciente = id => {
    setCitas( (citasActuales) => {
      return citasActuales.filter( cita => cita.id !== id )
    })
  }

  //muestra u oculta el formulario dependiendo el estado showForm
  const handleShowForm = () =>{
    setShowForm(!showForm);
  }

  const closeKeyboard = () =>{
    Keyboard.dismiss();
  }
  return (
    <TouchableWithoutFeedback onPress={()=>closeKeyboard()}>
      <View style={styles.contenedor}>

        <Text style={styles.titulo}>Administrador de Citas</Text>
        <View>
          <TouchableHighlight onPress={() => handleShowForm() } style={styles.btnShow}>
            <Text style={styles.textShow}>{ showForm ? 'Cancelar nueva cita' : 'Crear nueva cita'}</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.contenido}>
          {
            showForm ? (
              <>
                <Text style={styles.titulo}>Crear nueva cita</Text>
                <Form 
                  citas={citas} 
                  setCitas={setCitas}
                  setShowForm={setShowForm}
                />
              </>
            ) : (
              <>
                <Text style={styles.titulo}>{ citas.length > 0?'Administra tus citas': 'No hay citas, agrega una' }</Text>
                <FlatList
                  style={styles.listado}
                  data={citas}
                  renderItem={ (item) => <Cita cita={item} eliminarPaciente={eliminarPaciente}/>}
                  keyExtractor={ cita => cita.id }
                  // renderItem={ (item) => (
                  //   <View>
                  //     <Text>{item.paciente}</Text>
                  //   </View>
                  // )/>}
                />
              </>
            )
          }
        </View>
        {/* {citas.map( cita => (
          <View>
            <Text>{cita.paciente}</Text>
          </View>
        ))} */}
      </View>
  </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
 contenedor:{
   backgroundColor: '#AA076B',
   flex: 1
 },
 contenido:{
   flex: 1, //crece a todo el espacio disponible
   marginHorizontal: '2.5%',

 },
  titulo: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios'? 40 : 20,
    marginBottom: 20,
    fontSize:24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listado:{
    flex: 1,

  },
  btnShow: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10
  },
  textShow: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign:'center'
  }
});

export default App;