import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({

    modalBackground: {
      backgroundColor: 'white',
      marginLeft: 30,
      marginRight: 30,
      width: '80%',
      height: 330,
      // backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignSelf: 'center',
      top: 270,
    },

    
  containerHeader: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 0,
    marginTop: 10,
    //marginBottom: 20,
    marginLeft: 14,
    marginRight: 14,
    
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
    modalContent: {
      // marginLeft: 30,
      // marginRight: 30,
      // width: '73%',
      height: 250,
      backgroundColor: 'white',
      padding: 25,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      top: 40,
      borderWidth: 1,
      borderColor: '#1D1238',
    },
    
    modalText: {
      fontSize: 23,
      textAlign: 'center',
    },
  
    container: {
      flex: 1,
      backgroundColor: '#1D1238',
    },
  
    containerLogo: {
      width: 190,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      resizeMode: 'contain',
      marginTop: 10,
      marginBottom: 20,
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
    
    inputContainer: {
      flex: 1,
      height: 50,
      marginLeft: 30,
      marginRight: 30,
      padding: 14,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      backgroundColor: '#F4F4F4',
      alignItems: 'center',
      flexDirection: 'row',
  
  
    },
    inputContainerFocused: {
      flex: 1,
      marginLeft: 30,
      marginRight: 30,
      borderWidth: 1,
      borderRadius: 10,
      height: 50,
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#fff',
      padding: 14,
  
    },
  
    logoIcon: {
      marginTop: 10,
      marginBottom: 10,
      width: 90,
      height: 90,
      alignSelf: 'center'
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
  
    title: {
      fontSize: 19,
      color: '#1D1238',
      fontWeight: '900',
      marginBottom: 2,
      alignContent: 'center',
      alignSelf: 'center',
      textAlign: 'center'
    },
  
    inputTitle: {
      fontSize: 14,
      color: '#3E3E3E',
      fontWeight: '900', 
      marginTop: 0,
      marginBottom: 8,
      marginLeft: 30,
  
    },
  
    inputImage: {
      height: 20,
      width: 20,
      resizeMode: 'center',
    },
    
    input: {
      flex: 1,
      height: 50,
      paddingLeft: 10,
      paddingRight: 10,
      // backgroundColor: 'red',
    },
  
    text: {
      fontSize: 12,
      color: '#8C8C8C',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    
    buttonBack: {
      top: 267,
      backgroundColor: '#1D1238',
      height: 50,
      width: 270,
      fontSize: 16,
      marginTop: 15,
      marginBottom: 7,
      marginLeft: 30,
      marginRight: 30,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
  
    button: {
      backgroundColor: '#1D1238',
      height: 50,
      fontSize: 16,
      marginTop: 15,
      marginBottom: 7,
      marginLeft: 30,
      marginRight: 30,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    buttonText: {
      // width: '80%',
      fontSize: 13,
      color: '#FFF',
      fontWeight: 'bold'
    },
  
    registerOptions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 30,
      paddingRight: 30,
      marginBottom: '6%',
  
    },
  
    registerOptionsText: {
      fontWeight: '900',
  
    },
    containerNotification: {
      flex: 1,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonNotification: {
      backgroundColor: 'lightblue',
      padding: 10,
      borderRadius: 5,
    },
    modalContainerNotification: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    justifyContent: 'center', // Alinha o conteúdo na parte inferior
    alignItems: 'center',        // Centraliza horizontalmente
      
      
    },
    notificationTextContainer: {
      backgroundColor: 'white',
      padding: 20,
      
      borderRadius: 5,
      marginBottom: 20,
    },
  
    notificationText: {
      color: '#1D1238',
      fontWeight: 'bold',
      fontSize: 16, 
    },

    notificationTextErro: {
      color: '#FF7B02',
      fontWeight: 'bold',
      fontSize: 24, 
    },
  
    notificationButtonContainer: {
      backgroundColor: '#1D1238',
      height: 50,
      width: '90%',
      fontSize: 16,
      marginBottom: 7,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    notificationButtontText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 12, 
    },
    msgAlert:{
      fontWeight: "bold",
      fontSize: 18,
      color: "#FF7B02",
      marginBottom: 10,
      textAlign: 'center',
    },
  
  });

  export default styles;