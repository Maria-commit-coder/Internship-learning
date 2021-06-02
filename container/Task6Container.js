import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Task6 from '../Task6'

export default class Task6Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
        emailid:'',
        phoneno:'',
        modalVisible: false,
        };
      }
    
   
    handlenameChange=(text)=>{
        this.setState({name:text})
    
        
    }
    handleemailidChange=(text)=>{
        this.setState({emailid:text})
    
        
    }
    handlephoneChange=(text)=>{
        this.setState({phoneno:text})
    
        
    }
    setModalVisible=() =>{
        this.setState({modalVisible: !this.state.modalVisible});
        
      }
     
      
  render() {
    return (
     <Task6
      name={this.state.name}
      emailid={this.state.emailid}
      phoneno={this.state.phoneno}
      handlenameChange={(text)=>this.handlenameChange(text)}
      handleemailidChange={(text)=>this.handleemailidChange(text)}
      handlephoneChange={(text)=>this.handlephoneChange(text)}
      setModalVisible={this.setModalVisible}
      modalVisible={this.state.modalVisible}
     />
    );
  }
}
