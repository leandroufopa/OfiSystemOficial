import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import { Modal, View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../config/config.json';
import Loading from '../Carregamento/Loading.js';


export default function CadastroModelo() {
  const navigation = useNavigation();
  const [showNotification, setShowNotification] = useState(false);
  const [nomeNovoModelo, setNomeNovoModelo]=useState(null);
  const [novoValorModelo, setNovoValorModelo]=useState(null);
  const [novaImagemModelo, setNovaImagemModelo]=useState(null);
  const [novaCategoriaModelo, setNovaCategoriaModelo]=useState(null);
  const [msg, setMsg] = useState(null);
  const [visible, setVisible] = useState(false);
  
  const showNotificationHandler = () => {
    setShowNotification(true);
  };

  const [usuario, setUsuario]=useState(null);
    useEffect(()=>{
      async function getusuario(){
        let response=await AsyncStorage.getItem('usuarioData');
        let json=JSON.parse(response);

        setUsuario(json.nomeUsuario);
      }
      getusuario();
  }, []);

  async function sendForm(){
    setVisible(true);
    try{
    let response=await fetch(`${config.urlRoot}cadastroProduto`, {
      method: 'POST',
        body:JSON.stringify({
          nomeNovoModelo: nomeNovoModelo,
          novoValorModelo: novoValorModelo,
          novaImagemModelo: novaImagemModelo,
          novaCategoriaModelo: novaCategoriaModelo
           
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


 return (
   <View style = {styles.container}>

        <View style={styles.containerHeader}>

          <TouchableOpacity style={styles.headerLeft}>
          
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Image style={styles.headerCenterImg} source={require('../../assets/catalog_top.png')}/> 
          </View>

          <TouchableOpacity style={styles.headerRight} onPress={ () => navigation.navigate('Profile')}>
              <Image style={styles.headerRightImg} source={require('../../assets/person_icon_white.png')}/>
              <Text style={styles.headerRightText}>{usuario}</Text>
          </TouchableOpacity>

        </View>
        

        <Animatable.View
          animation="slideInUp"
          style={styles.containerForm}
          easing={'ease-out-back'}
          duration={1000}
          direction='alternate'>
        <View style={styles.smallLine}></View>
             <ScrollView showsVerticalScrollIndicator={false}>
          
          <Text style={styles.title}>Cadastrar modelo!</Text>
          <Text style={styles.text}>Insira os dados do novo modelo abaixo</Text>
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />





          <View style={styles.containerAB}>

          <View style={styles.containerA}>
            <Text style={styles.titleCards}>Modelo</Text>
            <View style={styles.inputBackgroundA}>
                        <TextInput
                        placeholder='Modelo...'
                        placeholderTextColor='#B1B1B1'
                        style={styles.inputCategoria}
                        multiline={false}
                        numberOfLines={1}
                        onChangeText={text=> setNomeNovoModelo(text)}
                      /> 
            </View>
          </View>

          <View style={styles.containerB}>
            <Text style={styles.titleCards}>Imagem</Text>
            <View style={styles.inputBackgroundB}>
              <Image style={styles.buttonImage} source={require('../../assets/imageInsert.png')}/>
              <TextInput
                      style={[styles.inputCategoria, {marginLeft: 0}]}
                      placeholder='Imagem URL'
                      placeholderTextColor='#B1B1B1'
                      numberOfLines={1}
                      onChangeText={text=> setNovaImagemModelo(text)}
              />
            </View>
          </View>

          </View>

          <View style={styles.containerCD}>

          <View style={styles.containerC}>
            <Text style={styles.titleCards}>Categoria</Text>
            <View style={styles.inputBackgroundC}>
                        <TextInput
                        placeholder='Categoria...'
                        placeholderTextColor='#B1B1B1'
                        style={styles.inputCategoria}
                        multiline={false}
                        numberOfLines={1}
                        onChangeText={text=> setNovaCategoriaModelo(text)}
                      /> 
            </View>
          </View>

          <View style={styles.containerD}>
            <Text style={styles.titleCards}>Valor </Text>
            <View style={styles.inputBackgroundD}>
                        <TextInput
                        placeholder='R$...'
                        placeholderTextColor='#B1B1B1'
                        style={styles.inputCategoria}
                        multiline={false}
                        numberOfLines={1}
                        onChangeText={text=> setNovoValorModelo(text)}
                      /> 
            </View>
          </View>

          </View>

          <Loading visible={visible} />
          <TouchableOpacity style = {styles.button} onPress={()=>sendForm()}>
          <Text style = {styles.buttonText}>CONCLUIR CADASTRO</Text>
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
      <Text style={styles.title}>Cadastrar modelo!</Text>
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />
        <View style={styles.notificationTextContainer}>
          <Text style={styles.notificationText}>Cadastro de Modelo Efetuado com Sucesso!</Text>
          
        </View>
        <TouchableOpacity
          style={styles.notificationButtonContainer}
          onPress={() => {
            setShowNotification(false);
            navigation.navigate('Home');
          }}
        >
          <Text style={styles.notificationButtontText}>VER CATÁLOGO</Text>
        </TouchableOpacity>
      </View>
    </Modal>

   </View>
   
  );
}