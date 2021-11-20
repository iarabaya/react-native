import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text
} from 'react-native';
import Header from './components/Header';
import Form from './components/Form';

const App = () => {
  return (
    <>
      <Header/>
      <Image
        style={styles.imagen}
        source={ require('./assets/img/cryptomonedas.png') }
      />

      <View style={styles.contenido}>
        <Form/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imagen:{
    width: '100%',
    height:150,
    marginHorizontal: '2.5%',

  },
  contenido: {
    marginHorizontal: '2.5%'
  }
});

export default App