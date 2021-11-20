import React, {useState, useEffect} from 'react';
import { StyleSheet, Image, ScrollView, View, ActivityIndicator} from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import Pricing from './components/Pricing';

const App = () => {
  const [ moneda, setMoneda ] = useState('');
  const [ criptomoneda, setCriptomoneda ] = useState('');
  const [ consultarAPI, setConsultarAPI ] = useState(false);
  const [ resultado, setResultado ] = useState({});
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () =>{
      if(consultarAPI){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const res = await axios.get(url);

        setLoading(true);
        //Oculta el spinner y muestra el resultado
        setTimeout(()=>{
          setResultado(res.data.DISPLAY[criptomoneda][moneda]);
          setConsultarAPI(false);
          setLoading(false);
        }, 3000);
      }
    }
    cotizarCriptomoneda();
  }, [consultarAPI]);

  //mostrar el spinner o el resultado
  const componente = loading ? <ActivityIndicato size="large" color="#5E49E2"/> : <Pricing resultado={resultado} />;

  return (
    <>
      <ScrollView>
        <Header/>
        <Image
          style={styles.imagen}
          source={ require('./assets/img/cryptomonedas.png') }
        />

        <View style={styles.contenido}>
          <Form 
            moneda={moneda} 
            criptomoneda={criptomoneda}
            setMoneda={setMoneda}
            setCriptomoneda={setCriptomoneda}
            setConsultarAPI={setConsultarAPI}
          />
        </View>
        <View style={{marginTop:40}}>
          {componente}
        </View>

      </ScrollView>
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