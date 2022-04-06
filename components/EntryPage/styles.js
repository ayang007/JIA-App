import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundContainer: {
        width: '100%',
        height: '100%',
      },
      titles: {
        marginTop: '40%',
        width: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '500',
        color: '#fff',
        //Torq color blue is #00d4ff
      },
      subtitle: {
        fontSize: 16,
        color: '#fff'
      },
      image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      buttonsContainer: {
        position: 'absolute',
        bottom: 240,
        width: '100%'
      },
      usernameInput: {
        borderWidth: 1,
        borderColor: '#00d4ff',
        padding: 8,
        margin: 10,
        width: '90%',
        borderRadius: 20,
        top: 200,
        backgroundColor: 'white'
      },
      passwordInput: {
        borderWidth: 1,
        borderColor: '#00d4ff',
        padding: 8,
        margin: 10,
        width: '90%',
        borderRadius: 20,
        top: 195,
        backgroundColor: 'white'
      }
});

export default styles;