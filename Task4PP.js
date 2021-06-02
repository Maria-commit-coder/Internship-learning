import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container,Card,CardItem,SafeAreaView, Header, Content, Title, Footer, Icon, FooterTab, Left, Body, Right, Button,} from 'native-base';
import{Avatar,} from 'react-native-elements';

export default class Task4PP extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <Container style={{backgroundColor:"silver"}}>
         
        <Header style={{backgroundColor:"darkblue"}}>
          <Left>
            <Button transparent>
              <Icon name='md-arrow-back'/>
            </Button>
          </Left>
          <Body style={{ MarginLeft:'5%' }}>
            <Title>Profile</Title>
          </Body>
          <Right>
              <Button transparent>
                <Icon name='md-exit'/>
              </Button>
              </Right>
              </Header>
              <View style={{marginLeft:"2%",marginRight:"2%",marginBottom:"10%"}}>
        <Card>
            <CardItem header bordered>
            <Avatar rounded size="large"
  source={require('./Maria.jpg')}
/>
            <Text style={{fontWeight:"bold",marginLeft:"5%", height:40,fontSize:22,color:"darkblue"}}>Syeda Maria Anjum</Text>
            </CardItem>
            <CardItem>
                <View style={{flexDirection:"row",marginLeft:"10%"}}>
                <Button style={{marginRight:"35%", backgroundColor:"silver",width:"30%"}}>
                    <Text style={{marginLeft:"15%",fontSize:10,color:"gray"}}>View Profile</Text>
                </Button>
                <Button style={{ width:"30%",backgroundColor:"green"}}>
                    <Text style={{fontSize:10,marginLeft:"25%",color:"white"}}>Add User</Text>
                </Button>
                </View>
            </CardItem>
        </Card> 
        </View>
        <View style={{marginLeft:"2%",marginRight:"2%",}}>
            <Card bordered>
                <CardItem>
                    <Avatar rounded title="PP" size="small" source={require('./Pooja.jpg')}/>
                    <Text style={{marginRight:"15%",marginLeft:"1%",fontSize:10}}>Pooja Polampalli</Text>
                    <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{backgroundColor:"lightgreen",flexDirection:"row", width:"35%"}}>
                        <Icon name="md-heart" style={{color:"green",fontSize:15,marginLeft: "5%",marginTop: "20%",}}/>
                       <Text style={{color:"green",marginTop:"20%",fontSize:12}}>+23</Text>
                    </TouchableOpacity>
                    <View style={{marginLeft:"2%",marginRight:"2%"}}>
                    <Button style={{backgroundColor:"silver"}}>
                        <Icon name="md-woman" style={{color:"gray",fontSize:15}}/>
                    </Button>
                    </View>
                    <View>
                        <Button style={{backgroundColor:"silver"}}>
                            <Icon name="md-contacts" style={{color:"gray",fontSize:15}}/>

                        </Button>
                    </View>
                    </View>
                </CardItem>
            </Card>
            <Card>
                <CardItem>
                    <Avatar rounded title="SB" size="small" source={require('./Sowmya.jpg')}/>
                    <Text style={{marginRight:"8%",marginLeft:"1%",fontSize:10}}>Sowmya BalaKrishna</Text>
                    <View style={{flexDirection:"row"}}>
                    <Button style={{backgroundColor:"lightyellow",width:"35%"}}>
                        <Icon name="md-thumbs-down" style={{color:"red",fontSize:20}}/>
                        <Text style={{color:"red",fontSize:10}}>-7</Text>
                    </Button>
                    <View style={{marginLeft:"3%",marginRight:"2%"}}>
                    <Button style={{backgroundColor:"silver"}}>
                        <Icon name="md-woman" style={{color:"gray",fontSize:15}}/>
                    </Button>
                    </View>
                    <View>
                        <Button style={{backgroundColor:"silver"}}>
                            <Icon name="md-contacts" style={{color:"gray",fontSize:15}}/>

                        </Button>
                    </View>
                    </View>
                </CardItem>
            </Card>
            <Card>
                <CardItem>
                    <Avatar rounded title="PP" size="small" source={require('./Mehak1.jpg')}/>
                    <Text style={{marginRight:"5%",marginLeft:"1%",fontSize:10}}>Syeda Mehak Anjum </Text>
                    <View style={{flexDirection:"row"}}>
                    <Button style={{backgroundColor:"lightyellow",width:"35%"}}>
                        <Icon name="md-thumbs-down" style={{color:"red",fontSize:20}}/>
                        <Text style={{color:"red",fontSize:10}}>-30</Text>
                    </Button>
                    <View style={{marginLeft:"4%",marginRight:"3%"}}>
                    <Button style={{backgroundColor:"silver"}}>
                        <Icon name="md-woman" style={{color:"gray",fontSize:15}}/>
                    </Button>
                    </View>
                    <View>
                        <Button style={{backgroundColor:"silver"}}>
                            <Icon name="md-contacts" style={{color:"gray",fontSize:15}}/>

                        </Button>
                    </View>
                    </View>
                </CardItem>
            </Card>
            <Card>
                <CardItem>
                    <Avatar rounded title="PP" size="small" source={require('./Vicky.png')}/>
                    <Text style={{marginRight:"15%",marginLeft:"2%",fontSize:10}}>Vicky Kaushal</Text>
                    <View style={{flexDirection:"row"}}>
                    <Button style={{backgroundColor:"lightgreen"}}>
                        <Icon name="md-heart" style={{color:"green",fontSize:20}}/>
                        <Text style={{color:"green",fontSize:10}}>+100</Text>
                    </Button>
                    <View style={{marginLeft:"4%",marginRight:"4%"}}>
                    <Button style={{backgroundColor:"silver"}}>
                        <Icon name="md-man" style={{color:"gray",fontSize:15}}/>
                    </Button>
                    </View>
                    <View>
                        <Button style={{backgroundColor:"silver"}}>
                            <Icon name="md-contacts" style={{color:"gray",fontSize:15}}/>

                        </Button>
                    </View>
                    </View>
                </CardItem>
            </Card>
        </View>
     </Container>
    );
  }
}
