import React, { Component } from 'react';
import { View, TextInput,Text,  Button, TouchableOpacity, } from 'react-native';

import { Container,Icon ,Card, CardItem, Right, Left, Body} from 'native-base';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Modal from 'react-native-modal';
import {SearchBar} from 'react-native-elements';
var radio_props = [
  {label: 'Male             ', value: 1 },
  {label: 'Female', value: 0 }
];
 
export default class Task3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      search: '',
    };
  }
  
  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
   
    return (
      <Container>
      <TouchableOpacity style={{marginLeft:"2%",marginTop:"10%"}} onPress={() => {this.props.setModalVisible();}}>
      <View>
      <Icon name="search"/>
      </View>
    
      </TouchableOpacity>
     

     
        <Modal isVisible={this.props.modalVisible} marginBottom="92%" marginLeft="5%">
    
   <View style={{width:"100%"}}>
       
        <SearchBar
      placeholder="Search Here..."
      onChangeText={this.updateSearch}
      value={search}
      lightTheme={true}
      platform="android"
      onCancel={() => {this.props.setModalVisible();}}
      

    />
   </View>
           
    </Modal>
                   
               
              
        <View>
                    <View style={{flexDirection:"row"}}>
                    <View style={{marginLeft:"10%",marginTop:"10%"}}>
                      <View style={{flexDirection:"row"}}>
                        <Text>First Name</Text>
                        <Text style={{color:"red"}}> *</Text> 
                        </View>
                        <TextInput placeholder="Fname" maxLength={10} underlineColorAndroid={'black'} style={{textDecorationLine:"underline",}}  onChangeText={(text)=>this.props.handlefnameChange(text)} />
                    </View>
                    <View style={{marginLeft:"30%",marginTop:"10%"}}>
                    <View style={{flexDirection:"row"}}>
                       <Text>Last name</Text>
                        <Text style={{color:"red"}}> *</Text> 
                        </View>
                        <TextInput placeholder="Lname" maxLength={10} underlineColorAndroid={'black'} style={{justifyContent: 'flex-end',textDecorationLine:"underline",}}  onChangeText={(text)=>this.props.handlelnameChange(text)} />
                    </View>
                </View>
                <View>
                <View style={{flexDirection:"row"}}>
                    <Text style={{justifyContent:"center",marginTop:"2%", marginLeft:"10%"}}>EmailID</Text>
                    <Text style={{color:"red",lineHeight:30}}> *</Text> 
                    </View>
                    <TextInput placeholder="Email"underlineColorAndroid={'black'} marginLeft="10%" marginBottom="5%" marginRight="15%" keyboardType="email-address" style={{textDecorationLine:"underline",}}  onChangeText={(text)=>this.props.handleemailidChange(text)}/>
                    </View>
                    <View>
                    <View style={{flexDirection:"row"}}>
                    <Text style={{justifyContent:'center', marginLeft:"10%"}}>Phone Number</Text>
                    <Text style={{color:"red"}}> *</Text>
                    </View>
                    <TextInput placeholder="PhoneNo."underlineColorAndroid={'black'} marginLeft="10%" maxLength={10} marginBottom="5%" marginRight="15%" keyboardType="numeric" style={{textDecorationLine:"underline",}}  onChangeText={(text)=>this.props.handlephoneChange(text)}/>
                     
                   
                    </View>
                    <View>
                    <Text style={{justifyContent:'center', marginLeft:"10%"}}>State</Text>
                    <TextInput placeholder="State" underlineColorAndroid={'black'} marginLeft="10%" maxLength={10} marginBottom="5%" marginRight="15%" style={{textDecorationLine:"underline",}}  onChangeText={(text)=>this.props.handlestateChange(text)}/>
                    </View>
                    <View>
                    <View>
                    <View style={{flexDirection:"row"}}>
                    <Text style={{justifyContent:'center',marginTop:"1%", marginLeft:"10%"}}>Pincode</Text>
                    <Text style={{color:"red"}}> *</Text>
                    </View>
                    <TextInput placeholder="Pincode" underlineColorAndroid={'black'} marginLeft="10%" marginBottom="5%" marginRight="15%" keyboardType="numeric" style={{textDecorationLine:"underline",}}  onChangeText={(text)=>this.props.handlepinChange(text)}/>
                    </View>
                    <Text style={{justifyContent:'center',marginBottom:"1%", marginLeft:"10%"}}>Gender</Text>
                    <View style={{marginLeft:"10%"}}>
        <RadioForm
        formHorizontal={true}
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
        />
      </View>
      
                    </View>
              
                 </View>
    
      </Container>
    
    );
  }
}
