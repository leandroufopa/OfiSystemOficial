import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1238',
    height: 48,
  },

  containerHeader: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    height: 48,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 14,
    marginRight: 14,
    
  },

  titleCards:{
    fontSize: 18,
    color: '#1D1238',
    fontWeight: 'bold',
    textAlign: 'right',
    marginHorizontal: 10,
  },
  
  headerLeft: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    height: 48,
    width: 80,
  },

  headerLeftImg: {
    height: 15,
    width: 20,
  },

  headerCenter: {
    // backgroundColor: 'red',
    height: 48,
    width: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  headerCenterImg: {
    // backgroundColor: 'purple',
    height: 48,
    width: 170,
    resizeMode: 'contain',
  },

  headerRight: {
    flexDirection: 'row-reverse',
    // backgroundColor: 'green',
    height: 48,
    width: 80,
    alignItems: 'flex-start',
  },

  headerRightText: {
    flex: 3,
    height: 18,
    fontSize: 14,
    color: 'white',
    // backgroundColor: 'blue',
    textAlign: 'right',
    // paddingTop: 5,
    },

  headerRightImg: {
    flex: 1,
    // backgroundColor: 'yellow',
    height: 17,
    width: '100%',
    marginLeft: 5,
    resizeMode: 'center',
    marginBottom: 34,
  },

  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  
  containerDescription: {
    flex: 2,
    flexDirection: 'row',
    //backgroundColor: 'green',
    marginLeft: 54,
    justifyContent: 'space-between',
  },

  containerDescriptionText: {
    flex: 1,
    // backgroundColor: 'red',
  }, 

  containerDescriptionAmount: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'red',
    alignItems: 'flex-end',
    
  },

  containerDescriptionAmountA: {
    flex: 4,
    flexDirection: 'row',
    //backgroundColor: 'green',
    justifyContent: 'space-between',
  },

  containerDescriptionAmountB: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'space-between',
    //backgroundColor: 'yellow',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  containerBottomDescription: {
    width: '100%',
    flexDirection: 'row',
    //backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    bottom: 5,
  },

  containerCards: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: -10,
    marginTop: 10,
    
  },

  modelDescription: {
    color: '#8F9297',
    fontSize: 15,
  },

  nameModelDescription: {
    fontSize: 15,
    fontWeight: '900',
    color: '#1D1238',
    marginBottom: 35,
  },

  subtotalDescription: {
    fontSize: 15,
    color: '#8F9297',
  },

  bottomAddRemove: {
    backgroundColor: '#1D1238',
    height: 25,
    width: 25,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    
   },

   amountInput: {
    height: 25,
    width: 25,
    backgroundColor: 'white',
    color: '#1D1238',
    textAlign: 'center',
    borderRadius: 3,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#1D1238',
   },

   bottomAddRemoveText: {
    color: 'white',
    fontWeight: '900',
    bottom: 1,
   },

   buttonAddCart: {
    width: '100%',
    height: 30,
    borderRadius: 3,
    color: 'red',
    backgroundColor: '#FFF6ED',
    borderWidth: 1,
    borderColor: '#FF7B02',
    fontWeight: '900',
    bottom: 1,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
   },

   textValueAmount: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FF7B02',

    bottom: 2,
   },

   fontButtonAddCart: {
    fontSize: 11,
    fontWeight: '900',
    color: '#FF7B02',
   },
  
    smallLine: {
      width: 40,
      height: 7,
      alignSelf: 'center',
      backgroundColor: '#1D1238',
      borderRadius: 50,
      marginTop: 25,
      marginBottom: 15,
    },

  buttonCardsA: {
    flexDirection: 'row',
    width: '100%',
    height: 110,
    backgroundColor: '#FFF',
    borderRadius: 21,
    shadowColor: '#C1C1C1',
    elevation: 30,
    // alignItems: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  
  buttonCardsB: {
    width: 80,
    height: 110,
    //backgroundColor: '#FFF',
    borderRadius: 10,
    // shadowColor: '#C1C1C1',
    alignItems: 'center',
    // resizeMode: 'contain',
    // justifyContent: 'center',
  },

  buttonImage: {
    //marginLeft: 30,
    marginLeft: 5,  // Define a margem à esquerda como "auto" para centralizar na horizontal
    marginRight: 'auto', // Define a margem à direita como "auto" para centralizar na horizontal
    marginTop: 'auto',   // Define a margem superior como "auto" para centralizar na vertical
    marginBottom: 'auto',// Define a margem inferior como "auto" para centralizar na vertical
    width: '150%',
    height: '90%',
    resizeMode: 'center',

    
    
    // resizeMode: 'center',
    // backgroundColor: 'red'
  },

  buttonTexts: {
    fontWeight: '900',
    fontSize: 14,
    color: '#1D1238',
    letterSpacing: 0.5,
  },

  buttonSee: {
    fontSize: 50,
    backgroundColor: '#FFF6ED',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF7B02',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  buttonSeeFont: {
    fontSize: 12,
    color: '#FF7B02'
  },
  containerButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'green',
    marginRight: 10,
  },
  buttonEdit: {
    height: 25,
    width: 70,
    paddingHorizontal: '5%',
    backgroundColor: '#1D1238',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginHorizontal: 10
      
  },

  buttonEditFont: {
    fontSize: 10,
    color: '#fff'
  },

  textButtonExcluir: {
    fontSize: 10,
    color: '#fff',
  },

  buttonExcluir: {
    fontSize: 50,
    height: 25,
    width: 70,
    paddingHorizontal: '5%',
    backgroundColor: '#FF7B02',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginHorizontal: 10
   },

   textButtonIncluir: {
    fontSize: 10,
    color: '#fff',
  },

  buttonIncluir: {
    fontSize: 50,
    height: 20,
    paddingHorizontal: '5%',
    backgroundColor: '#347FC4',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
   },
   picker: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },


});

export default styles;