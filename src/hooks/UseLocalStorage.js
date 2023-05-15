import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const useLocalStorage = () => {
const navigation=useNavigation()
    const  retrieveToken = async () => {
        try {
          const value = await AsyncStorage.getItem('token');
         return value
        } catch (error) {
          console.log('AsyncStorage error',error)

          // Error retrieving data
        }
      };
      const setToken = async (token) => {
        try {
          if(token){
    
            await AsyncStorage.setItem(
              'token',
              token,
              );
            
            }
        } catch (error) {
            console.log('AsyncStorage error',error)
        }
      };
    
  return (
    {
      retrieveToken,setToken
    }
  )
}

export default useLocalStorage

