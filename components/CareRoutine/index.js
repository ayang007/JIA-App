import React, {Component} from 'react';
import { Text, View, ImageBackground, StackNavigator, Button, TextInput} from 'react-native';
import styles from './styles.js';
import StyledButton from '../StyledButton/index.js';
import { NavigationContainer } from '@react-navigation/native';


const CareRoutine = ({navigation}) => {
  return (
    <View style={styles.backgroundContainer}> 
    <ImageBackground style={styles.image} />
    
    <View style={styles.titles}>
    <Text style={styles.title}>Welcome, Dr. Tsui! 3</Text>
    </View>
    <Button
        title="Back to Home"
        color="#f194ff"
        onPress={()=>navigation.navigate("HomePage")}
      />
    </View>

);
};

export default CareRoutine;