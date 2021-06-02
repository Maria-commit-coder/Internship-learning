import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Task5 from '../Task5'

export default class Task5Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adult:'',
            child1:'',
            total:0,
            result:0,
            num:0,
            num1:0,
        modalVisible: false,
        modalVisibles:false,
        };
      }
      menutrig=()=>{
        return <Icon name='more-vert'/>
      }
      setModalVisible=() =>{
    this.setState({modalVisible: !this.state.modalVisible});
    
  }
  doAction=()=>{
    this.setState({total : parseInt(this.state.num) * 550 })  
    this.setState({result : (parseInt(this.state.num) * 550) - (0.1*parseInt(this.state.num)*550)})
  
    }
  handleAdultChange=(text)=>{
    this.setState({adult:text})
    

    
}
handleNumChange=(value)=>{
  this.setState({num:value})
}
handleNum1Change=(value)=>{
  this.setState({num1:value})
}
handleChildChange=(text)=>{
    this.setState({child1:text})

    
}
setModalVisibles=() =>{
    this.setState({modalVisibles: !this.state.modalVisibles});
    
  }
  render() {
    return (
     <Task5
     adult={this.state.adult}
     child1={this.state.child1}
     result={this.state.result}
     total={this.state.total}
     num={this.state.num}
     num1={this.state.num1}
     doAction={this.doAction}
     menutrig={this.menu}
     handleAdultChange={(text)=>this.handleAdultChange(text)}
     handleChildChange={(text)=>this.handleChildChange(text)}
     handleNumChange={(value)=>this.handleNumChange(value)}
     handleNum1Change={(value)=>this.handleNum1Change(value)}
       setModalVisible={this.setModalVisible}
       setModalVisibles={this.setModalVisibles}
      modalVisible={this.state.modalVisible}
      modalVisibles={this.state.modalVisibles}
     />
    );
  }
}
