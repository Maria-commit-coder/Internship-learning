import React, { Component } from 'react';
import { View, Text ,TouchableHighlight, TouchableOpacity, TextInput} from 'react-native';
import { Container,Card,CardItem,SafeAreaView, Header, Content, Title,Icon, Footer, FooterTab, Left, Body, Right, Button, Textarea,} from 'native-base';
import {Avatar} from 'react-native-elements';
import Modal from 'react-native-modal';
export default class Task6 extends Component {


  render() {
    return (
      <Container>
          <Header>
          <Left>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body style={{ alignItems: 'center',}}>
            <Title>Adihptham</Title>
          </Body>
          <Right>
              <Button transparent onPress={() => {
            this.props.setModalVisible();
          }}>
                  
               <Avatar rounded title="G"/>
              </Button>
              </Right>
              </Header>
              <Modal isVisible={this.props.modalVisible}>
<View style={{marginTop: 22}}>
  <View>
   <Card>
       <CardItem>
           <Icon name="md-arrow-back"/>
           <Text style={{fontWeight:"bold",fontSize:20,marginLeft:"1%",marginRight:"30%"}}>
               Update User Profile
           </Text>
           
        </CardItem>
        <CardItem bordered>
            <View >
            <View style={{flexDirection:"row"}}>
                <Icon name="person"/>

            <Text style={{fontSize:15,marginBottom: "5%",marginLeft: "5%",}}>Display Name:</Text>
           </View>
            <TextInput placeholder="Enter name" underlineColorAndroid={'black'} style={{marginLeft: "20%",textDecorationLine:"underline", marginRight:"5%",}} onChangeText={(text)=>this.props.handlenameChange(text)}>
            </TextInput>
            
            </View>
        </CardItem>
        <CardItem bordered>
              <View>
              <View style={{flexDirection:"row"}}>
              <Icon name="ios-desktop"/>
              <Text style={{fontSize:15,marginBottom: "5%",marginLeft: "5%",}}>  EmailID:</Text>
              </View>
              <TextInput placeholder="Email" underlineColorAndroid={'black'} keyboardType="email-address" style={{marginLeft: "25%",textDecorationLine:"underline", marginRight:"5%"}} onChangeText={(text)=>this.props.handleemailidChange(text)}>
              </TextInput>
              </View>
          </CardItem>
          <CardItem bordered>
          <View>
          <View style={{flexDirection:"row"}}>
          <Icon name="md-phone-portrait"/>
              <Text style={{fontSize:15,marginBottom: "5%",marginLeft: "5%",}}>
                  Phone Number:
              </Text>
              </View>
              <TextInput placeholder="Phone No." underlineColorAndroid={'black'} keyboardType="numeric" style={{marginLeft: "20%",textDecorationLine:"underline",marginRight:"5%"}} onChangeText={(text)=>this.props.handlephoneChange(text)}>
              </TextInput>
              </View>
          </CardItem>
          <CardItem>
            <Button title="validate" onPress={() => {this.props.CheckTextInput();
                }}>

            </Button>

              <Button  style={{backgroundColor:"green",marginLeft:"30%",width:"40%"}} onPress={() => {this.props.setModalVisible();
                }}>
                   
                  <Text style={{color:"white",marginLeft:"15%", fontSize:15,}}>SAVE DATA</Text>
                 
              </Button>
              </CardItem>
          
   </Card>

    
  </View>
</View>
</Modal>
        <Content>
      <Text style={{fontSize:25,marginTop: "5%",marginLeft:"15%",marginBottom:"5%"}}>Personal Information</Text>  
<View style={{marginLeft:"5%",marginRight:"5%"}}>
<Card>
    <CardItem bordered>
            <Text style={{fontSize:15,fontWeight:"bold"}} >Name:</Text>
             
            
    </CardItem>
    <CardItem bordered>
    <Text style={{fontSize:15,fontWeight:"bold"}} >Email Adress:</Text>
            <Text style={{marginLeft:"5%"}}>{this.props.emailid}</Text>
            
    </CardItem>
    <CardItem bordered>
    <Text style={{fontSize:15,fontWeight:"bold"}} >Phone Number:</Text>
            <Text style={{marginLeft:"5%"}}>{this.props.phoneno}</Text>
            
    </CardItem>
</Card>
</View>
</Content>
        <Footer >
            <FooterTab>
            <TouchableOpacity>
                       <Button>
                <Icon name="home" />
                <Text>Home</Text>
                
               </Button>
               </TouchableOpacity>
        <TouchableHighlight underlayColor='blue' 
         onPress={this.onPress}
        >
              <Button>
                <Icon name="settings" />
                <Text>Settings</Text>
              </Button>
              </TouchableHighlight>
              <TouchableHighlight>
              <View  style={{width:"110%",marginBottom:"60%"}}>
                 <Button>
                  <Icon active name="contact"/>
                  <Text>UserScan</Text>
                  </Button>
               
                </View>
              </TouchableHighlight>
              <TouchableHighlight underlayColor='blue' 
         onPress={this.onPress}
        >
              <Button>
                <Icon active name="help-circle" />
                <Text>Help</Text>
              </Button>
              </TouchableHighlight>
              <TouchableHighlight underlayColor='blue' 
         onPress={this.onPress}
        >
              <Button>
                <Icon name="search" />
                <Text>Support</Text>
              </Button>
              </TouchableHighlight>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}
