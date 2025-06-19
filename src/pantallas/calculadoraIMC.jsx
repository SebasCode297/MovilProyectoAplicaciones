import { useState } from 'react';
import {Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { styles } from './CalculadoraIMC.styles';

export const CalculadoraIMC = ()=>{
  const[peso, setPeso]=useState();
  const [altura, setAltura]=useState();
  
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Calculadora IMC</Text>
      <Text style={styles.texto2}>hola no sabes cuggganto pesas y tienes una cita con el doctor ? tranquilo aqui con el programador lo sabras</Text>

      <Image style={styles.imagen} source={{uri: "https://aprenderaprogramar.com/images/phocagallery/Empleo/thumbs/phoca_thumb_l_33_programador_loco.jpg"}}/>
    

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