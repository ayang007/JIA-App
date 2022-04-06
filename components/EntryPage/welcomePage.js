import React, {Component} from 'react';
import { Text, View, ImageBackground, StackNavigator, Button, TextInput} from 'react-native';
import styles from './styles.js';
import StyledButton from '../StyledButton/index.js';
import { NavigationContainer } from '@react-navigation/native';


const entryPage = ({navigation}) => {
  return (
      <View style={styles.backgroundContainer}>
      <ImageBackground source={require('../../assets/appImages/newOcean.jpeg')}
        style={styles.image}
      />
  
      <View style={styles.titles}>
      <Text style={styles.title}>My Health Passport</Text>
      <Text> </Text>
      <Text style={styles.subtitle}>Log-in to view journey</Text>
  
  
      <TextInput style = {styles.usernameInput} placeholder = 'Username'/>
      <TextInput style = {styles.passwordInput} placeholder = 'Password'/>
      </View>
    
  
      <View style = {styles.buttonsContainer}>
      <StyledButton onPress={()=>navigation.navigate("HomePage")} />
      </View>
    
  
      </View>

  );
};

export default entryPage;