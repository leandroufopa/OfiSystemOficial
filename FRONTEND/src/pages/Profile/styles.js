import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1D1238',
    },
  
    containerLogo: {
      width: 190,
      height: 48,
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 20,
      alignItems: 'center',
      alignSelf: 'center',
      resizeMode: 'contain',
    },

    containerProfile: {
      flexDirection: 'row',
      height: 120,
      // backgroundColor: 'grreen',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginBottom: 40,
      
    },
    
    circleProfile: {
      height: 120,
      width: 120,
      backgroundColor: '#1D1238',
      borderRadius: 80,
      resizeMode: 'contain',
      justifyContent: 'center',
      alignItems: 'center',
    },

      imageProfile: {
      flex: 1,
      width: '70%',
      height: '70%',
      resizeMode: 'contain',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'blue'
    },

    nameProfile: {
      fontSize: 14,
      color: '#1D1238',
      fontWeight: '900',
    },

    functionProfile: {
      fontSize: 14,
      color: '#1D1238',
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
      borderWidth: 1,
      borderRadius: 10,
      marginRight: 30,
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
    },
  
    text: {
      fontSize: 12,
      color: '#8C8C8C',
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