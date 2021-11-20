import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';

const Form = () => {
  const [ moneda, setMoneda ] = useState('');
  const [ criptomoneda, setCriptomoneda ] = useState('');
  const [ criptomonedas, setCriptomonedas ] = useState([]);

  useEffect(() => {
    const apiRequest = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const result = await axios.get(url);

      console.log(result);
      setCriptomonedas(result.data.Data);
    }
  }, []);

  //Almacena las selecciones del usuario
  const getCoin = moneda => {
    // console.log(moneda);
    setMoneda(moneda);
  }

  const getCryptoCoin = cripto => {
    // console.log(cripto);
    setCriptomoneda(cripto);
  }

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
        <Picker
          onValueChange={ value => getCoin(value) }
          selectedValue={moneda}
          itemStyle={{ height: 120 }}
        >
          <Picker.Item label="-Seleccione" value=""/>
          <Picker.Item label="Dolar de Estados Unidos" value="USD"/>
          <Picker.Item label="Peso Argentino" value="ARS"/>
          <Picker.Item label="Libra Esterlina" value="GBP"/>
          <Picker.Item label="Euro" value="EUR"/>
        </Picker>

      <Text style={styles.label}>Criptomoneda</Text>

      <Picker
       onValueChange={ value => getCryptoCoin(value) }
       selectedValue={criptomoneda}
       itemStyle={{ height: 120 }}
      >
       <Picker.Item label="-Seleccione" value=""/>
        { criptomonedas.map( (cripto) =>{
          return <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name}/>
        })}
        </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    fontSize: 22,
    marginVertical: 20,
    textTransform: 'uppercase'
  }
})

export default Form;
