import React, { Component } from 'react';
import { View, Text,TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Container,Card,CardItem,DatePicker, Header, Content, Title, Footer, FooterTab, Left, Body, Right, Button,} from 'native-base';
import{Avatar,Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import NumericInput from 'react-native-numeric-input';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
export default class Task5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
     <Container>
           
        <Header style={{backgroundColor:"skyblue",height:250,marginBottom: "2%",}}>
           <View style={{marginTop:"5%",marginRight:"5%",}} >
                     <TouchableOpacity>
            <Icon name='arrow-back' color="white" />
            </TouchableOpacity>
            </View> 
          <View style={{flexDirection:"column"}}>
            <View style={{ flexDirection:"row",marginTop:"5%",marginBottom: "2%",marginRight:"50%"}}>
    <Title style={{fontSize:20}}>RijksMusuems</Title>
     </View>
            
            <Card style={{borderBottomWidth:5,borderColor:"purple",}}>
           
                <View style={{flexDirection:"row"}}>
                        <Text style={{fontWeight:"bold",fontSize:20,marginRight:"35%"}}> Priority Entrance
                      </Text>

                     
</View>
<CardItem>

<Icon name="date-range"/>
                      <DatePicker defaultDate={new Date(2020, 0, 22)}></DatePicker>
                         </CardItem>  
                         <CardItem>
<View style={{flexDirection:"column"}}>
  <View style={{flexDirection:"row"}}>
                         <Icon name="person-add"/>
                         <Text style={{marginLeft:"5%"}}>{this.props.num}</Text>
                         <Text style={{marginLeft:"5%"}}>Adults</Text>
                      </View>
                      <View style={{flexDirection:"row"}}>
                      <Icon name="person-add"/>
                      <Text style={{marginLeft:"5%"}}>{this.props.num1}</Text>
                         <Text style={{marginLeft:"5%"}}>Children</Text>
                      </View> 
                      </View>
                         </CardItem>  
            </Card>
            </View>
           
           
    <Menu>
      <MenuTrigger><Icon name='more-vert' marginTop="55%"/></MenuTrigger>
       
      <MenuOptions >
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
        <MenuOption onSelect={() => alert(`Delete`)} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
      </MenuOptions>
    </Menu>
             
            
              </Header>
              <ScrollView>
                  
                  <View style={{marginLeft:"5%",}}>
              <Text style={{fontWeight:"bold"}}>
                  WHAT TICKETS WOULD YOU LIKE TO BUY?
                  
                  </Text>
                  <Modal isVisible={this.props.modalVisible}>
                    <Card>
                      <CardItem>
                        <TextInput placeholder="0" keyboardType="numeric" onChangeText={(text)=>this.props.handleAdultChange(text)}>
                        </TextInput>
                        <Button style={{width:"30%",marginLeft:"60%",backgroundColor:"skyblue"}} onPress={()=>{this.props.setModalVisible()}}>
                         <Text style={{marginLeft:"25%"}}>
                           SAVE
                         </Text>
                       </Button>
                      </CardItem>
                    </Card>
                  </Modal>
                 <Modal isVisible={this.props.modalVisibles}>
                   <Card>
                     <CardItem>
                       <TextInput placeholder="0" keyboardType="numeric" onChangeText={(text)=>this.props.handleChildChange(text)}>

                       </TextInput>
                       <Button style={{width:"30%",marginLeft:"60%",backgroundColor:"skyblue"}} onPress={()=>{this.props.setModalVisibles()}}>
                         <Text style={{marginLeft:"25%"}}>
                           SAVE
                         </Text>
                       </Button>
                     </CardItem>
                   </Card>
                 </Modal>
                  </View>  
                  <View style={{marginLeft:"5%",marginRight: "5%",}}>
                  <Card>           
                    <CardItem>
                      
                          <Button style={{width:"25%",backgroundColor:"skyblue"}} >
                              <Text style={{marginLeft:"40%",color:"white",fontWeight:"bold",fontSize:25}}>{this.props.num}</Text>
                        </Button>
                        <View  style={{marginLeft:"5%",marginBottom: "1%",marginRight: "10%",}}>
                        <Text style={{fontWeight:"bold",fontSize:17}}>
                          Adult
                      </Text>
                      <Text>{'\n'}
                          Age 15+yrs
                          {'\n'}
                         $550/person</Text> 
                         </View>    
                         <NumericInput 
            
            onChange={value => this.props.handleNumChange(value)} 
            minValue={0}
            maxValue={10}
            totalWidth={100} 
            totalHeight={30} 
            iconSize={25}
            step={1}
            valueType='integer'
            rounded 
            textColor="skyblue" 
            iconStyle={{ color: 'skyblue' }} 
            rightButtonBackgroundColor='white'            
            leftButtonBackgroundColor='white'/>
                        
                  </CardItem>
              </Card>
              <Card>           
                    <CardItem>
                      
                          <Button style={{width:"25%",backgroundColor:"silver"}} >
                              <Text style={{marginLeft:"40%",color:"black",fontWeight:"bold",fontSize:25}}>{this.props.num1}</Text>
                        </Button>
                        <View  style={{marginLeft:"5%",marginBottom: "1%",marginRight: "15%",}}>
                        <Text style={{fontWeight:"bold",fontSize:17}}>
                          Child
                      </Text>
                      <Text>{'\n'}
                          Age 1-2yrs
                          {'\n'}
                        FREE</Text> 
                         </View>  
                         <NumericInput 
            
            onChange={value => this.props.handleNum1Change(value)} 
            minValue={0}
            maxValue={10}
            totalWidth={100} 
            totalHeight={30} 
            iconSize={25}
            step={1}
            valueType='integer'
            rounded 
            textColor="skyblue" 
            iconStyle={{ color: 'skyblue' }} 
            rightButtonBackgroundColor='white'            
            leftButtonBackgroundColor='white'/>
                  </CardItem>
              </Card>
              
              <View style={{marginLeft:"2%",marginTop:"5%"}}>
              <Text style={{fontWeight:"bold"}}>
                  DO YOU HAVE A DISCOUNT COUPON?
                  
                  </Text>
                  </View> 
                  
                  
                  <View style={{marginLeft:"1%",marginRight:"1%"}}>
                      <Card>
            <CardItem bordered >
                         
                            <Button style={{backgroundColor:"skyblue",width:"80%",marginRight:"10%"}} onPress={() => {this.props.doAction();
                }}>
                            <Text style={{color:"black",marginLeft:"15%"}}>
                               Click here to Calculate total{'\n'}          
                               &  Avail 10% Discount!
                            </Text>
                            </Button>
                            <Icon name="face"/>
                          </CardItem>
                      </Card>
                      <Card>
                    <CardItem>
                      <Text>Your Total: $ {this.props.total}</Text>
                    </CardItem>
                  </Card>
                  </View>
                  <View style={{marginRight:"2%",marginLeft:"2%"}}></View>
                  <Card>
                      <CardItem>
                      <View  style={{marginRight: "20%",}}>
                        <Text style={{fontWeight:"bold",fontSize:18}}>
                         Grand Total
                      </Text>
                      <Text style={{fontStyle:"italic",marginBottom: "2%",}}>{'\n'} $ {this.props.result}
                         </Text> 
                         </View> 
                         <Button iconRight style={{backgroundColor:"orange",width:"50%"}}>
            
            <Text style={{marginLeft:"25%"}}> Next</Text>
            <Icon name='navigate-next'style={{marginRight:"25%"}} />
          </Button>
                      </CardItem>
                  </Card>
              </View> 
      
              </ScrollView>

     </Container>
    );
  }
}
