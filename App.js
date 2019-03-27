import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
          altura: '', 
          massa: '', 
          resultado: 0, 
          resultadoText: ''
      }
    this.calcular = this.calcular.bind(this)
  }

  calcular() {
    if(!this.state.massa || !this.state.altura) {
      Alert.alert(
        'Atenção', 
        'Preencha os campos de Peso e Altura', 
        [
          {text: 'Vou preencher'}
        ],
      {cancelable: true})
     } else {
      let imc = this.state.massa / (this.state.altura * this.state.altura)
      let resultado;
      let resultadoText;
      resultado = imc
  
      if(resultado < 16) {
        resultadoText = 'Magreza Grave'
      } else if(resultado < 17) {
        resultadoText = 'Magreza Moderada'
      } else if(resultado < 18.5) {
        resultadoText = 'Magreza Leve'
      } else if(resultado < 25) {
        resultadoText = 'Saudável'
      } else if(resultado < 30) {
        resultadoText = 'Sobrepeso'
      } else if(resultado < 35) {
        resultadoText = 'Obesidade Grau I'
      } else if(resultado < 40) {
        resultadoText = 'Obesidade Grau II'
      } else if(resultado >= 40) {
        resultadoText = 'Obesidade Grau III'  
      } else if(resultado == 'NaN') {
        resultado = 0.00
      } else {
        resultado = 0.00; 
      } 
      this.setState({
        resultado,
        resultadoText
      });
    }
  }

  changePeso = (massa) => {
    massa = massa.replace(',', '.');
    this.setState({
      massa: massa
    })
  }

  render() {
    return (
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding">
          <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
          <Text style={[styles.resultado, {fontSize: 35}]}>{this.state.resultadoText}</Text> 
          <View style={styles.entradas}> 
            <TextInput 
              placeholder="Peso" 
              keyboardType="numeric" 
              style={styles.input} 
              onChangeText={ this.changePeso }
              value={ this.state.massa } />
            <TextInput 
              placeholder="Altura" 
              keyboardType="numeric"  
              style={styles.input} 
              onChangeText={(altura)=>{this.setState({altura})}}/>
          </View>
          <TouchableOpacity style={styles.button} onPress={(this.calcular)}><Text style={styles.buttonText}>C a l c u l a r</Text></TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }, 
  entradas: {
    flexDirection: 'row'
  },
  input: {
    height: 80,
    textAlign: "center",
    width: '50%', 
    fontSize: 35, 
    marginTop: 18
  }, 
  button: {
    backgroundColor:"#89ffa5",
    margin: 8
  }, 
  buttonText: {
    alignSelf: 'center', 
    padding: 25, 
    fontSize: 25, 
    color: '#6dc4a4', 
    fontWeight: 'bold'
  }, 
  resultado: {
    alignSelf: 'center', 
    color: 'lightgray', 
    fontSize: 40, 
    padding: 15
   }
});