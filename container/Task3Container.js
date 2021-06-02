import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Toast} from 'native-base';
import Task3 from '../Task3'

export default class Task3Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname:'',
            lname:'',
        emailid:'',
        phoneno:'',
        states:'',
        check:'',
        pin:'',
        modalVisible: false
        
        };
      }
      handlefnameChange=(text)=>{
        this.setState({fname:text})
    
        
    }
    handlelnameChange=(text)=>{
        this.setState({lname:text})
    
        
    }
    handleemailidChange=(text)=>{
        this.setState({emailid:text})
    
        
    }
    handlephoneChange=(text)=>{
        this.setState({phoneno:text})
    
        
    }
    handlestateChange=(text)=>{
        this.setState({states:text})
    
        
    }
    handlepinChange=(text)=>{
        this.setState({pin:text})
    
        
    }
    chooseGender=(check)=>{
        this.setState({check:check})
    }
    setModalVisible=() =>{
        this.setState({modalVisible: !this.state.modalVisible});
        
      }
      CheckTextInput=()=>{
        switch (true) {
            case this.state.fname == '': 
            {
                Toast.show({
                text: "Please enter First name!",
                buttonText: "Okay",
                position: "top"
              }); 
            }
              break;
              case this.state.lname == '': 
            {
                Toast.show({
                text: "Please enter Last name!",
                buttonText: "Okay",
                position: "top"
              }); 
            }
            break;
            case this.state.emailid == '':
                {
                    Toast.show({
                    text: "Please enter Email ID!",
                    buttonText: "Okay",
                    position: "top"
                  }); 
                }
              break;
            case this.state.phoneno =='':
                {
                    Toast.show({
                    text: "Please enter Phone No!",
                    buttonText: "Okay",
                    position: "top"
                  }); 
                }
              break;
            case this.state.pin.length < 6:
                {
                    Toast.show({
                    text: "Please enter Phone No!",
                    buttonText: "Okay",
                    position: "top"
                  }); 
                }
              break;
            default:
                {
                    Toast.show({
                    text: "Success!",
                    buttonText: "Okay",
                    type:"success",
                    position: "top"
                  }); 
                }
              break;
          }
                            
                                         
                                                                 
            };
            
       
        render() {
            return (
             <Task3
              fname={this.state.fname}
              lname={this.state.lname}
              emailid={this.state.emailid}
              phoneno={this.state.phoneno}
              states={this.state.states}
              check={this.state.check}
              pin={this.state.pin}
              chooseGender={this.chooseGender}
              CheckTextInput={this.CheckTextInput}
              handlefnameChange={(text)=>this.handlefnameChange(text)}
              handlelnameChange={(text)=>this.handlelnameChange(text)}
              handleemailidChange={(text)=>this.handleemailidChange(text)}
              handlephoneChange={(text)=>this.handlephoneChange(text)}
              handlestateChange={(text)=>this.handlestateChange(text)}
              handlepinChange={(text)=>this.handlepinChange(text)}              
              setModalVisible={this.setModalVisible}
              modalVisible={this.state.modalVisible}
             />
            );
          }
        }
