import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar,Icon} from 'react-native-elements';
import { Container,Card,SafeAreaView, Header, Content, Title, Footer, FooterTab, Left, Body, Right, Button, CardItem } from 'native-base';

export default class Task3PP extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <Container style={{backgroundColor:"silver"}}>
           
           <Header style={{backgroundColor:"indigo"}}>
          <Left>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body style={{ MarginLeft:'15%' }}>
          <Text style={{fontSize:20,color:"white"}}>Hello,Maria!</Text>
            <Text  style={{fontSize:10,marginLeft:"1%", color:"white"}}>Edit Profile</Text>
          </Body>
          <Right>
          <Avatar rounded size="small" source={require('./Maria.jpg')}/>
              </Right>
              </Header>
              <View style={{marginTop:"15%"}}>
                  <Card>
                      <CardItem bordered>
                      <TouchableOpacity>
                      <View style={{flexDirection:"row" }}> 
                          <Icon name="add-shopping-cart"/>
  <Text style={{fontSize:15,color:"black",marginLeft: "5%", marginRight: "27%",}}>Purchase History {'\n'} View bookings Purchases</Text>
         <Icon name="navigate-next"/>
          </View>
                      </TouchableOpacity>

                      </CardItem>
                      <CardItem bordered>
                      <TouchableOpacity>
                      <View style={{flexDirection:"row" }}> 
                          <Icon name="insert-invitation"/>
    <Text style={{fontSize:15,color:"black",marginLeft: "5%", marginRight: "16%",}}>Rewards  {'\n'} View rewards unlock new ones</Text>
         <Icon name="navigate-next"/>
          </View>
                      </TouchableOpacity>

                      </CardItem>
                      <CardItem bordered>
                      <TouchableOpacity>
                      <View style={{flexDirection:"row" }}> 
                          <Icon name="settings-applications"/>
    <Text style={{fontSize:15,color:"black",marginLeft: "5%", marginRight: "24%",}}>Accounts & Settings  {'\n'} Location, Payments & more</Text>
         <Icon name="navigate-next"/>
          </View>
                      </TouchableOpacity>

                      </CardItem>
                      

                      </Card>
                      <View style={{marginTop:"5%"}}>
                      <Card>
                      <CardItem bordered>
                      <TouchableOpacity>
                      <View style={{flexDirection:"row" }}> 
                          <Icon name="attach-money"/>
    <Text style={{fontSize:15,color:"black",marginLeft: "5%", marginRight: "62%",}}>Gift Card</Text>
         <Icon name="navigate-next"/>
          </View>
                      </TouchableOpacity>

                      </CardItem>
                      <CardItem bordered>
                      <TouchableOpacity>
                      <View style={{flexDirection:"row" }}> 
                          <Icon name="restaurant"/>
    <Text style={{fontSize:15,color:"black",marginLeft: "5%", marginRight: "30%",}}>Food Items & Bevarages</Text>
         <Icon name="navigate-next"/>
          </View>
                      </TouchableOpacity>

                      </CardItem>
                      <CardItem bordered>
                      <TouchableOpacity>
                      <View style={{flexDirection:"row" }}> 
                          <Icon name="business"/>
    <Text style={{fontSize:15,color:"black",marginLeft: "5%", marginRight: "68%",}}>Offers</Text>
         <Icon name="navigate-next"/>
          </View>
                      </TouchableOpacity>

                      </CardItem>
                      <CardItem bordered>
                      <TouchableOpacity>
                      <View style={{flexDirection:"row" }}> 
                          <Icon name="headset"/>
    <Text style={{fontSize:15,color:"black",marginLeft: "5%", marginRight: "45%",}}>Help and Support</Text>
         <Icon name="navigate-next"/>
          </View>
                      </TouchableOpacity>

                      </CardItem>
                  </Card>
                  </View>
                  <View style={{flexDirection:"row",marginTop:"5%",}}>
                  <TouchableOpacity>
                  <Text style={{marginLeft:"25%"}}>Share</Text>
                  </TouchableOpacity>
                  <Text>|</Text>
                 <TouchableOpacity>
                 <Text style={{marginLeft:"20%"}}>Rate Us </Text>
                 </TouchableOpacity>
                  <Text>|</Text>
                  <TouchableOpacity>
                  <Text style={{marginLeft:"10%",marginRight:"10%"}}>Adihptham </Text>
                  </TouchableOpacity>
                  </View>
                  <Text style={{marginTop:"8%",marginLeft:"35%"}}>
                      App Version 5.8.5
                  </Text>
              </View>
     </Container>
    );
  }
}
