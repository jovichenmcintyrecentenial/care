import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, KeyboardAvoidingView } from 'react-native';
import AppTextInput from '../components/AppInputField';
import AppButton from '../components/AppButton';

function Login(props) {
    const [emailAdd, setEmailAdd] = useState('');
    const [password, setPassword] = useState('');

    const btnLogin = (e) => {
        // if( emailAdd == "App@test.com" && password == "welcome" ){
        //     // Navigate to app home
        //     props.navigation.navigate('AppHome')
        // }
        // else{
        //     Alert.alert("Wrong Username or Password")
        // }

        props.navigation.navigate('AppHome')
        
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ImageBackground 
                source={require('../assets/background.png')}
                style={styles.container}>

                    <View style={styles.top}>
                    <Text style={styles.header}>Creating the</Text>
                    <Text style={styles.header}>perfect</Text>
                    <Text style={styles.header}>caring environment</Text>

                    <Text style={styles.subHeader}>Centennial Care Home</Text>
                    </View>

                    <View style={styles.loginContainer}>
                    <Text style={styles.title}>Login</Text>

                    <AppTextInput placeholder="Email Address" onChangeText={ (emailAdd) => setEmailAdd( emailAdd ) } />
                    <AppTextInput placeholder="Password" textContentType="password" secureTextEntry={true} onChangeText={ (password) => setPassword( password ) } />
                    
                    <AppButton text="Login" onPress={ () => btnLogin()  }/>
                    
                    <Text style={styles.forgotPass}>Forgot password?</Text>
                    <Text style={styles.signUp}>Don't have an account?  
                        <Text style={styles.signUpInner}> Sign Up</Text>
                    </Text>
                    </View>


            </ImageBackground>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      backgroundColor: '#000000',
      width:'100%',
      height:'100%',
    },
    header:{
      color:'#FFFFFF',
      fontSize:38,
    },
    subHeader:{
      fontSize: 16,
      color: '#5298EB',
      marginTop: 20
    },
    top:{
      height:'43%',
      alignItems:'left',
      justifyContent:'flex-end',
      padding:30,
    },
    loginContainer:{
      paddingLeft: 30,
      paddingRight: 30,
      marginTop: 10
    },
    title:{
      color:'#FFFFFF',
      fontSize:18,
    },
    forgotPass:{
      color:"#FFFFFF", 
      marginTop: 20
    },
    signUp:{
      color:"#FFFFFF", 
      marginTop:35, 
      textAlign:'center'
    },
    signUpInner:{
      color: "#5298EB"
    }
  });

export default Login;