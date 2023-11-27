import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import {Modal, View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../config/config.json';
import Loading from '../Carregamento/Loading.js';


export default function ExclusaoModelo() {


const navigation = useNavigation();
const route = useRoute();
const [msg, setMsg] = useState(null);
const [produtos, setProdutos] = useState([])
const [selectModel, setSelectModel] = useState([])
const { produtoSelecionado } = route.params;
const [visible, setVisible] = useState(false);

const [showNotification, setShowNotification] = useState(false);
const [prodExcluir, setProdExcluir] = useState(null);
  const showNotificationHandler = () => {
    setShowNotification(true);
  };


const [IsFocusedInput1, setIsFocusedInput1] = useState(false)
  const [IsFocusedInput2, setIsFocusedInput2] = useState(false)

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

  const [usuario, setUsuario]=useState(null);
  useEffect(()=>{
    async function getusuario(){
      let response=await AsyncStorage.getItem('usuarioData');
      let json=JSON.parse(response);
      setUsuario(json.nomeUsuario);
    }
    getusuario();
}, []);


useEffect(() => {
  async function fetchData(){
    try {
      const response = await fetch(`${config.urlRoot}listagemProdutos`);
        const produtosData = await response.json();
        setProdutos(produtosData);

    } catch (error){
      console.error(error);
    }
  }
  fetchData();
}, []);

async function sendForm() {
  setVisible(true);
    try {
      let response = await fetch(`${config.urlRoot}exclusaoProduto`, {
        method: 'DELETE',
        body: JSON.stringify({
          selectModel: produtoSelecionado.nomeProduto,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      let json = await response.json();
      if (response.status === 200) {
        setVisible(false);
        showNotificationHandler();
      } else {
        setTimeout(() => {
          setMsg('');
        }, 1500);
        setMsg(json);
        setVisible(false);
      }
    } catch (error) {
      console.error(error);
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
        <Text style={styles.title}>Excluir modelo!</Text>
          <Text style={styles.text}>Confirme a exclusão do modelo</Text>
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />


        

        <ScrollView showsVerticalScrollIndicator={false}>
          
        {produtoSelecionado && produtos
        .filter((produto) => produto.id === produtoSelecionado.id)
        .map((produto) => (
              <View style={styles.containerCards} key={produto.id}>
                <View style={styles.buttonCardsA}>
                  <View style={styles.buttonCardsB}>
                    <Image style={styles.buttonImage} source={{uri: produto.imagemProduto}} />
                  </View>
                  <View style={styles.containerDescriptionModels}>
                    <View style={styles.containerDescriptionText}>
                      <Text style={styles.modelDescription}>{produto.id}</Text>
                      <Text style={styles.nameModelDescriptionModels}>{produto.nomeProduto}</Text>
                      <Text style={styles.subtotalDescriptionModels}>Preço:</Text>
                      <Text style={styles.textValueAmount}>R$ {produto.precoProduto}</Text>
                    </View>
                    <View style={styles.containerDescriptionAmount}>
                      <Text style={styles.titleCardsModels}>{produto.categoriaProduto}</Text>
                      <View style={styles.containerDescriptionAmountB}></View>
                    </View>
                  </View>
                </View>
              </View>
              ))}


              
       

       


<TouchableOpacity
  style = {styles.button} onPress={()=>sendForm() }>
<Text style = {styles.buttonText}>CONFIRMAR EXCLUSÃO</Text>
</TouchableOpacity>

          

  
  
<Text style = {styles.msgAlert}>{msg}</Text>
<Loading visible={visible} /> 
</ScrollView>

<Modal
      animationType="slide"
      transparent={true}
      visible={showNotification}
      onRequestClose={() => {
        setShowNotification(false);
      }}
    >
      <View style={styles.modalContainerNotification}>
      <Text style={styles.title}>Excluir modelo!</Text>
          <Image
            style={styles.logoIcon}
            resizeMode='contain'
            source={require('../../assets/ofisystem_logo_icon.png')}
          />
        <View style={styles.notificationTextContainer}>
          <Text style={styles.notificationText}>Exclusao de Modelo Efetuada com Sucesso!</Text>
          
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


        </Animatable.View>


   </View>
  );
}