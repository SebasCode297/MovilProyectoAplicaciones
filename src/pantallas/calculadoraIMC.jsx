import { useState } from 'react';
import {Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { styles } from './CalculadoraIMC.styles';

export const CalculadoraIMC = ()=>{
  const[peso, setPeso]=useState();
  const [altura, setAltura]=useState();
  
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Calculadora IMC</Text>
      <Text style={styles.texto2}>Bienvenido al programa para calcular su indice de masa corporal, la formula para calcularlo es: </Text>

      <Image style={styles.imagen} source={{uri: "https://masqueprogramar.wordpress.com/wp-content/uploads/2017/03/formulaimc.png"}}/>
      <Image style={styles.imagen} source={require('../../assets/icon.png')}/>

      <TextInput onChangeText={(value)=>setPeso(value)} style={styles.textInput} keyboardType='numeric' placeholder='Ingrese su Peso(kg):'></TextInput>
      <TextInput onChangeText={(value)=>{
       setAltura(value);
      console.log(altura);
      }} style={styles.textInput} keyboardType='numeric' placeholder='Ingrese su Altura(m):'></TextInput>
      <Button style={styles.buttonText} title='Calcular' onPress={()=>{Alert.alert("Información", calcularNivelPeso(peso, altura));
      }}></Button>
    </View>
  );
}
const calcularIMC=(peso, altura)=>{
  let imc = peso/(altura*altura);
  return imc.toFixed(2);
}
const calcularNivelPeso=(peso, altura)=>{
  let imc= calcularIMC(peso, altura);
  let respuesta="";
if(imc<18.5){
    respuesta = "su IMC es:" +imc+ "Bajo peso";
  }
  if (imc>=18.5 && imc<=24.9){
    respuesta = "su IMC es:"+imc+"peso Normal";
  }
  if(imc>=25 && imc<=29.9){
    respuesta = "su IMC es:"+imc+"Sobre peso";
  }
  if(imc>30){
    respuesta ="su iMC es:"+imc+"obesidad";
}
return respuesta;
}