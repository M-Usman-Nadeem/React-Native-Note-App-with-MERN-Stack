import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,Alert
} from 'react-native';
import React, { useState } from 'react';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../utils/ResponsiveDesign';
import {Fonts} from '../constants/Fonts';
import {COLOR} from '../constants/Colors';
import axios from 'axios';

const CreateNewPassword = ({navigation}) => {
  const [password,setPassword]=useState()
  async function updatePassword(){
    const {data}=await axios.put('http://192.168.50.65:8000/api/updatePassword',{
      email:"mu538183@gmail.com",
      password
    })
    if(data.success){

      Alert.alert('your password has been updated.Kindly login with  your updated password')
      navigation.navigate('Login')
    }

  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backToLoginTxtContainer}>
        <Image
          source={require('../assets/images/Icon.png')}
          style={styles.backArrow}
          />

        <Text style={styles.backToLoginTxt}>Back to Login</Text>
      </TouchableOpacity> 
     
<View style={styles.childContainer1}>

  
       <Text style={styles.loginTxt}>Create a New Password</Text>
        <Text style={styles.notesIdea}>{`Your new password should be different\nfrom the previous password`}</Text>


       
       
          <View style={{gap:pixelSizeVertical(32)}}>

        <View>
            <Text style={styles.InpLabel}>Password</Text>
            <TextInput
            onChangeText={text=>setPassword(text)}
              style={[styles.border, styles.txtInp]}
              placeholder="********"
              placeholderTextColor={COLOR.baseGrey}
            />
            <Text style={styles.passwordReq}>
            min. 8 character, combination of 0-9, A-Z, a-z
            </Text>
          </View>
          <View>
            <Text style={styles.InpLabel}>Retype Password</Text>
            <TextInput
              style={[styles.border, styles.txtInp]}
              placeholder="********"
              
              placeholderTextColor={COLOR.baseGrey}
            />
          </View>
          </View>
          
      
         


      <View style={styles.subContainer2}>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>updatePassword()}>
          <Text style={styles.loginBtnTxt}>Create Password</Text>
      
        </TouchableOpacity>
      </View>
   

          </View>
    </View>
  );
};

export default CreateNewPassword;

const styles = StyleSheet.create({
  passwordReq:{color:COLOR.baseGrey,fontSize:fontPixel(12),marginTop:pixelSizeVertical(12)},
  backToLoginTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeHorizontal(15),
    marginTop: pixelSizeVertical(25),
  },
  childContainer1:{
    flex:1, justifyContent: 'flex-end',
  },
  backArrow: {
    width: 6,
    height: 10,
  },
  backToLoginTxt: {
    fontFamily: Fonts.Weight500,
    fontSize: fontPixel(16),
    color:COLOR.purple
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
   

    paddingHorizontal: pixelSizeHorizontal(16),
  },
  
  subContainer2: {
    justifyContent: 'center',
    marginTop:pixelSizeVertical(64),
    marginBottom:pixelSizeVertical(24)

  },
  notesIdea: {
    color: COLOR.darkGrey,
    fontSize: fontPixel(16),
    marginBottom:pixelSizeVertical(32)
  },
  loginTxt: {
    fontSize: fontPixel(32),
    fontFamily: Fonts.Weight700,
    color: COLOR.black,
    marginTop:pixelSizeVertical(26),
      marginBottom:pixelSizeVertical(16)
  },
  InpLabel: {
    fontFamily: Fonts.Weight500,
    color: COLOR.black,
    marginBottom: pixelSizeVertical(12),
  },
  border: {
    borderColor: COLOR.baseGrey,
    borderWidth: 1,
  },
  txtInp: {
    borderRadius: 8,
    paddingLeft: pixelSizeHorizontal(16),
    height:54,
    color: COLOR.baseGrey,
  },

  loginBtn: {
    backgroundColor: COLOR.purple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: pixelSizeHorizontal(22),
    paddingVertical: pixelSizeVertical(20),
    borderRadius: 100,
  },

  loginBtnTxt: {
    color: COLOR.white,
    fontSize: fontPixel(16),
    textAlign: 'center',
    flex: 1,
    fontFamily: Fonts.Weight500,
  },

 


  RegisterBtnTxt: {
    fontFamily: Fonts.Weight500,
    color: COLOR.purple,
    fontSize: fontPixel(16),
    textAlign: 'center',

  },
});
