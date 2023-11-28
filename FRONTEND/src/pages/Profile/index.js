import styles from './styles.js'
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../config.json';
import Loading from '../Carregamento/Loading.js';

export default function Profile() {

  const navigation = useNavigation();
  const [IsFocusedInput1, setIsFocusedInput1] = useState(false)
  const [IsFocusedInput2, setIsFocusedInput2] = useState(false)
  const [IsFocusedInput3, setIsFocusedInput3] = useState(false)
  const [IsFocusedInput4, setIsFocusedInput4] = useState(false)
  const [IsFocusedInput5, setIsFocusedInput5] = useState(false)
  const [showNotification, setShowNotification] = useState(false);
  const showNotificationHandler = () => {
    setShowNotification(true);
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

  const [usuario, setUsuario]=useState(null);
  const [tipoUsuario, setTipoUsuario]=useState(null);


  const [visible, setVisible] = useState(false);
  const [idUser, setIdUser]=useState(null);
  const [senhaAntiga, setSenhaAntiga]=useState(null);
  const [novaSenha, setNovaSenha] = useState(null);
  const [confNovaSenha, setConfNovaSenha] = useState(null);3
  const [msg, setMsg] = useState(null);

      useEffect(()=>{
      async function getusuario(){
        let response=await AsyncStorage.getItem('usuarioData');
        let json=JSON.parse(response);
        setUsuario(json.nomeUsuario);
        if (json.tipoUsuario === 1){
          setTipoUsuario("Administrador");
        } else {
          setTipoUsuario("Funcionário");
        }
      }
      getusuario();
  }, []);


    useEffect(()=>{
      async function getIdUser(){
        let response=await AsyncStorage.getItem('usuarioData');
        let json=JSON.parse(response);
        setIdUser(json.id);
      }
      getIdUser();
    });

    async function sendForm(){
      setVisible(true);
      let response=await fetch(`${config.urlRoot}atualizacaoSenha`, {
        method: 'POST',
        body:JSON.stringify({
            id: idUser,
            senhaAntiga: senhaAntiga,
            novaSenha: novaSenha,
            confNovaSenha: confNovaSenha
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });
      let json=await response.json();
      if (response.status === 200){
        setVisible(false);
         showNotificationHandler();
         await AsyncStorage.clear();
      } else {
      setTimeout(() => {
        setMsg('');
      }, 500);

      setMsg(json);
      setVisible(false);
    }
    }
 return (
   <View style = {styles.container}>
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

        <View style={styles.containerProfile}>
          <View style={styles.circleProfile}>
            <Image style={styles.imageProfile} source={require('../../assets/photo_profile_user.png')}/>
          </View>
          <View>
            <Text style={styles.nameProfile}>{usuario}</Text>
            <Text style={styles.functionProfile}>{tipoUsuario}</Text>
          </View>
          <Image style={{width: 17, height: 17, marginBottom: 20}}source={require('../../assets/edit_icon.png')}/>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>

                  
           <KeyboardAvoidingView>
          <Text style={styles.inputTitle}>Senha Atual</Text>
            <View style={inputStyle3}>
              <Image style={styles.inputImage}
                source={require('../../assets/lock.png')}
              />
              <TextInput
                placeholder='Digite sua senha'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput3}
                onBlur={handleBlurInput3}
                secureTextEntry={true}
                onChangeText={text=>setSenhaAntiga(text)}  
                />
              <Image style={[styles.inputImage, {marginLeft: 0}]}
                source={require('../../assets/eye_open.png')}
              />

            </View>
            </KeyboardAvoidingView>
            
            <KeyboardAvoidingView>
          <Text style={styles.inputTitle}>Nova Senha</Text>
            <View style={inputStyle4}>
              <Image style={styles.inputImage}
                source={require('../../assets/lock.png')}
              />
              <TextInput
                placeholder='Digite sua senha'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput4}
                onBlur={handleBlurInput4}
                secureTextEntry={true}
                onChangeText={text=>setNovaSenha(text)}   
                />
              <Image style={[styles.inputImage, {marginLeft: 0}]}
                source={require('../../assets/eye_open.png')}
              />

            </View>
            </KeyboardAvoidingView>
            <Text style={styles.inputTitle}>Confirme Nova Senha</Text>
            <KeyboardAvoidingView>
            <View style={inputStyle5}>
              <Image style={styles.inputImage}
                source={require('../../assets/lock.png')}
              />
              <TextInput
                placeholder='Digite sua senha'
                placeholderTextColor='#B1B1B1'
                style={styles.input}
                onFocus={handleFocusInput5}
                onBlur={handleBlurInput5}
                secureTextEntry={true}
                onChangeText={text=>setConfNovaSenha(text)}    
                />
              <Image style={[styles.inputImage, {marginLeft: 0}]}
                source={require('../../assets/eye_open.png')}
              />
            
            </View>
            </KeyboardAvoidingView>
            <Loading visible={visible} />
          <TouchableOpacity style = {styles.button} onPress={()=>sendForm() }>
            <Text style = {styles.buttonText}>CONFIRMAR ALTERAÇÃO</Text>
          </TouchableOpacity>
          <Text style = {styles.msgAlert}>{msg}</Text>
          </ScrollView>
        </Animatable.View>
       
        <Modal
      animationType="slide"
      transparent={true}
      visible={showNotification}
      onRequestClose={() => {
        setShowNotification(false);
      }}
    >
      <View style={styles.modalContainerNotification}>
      <Text style={styles.title}>Atualizar Cadastro</Text>
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />
        <View style={styles.notificationTextContainer}>
          <Text style={styles.notificationText}>Usuário Atualizado com Sucesso!</Text>
          
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