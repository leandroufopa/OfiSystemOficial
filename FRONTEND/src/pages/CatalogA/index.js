import styles from './styles.js';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../config.json';
import Loading from '../Carregamento/Loading.js';

export default function CatalogA() {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado]=useState(null);
  const [visible, setVisible] = useState(false);

 
  useEffect(() => {
    async function fetchData(){
      setVisible(true);
      try {
        const response = await fetch(`${config.urlRoot}listagemProdutos`);
          const produtosData = await response.json();
          setProdutos(produtosData);
          setVisible(false);
      } catch (error){
        console.error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function getUsuario() {
      let respostaUsuario = await AsyncStorage.getItem('usuarioData');
      let json = JSON.parse(respostaUsuario);
      setUsuario(json.nomeUsuario);
    }
    getUsuario();
  }, []);

const handleEditarModelo = (produto) => {
  setProdutoSelecionado(produto);
  navigation.navigate('EdicaoModelo', { produtoSelecionado: produto });
}

const handleExcluirModelo = (produto) => {
  setProdutoSelecionado(produto);
  navigation.navigate('ExclusaoModelo', { produtoSelecionado: produto });
}
  
  

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.headerLeft}></TouchableOpacity>
        <View style={styles.headerCenter}>
          <Image style={styles.headerCenterImg} source={require('../../assets/catalog_top.png')} />
        </View>
        <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Profile')}>
          <Image style={styles.headerRightImg} source={require('../../assets/person_icon_white.png')} />
          <Text style={styles.headerRightText}>{usuario}</Text>
        </TouchableOpacity>
      </View>
      <Animatable.View animation="slideInUp" style={styles.containerForm} easing={'ease-out-back'} duration={1000} direction="alternate">
        <View style={styles.smallLine}></View>
       
          <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.buttonIncluir} onPress={() => navigation.navigate('CadastroModelo')}>
              <Text style={styles.textButtonIncluir}>Incluir Modelo</Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
          {produtos.map((produto) => (

          
            <View style={styles.containerCards} key={produto.id}>
              <View style={styles.buttonCardsA}>
                <View style={styles.buttonCardsB}>
                  <Image style={styles.buttonImage} source={{uri: produto.imagemProduto}} />
                </View>
                <View style={styles.containerDescription}>
                  <View style={styles.containerDescriptionText}>
                    <Text style={styles.modelDescription}>{produto.id}</Text>
                    <Text style={styles.nameModelDescription}>{produto.nomeProduto}</Text>
                    <Text style={styles.subtotalDescription}>Preço:</Text>
                    <Text style={styles.textValueAmount}>R$ {produto.precoProduto}</Text>
                  </View>
                  <View style={styles.containerDescriptionAmount}>
                    <Text style={styles.titleCards}>{produto.categoriaProduto}</Text>
                    <TouchableOpacity
                      style={styles.buttonEdit}
                      onPress={() => handleEditarModelo (produto)}
                    >
                      <Text style={styles.buttonEditFont}>Editar Modelo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.buttonExcluir} 
                    onPress={() => handleExcluirModelo (produto)}>
                      <Text style={styles.textButtonExcluir}>Excluir Modelo</Text>
                    </TouchableOpacity>
                    <View style={styles.containerDescriptionAmountB}></View>
                  </View>
                </View>
              </View>
            </View>
            ))}
        </ScrollView>
        <Loading visible={visible} />
      </Animatable.View>
    </View>
  );
}
