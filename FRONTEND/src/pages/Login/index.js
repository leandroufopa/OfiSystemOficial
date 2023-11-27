import styles from './styles.js'
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ActivityIndicator, Modal} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import database from '../../config/firebaseconfig'
import * as LocalAuthentication from 'expo-local-authentication';
import config from '../../../config/config.json';
import Loading from '../Carregamento/Loading.js';




export default function Login() {


  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [IsFocusedInput1, setIsFocusedInput1] = useState(false)
  const [IsFocusedInput2, setIsFocusedInput2] = useState(false)
  const [display, setDisplay]=useState('none');
  const [nomeUsuario, setNomeUsuario]=useState(null);
  const [senhaUsuario, setSenhaUsuario]=useState(null);
  const [login, setLogin]=useState(false);
  const [error, setError] = useState(null);
  const [emailUsuario, SetEmailUsuario] = useState(null);



  const [showNotification, setShowNotification] = useState(false);
  const showNotificationHandler = () => {
    setShowNotification(true);
  };
  useEffect(()=>{
    verifyLogin();

  }, []);

  /*

  useEffect(()=>{
    if (login === true){
      biometria();
    }
  },[login]);
  */

  // verificar se usuario ja possui algum login
  async function verifyLogin(){
    let response=await  AsyncStorage.getItem('usuarioData');
    let json=await JSON.parse(response);
    console.log(json);
    if (json !== null){
      setNomeUsuario(json.nomeUsuario);
      setSenhaUsuario(json.senhaUsuario);
      setLogin(true);
    }
  }

  /*
  //Biometriz
  async function biometria(){
    let compatibilidade = await LocalAuthentication.hasHardwareAsync();
    if(compatibilidade){
      let biometriaSalva = await LocalAuthentication.isEnrolledAsync();
      if(!biometriaSalva){
        alert('Biometria não cadastrada!');
      }else{
        let resultado=await LocalAuthentication.authenticateAsync();
        if (resultado.success){
          sendForm();
        }else{
          setNomeUsuario(null);
          setSenhaUsuario(null);
        }
      }
    }
  }
*/

  //Envio do formulario de login
  async function sendForm(){
    setVisible(true);
    //setError(null);

    let response=await fetch(`${config.urlRoot}login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nomeUsuario: nomeUsuario,
        senhaUsuario: senhaUsuario
      }),
    });
    let json = await response.json();
    console.log(json);
    
    if (response.status === 401) {
      setDisplay('flex');
      setTimeout(() => {
        setDisplay('none');
      }, 500);
    
      setVisible(false);
      await AsyncStorage.clear();
    } else {
      await AsyncStorage.setItem('usuarioData', JSON.stringify(json));
      setVisible(false);
      navigation.navigate('Home');
    }
    if (response.status === 500){
      setDisplay('flex');
      setTimeout(() => {
        setDisplay('none');
      }, 500);
    
      setVisible(false);

    }
    
    
  }


  const handleFocusInput1 = () => {
    setIsFocusedInput1(true);
  }
  const handleBlurInput1 = () => {
    setIsFocusedInput1(false);
  }
  const handleFocusInput2 = () => {
    setIsFocusedInput2(true);
  }
  const handleBlurInput2 = () => {
    setIsFocusedInput2(false);
  }

  const inputStyle1 = IsFocusedInput1? styles.inputContainerFocused : styles.inputContainer;
  const inputStyle2 = IsFocusedInput2? styles.inputContainerFocused : styles.inputContainer;


 return (
   <View style = {styles.container}>

          <Animatable.Image style={styles.containerLogo}
            source={require('../../assets/ofisystem_text_top.png')}
          />

        <Animatable.View
        animation="slideInUp"
        style={styles.containerForm}
        easing={'ease-out-back'}
        duration={1000}
        direction='alternate'
>
        
          <View style={styles.smallLine}></View>
          <Text style={styles.title}>Efetuar login!</Text>
          <Text style={styles.text}>Insira suas credenciais de acesso!</Text>
          
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />
        <ScrollView showsVerticalScrollIndicator={false}>

          <Text style={styles.inputTitle}>Usuário ou Email</Text>
            <View style={inputStyle1}>
              <Image style={styles.inputImage}
                source={require('../../assets/person_icon.png')}
              />
              <TextInput
                placeholder='Digite seu usuário ou email'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput1}
                onBlur={handleBlurInput1}
                onChangeText={text=>setNomeUsuario(text)} 
                />

            </View>


          <Text style={styles.inputTitle}>Senha</Text>
          <KeyboardAvoidingView>
            <View style={inputStyle2}>
              <Image style={styles.inputImage}
                source={require('../../assets/lock.png')}
              />
              <TextInput
                placeholder='Digite sua senha'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput2}
                onBlur={handleBlurInput2}
                secureTextEntry={true} 
                onChangeText={text=>setSenhaUsuario(text)}
                />
              <Image style={[styles.inputImage, {marginLeft: 0}]}
                source={require('../../assets/eye_open.png')}
              />

            </View>

            

            </KeyboardAvoidingView>

            
            <Loading visible={visible} />
          <TouchableOpacity style = {styles.button} onPress={ () => sendForm()}>
            <Text style = {styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>

          

          <View style={styles.registerOptions}>
            <TouchableOpacity>
              <Text style={styles.registerOptionsText}>Esqueceu senha?</Text>
            </TouchableOpacity>
            
            
          </View>

          <Text style = {styles.msgAlert(display)}>Usuário ou senha inválidos!</Text>
          
          </ScrollView>
          
        </Animatable.View>
        
          <View style={styles.navigationBar}>
          
          
          </View>
         


          <Modal
            animationType="slide"
            transparent={true}
            visible={showNotification}
            onRequestClose={() => {
              setShowNotification(false);
            }}
          >
            <View style={styles.modalContainerNotification}>
            <Text style={styles.title}>Efetuar Login!</Text>
                <Image
                  style={styles.logoIcon}
                  resizeMode='contain'
                  source={require('../../assets/ofisystem_logo_icon.png')}
                />
              <View style={styles.notificationTextContainer}>
                <Text style={styles.notificationText}>FALHA NA CONEXÃO!</Text>
                
              </View>
              <TouchableOpacity
                style={styles.notificationButtonContainer}
                onPress={() => {
                  setShowNotification(false);
                  sendForm()
                }}
              >
                <Text style={styles.notificationButtontText}>TENTAR NOVAMENTE</Text>
              </TouchableOpacity>
            </View>
    </Modal>

              
   </View>
  );
}