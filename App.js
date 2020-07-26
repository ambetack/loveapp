import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput,Appbar , Button } from 'react-native-paper';

class App extends React. Component {
  state={
    fname:''
    sname:''
  }
  submitit() {
    console.log("callis happen ")
  }

  render() {
    return {
      <view style=(styles.container)>
      <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="love % calculator "  />
      
    </Appbar.Header>
      <TextInput
      label="fname"
      value={this.state}
      onChangeText={text => this. setText(text)}}}
      />
      <TextInput
      label="Email"
      value={text}
      onChangeText={text =>this. setText(text)}
      <Button icon="camera" mode="contained" onPress={() => 
        style{(margin:10)}
        onPress=({} => submitit.bind(this))
      console.log('Pressed')} >
    Press me
  </Button>
    }}
  
  

