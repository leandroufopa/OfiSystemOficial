import styles from './styles.js'
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native';
import config from '../../../config.json';
import Loading from '../Carregamento/Loading.js';

export default function Register() {

  const navigation = useNavigation();
  const [IsFocusedInput1, setIsFocusedInput1] = useState(false)
  const [IsFocusedInput2, setIsFocusedInput2] = useState(false)
  const [IsFocusedInput3, setIsFocusedInput3] = useState(false)
  const [IsFocusedInput4, setIsFocusedInput4] = useState(false)
  const [IsFocusedInput5, setIsFocusedInput5] = useState(false)

  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    setIsVisible(true);
    // setTimeout(hideModal, 3000);
  };

  const [novoUsuario, setNovoUsuario]=useState(null);
  const [emailNovoUsuario, setEmailNovousuario]=useState(null);
  const [senhaNovoUsuario, setSenhaNovoUsuario]=useState(null);
  const [empId, setEmpId]=useState(null);
  const [empresaId, setEmpresaId]=useState(null);
  const [idAdm, setIdAdm]=useState(null);
  const [idAdministrador, setIdAdministrador]=useState(null);
  const [resp, setResp]=useState(null);
  const [senhaAdm, setSenhaAdm]=useState(null);
  const [tipoNovoUsuario, setTipoNovoUsuario]=useState(null);
  const [msg, setMsg] = useState(null);
  const [confirmId, setConfirmeId] = useState(null);
  const [visible, setVisible] = useState(false);


  const [showNotification, setShowNotification] = useState(false);
  const showNotificationHandler = () => {
    setShowNotification(true);
  };

  const hideModal = () => {
    setIsVisible(false);
  };

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
  const handleFocusInput3 = () => {
    setIsFocusedInput3(true);
  }
  const handleBlurInput3 = () => {
    setIsFocusedInput3(false);
  }
  const handleFocusInput4 = () => {
    setIsFocusedInput4(true);
  }
  const handleBlurInput4 = () => {
    setIsFocusedInput4(false);
  }

  const handleFocusInput5 = () => {
    setIsFocusedInput5(true);
  }
  const handleBlurInput5 = () => {
    setIsFocusedInput5(false);
  }
  const inputStyle1 = IsFocusedInput1? styles.inputContainerFocused : styles.inputContainer;
  const inputStyle2 = IsFocusedInput2? styles.inputContainerFocused : styles.inputContainer;
  const inputStyle3 = IsFocusedInput3? styles.inputContainerFocused : styles.inputContainer;
  const inputStyle4 = IsFocusedInput4? styles.inputContainerFocused : styles.inputContainer;
  const inputStyle5 = IsFocusedInput5? styles.inputContainerFocused : styles.inputContainer;


  useEffect(()=>{
    async function getIdEmp(){
      let response=await AsyncStorage.getItem('usuarioData');
      let json=JSON.parse(response);
      setEmpId(json.empresaId);
    }
    getIdEmp();
  });

  useEffect(()=>{
    async function getIdAdm(){
      let response=await AsyncStorage.getItem('usuarioData');
      let json=JSON.parse(response);
      setIdAdm(json.id);
    }
    getIdAdm();
  });

  useEffect(()=>{
    async function getConfirmId(){
      let response=await AsyncStorage.getItem('usuarioData');
      let json=JSON.parse(response);
      setConfirmeId(json.tipoUsuario);
    }
    getConfirmId();
  });


  //Cadastro usuario
  async function sendForm(){
    setVisible(true);
    try{
    let response=await fetch(`${config.urlRoot}cadastroUsuario`, {
      method: 'POST',
        body:JSON.stringify({
           empresaId: empId,
           idAdministrador: idAdm,
           emailNovoUsuario: emailNovoUsuario,
           novoUsuario: novoUsuario,
           senhaNovoUsuario: senhaNovoUsuario,
           senhaAdm: senhaAdm,
           tipoNovoUsuario: tipoNovoUsuario,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

    });
    let json = await response.json();
    if (response.status === 201){
      setVisible(false);
      showNotificationHandler();
    }else{
      setTimeout(()=>{
        setMsg('');
      }, 1500)
      setMsg(json);
      setVisible(false);
    }
    } catch (error){
      console.error;
    }
    } 
      if (confirmId !== 1){
        return(
          <View style={styles.modalContainerNotification}>
                    <View style={styles.notificationTextContainer}>
                      <Text style={styles.notificationTextErro}>Acesso Não Autorizado!</Text>
                      
                    </View>
                    <TouchableOpacity
                      style={styles.notificationButtonContainer}
                      onPress={() => {
                        setShowNotification(false);
                        navigation.navigate('Home');
                      }}
                    >
                      <Text style={styles.notificationButtontText}>VOLTAR PARA HOME</Text>
                    </TouchableOpacity>
                  </View>
        );

} else {


 return (
   <View style = {styles.container}>
              <View style={styles.containerHeader}>

              <TouchableOpacity style={styles.headerLeft}>
              
              </TouchableOpacity>
              </View>

          <Animatable.Image style={styles.containerLogo}
            source={require('../../assets/perfil_top.png')}
          />

          

        <Animatable.View
        animation="slideInUp"
        style={styles.containerForm}
        easing={'ease-out-back'}
        duration={1000}
        direction='alternate'
>

        
          <View style={styles.smallLine}></View>
          <Text style={styles.title}>Cadastrar usuário!</Text>
          <Text style={styles.text}>Insira os dados do novo usuário abaixo</Text>
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />

        <ScrollView showsVerticalScrollIndicator={false}>

        
        <Text style={styles.inputTitle}>Tipo Usuário</Text>
            <View style={inputStyle5}>
              <Image style={styles.inputImage}
                source={require('../../assets/person_icon.png')}
              />
              <TextInput
                placeholder='0 - Usuário ou 1 - Administrador'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput5}
                onBlur={handleBlurInput5}
                onChangeText={text=>setTipoNovoUsuario(text)}   
                />

            </View>


        <Text style={styles.inputTitle}>Email Novo Usuário</Text>
            <View style={inputStyle1}>
              <Image style={styles.inputImage}
                source={require('../../assets/addEmaill.png')}
              />
              <TextInput
                placeholder='Digite um email'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput1}
                onBlur={handleBlurInput1}
                onChangeText={text=>setEmailNovousuario(text)}   
                />

            </View>

          <Text style={styles.inputTitle}>Novo Usuário</Text>
            <View style={inputStyle2}>
              <Image style={styles.inputImage}
                source={require('../../assets/person_icon.png')}
              />
              <TextInput
                placeholder='Digite um usuário'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput2}
                onBlur={handleBlurInput2}
                onChangeText={text=>setNovoUsuario(text)}   
                />

            </View>

          <Text style={styles.inputTitle}>Senha Novo Usuário</Text>
          <KeyboardAvoidingView>
            <View style={inputStyle3}>
              <Image style={styles.inputImage}
                source={require('../../assets/lock.png')}
              />
              <TextInput
                placeholder='Digite uma senha'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput3}
                onBlur={handleBlurInput3}
                secureTextEntry={true}
                onChangeText={text=>setSenhaNovoUsuario(text)}  
                />
              <Image style={[styles.inputImage, {marginLeft: 0}]}
                source={require('../../assets/eye_open.png')}
              />

            </View>
            </KeyboardAvoidingView>
          
          <Text style={styles.inputTitle}>Senha administrador</Text>
          <KeyboardAvoidingView>
          <View style={inputStyle4}>
              <Image style={styles.inputImage}
                source={require('../../assets/lock.png')}
              />
              <TextInput
                placeholder='Digite sua senha adm'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput4}
                onBlur={handleBlurInput4} 
                secureTextEntry={true} 
                onChangeText={text=>setSenhaAdm(text)}   
                />
              <Image style={[styles.inputImage, {marginLeft: 0}]}
                source={require('../../assets/eye_open.png')}
              />

            </View>
            </KeyboardAvoidingView>
            <Loading visible={visible} />
          <TouchableOpacity style = {styles.button} onPress={()=>sendForm()} >
            <Text style = {styles.buttonText} >CADASTRAR</Text>
          </TouchableOpacity>
          <Text style = {styles.msgAlert}>{msg}</Text>
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
            <Text style={styles.title}>Cadastrar Usuário!</Text>
                <Image
                  style={styles.logoIcon}
                  resizeMode='contain'
                  source={require('../../assets/ofisystem_logo_icon.png')}
                />
              <View style={styles.notificationTextContainer}>
                <Text style={styles.notificationText}>Cadastro de Usuário Efetuado com Sucesso!</Text>
                
              </View>
              <TouchableOpacity
                style={styles.notificationButtonContainer}
                onPress={() => {
                  setShowNotification(false);
                  navigation.navigate('Login');
                }}
              >
                <Text style={styles.notificationButtontText}>IR PARA LOGIN</Text>
              </TouchableOpacity>
            </View>
    </Modal>



   </View>
  );
              }
}