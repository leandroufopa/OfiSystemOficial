import styles from './styles.js'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {

const navigation = useNavigation();

const showNotificationHandler = () => {
  setShowNotification(true);
};
const [usuario, setUsuario]=useState(null);
const [empresa, setEmpresa]=useState(null);
const [empresa2, setEmpresa2]=useState(null);
    useEffect(()=>{
      async function getusuario(){
        let response=await AsyncStorage.getItem('usuarioData');
        let json=JSON.parse(response);
        setUsuario(json.nomeUsuario);
      }
      getusuario();
  }, []);

 return (
   <View style = {styles.container}>
    
        <View style={styles.containerHeader}>

          <TouchableOpacity style={styles.headerLeft}>
      
             
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Image style={styles.headerCenterImg} source={require('../../assets/home_top.png')}/> 
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

          <View style={styles.containerCards}>
            
            <TouchableOpacity style={styles.buttonCardsA}>
              <View style={styles.buttonCardsB}>
                 <Image style={styles.buttonIcons} source={require('../../assets/cart_icon.png')}/>
              </View>
              <Text style={styles.buttonTexts}>Vendas</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonCardsA} onPress={ () => navigation.navigate('CatalogA')}>
              <View style={styles.buttonCardsB}>
                 <Image style={styles.buttonIcons} source={require('../../assets/catalog_icon.png')}/>
              </View>
              <Text style={styles.buttonTexts}>Catálogo</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonCardsA}>
              <View style={styles.buttonCardsB}>
                 <Image style={styles.buttonIcons} source={require('../../assets/list_icon.png')}/>
              </View>
              <Text style={styles.buttonTexts}>Ordem de serviço</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonCardsA}>
              <View style={styles.buttonCardsB}>
                 <Image style={styles.buttonIcons} source={require('../../assets/report_icon.png')}/>
              </View>
              <Text style={styles.buttonTexts}>Relatório</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCardsA} onPress={ () => navigation.navigate('Register')}>
              <View style={styles.buttonCardsB}>
                 <Image style={styles.buttonIcons} source={require('../../assets/addUserr.png')}/>
              </View>
              <Text style={styles.buttonTexts}>Gerenciador de Usuário</Text>
            </TouchableOpacity>


          </View>

        </Animatable.View>

   </View>
  );
}