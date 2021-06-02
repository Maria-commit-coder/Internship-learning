import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Container,Card,CardItem,SafeAreaView, Header, Content, Title, Footer, Icon, FooterTab, Left, Body, Right, Button,} from 'native-base';

export default class Task3Prav extends Component {
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
              <Icon name='md-arrow-dropleft'/>
            </Button>
          </Left>
          <Body style={{ MarginLeft:'5%' }}>
            <Title>Bangalore</Title>
          </Body>
          <Right>
              <Text></Text>
              </Right>
              </Header>
              <View style={{margin:"2%"}}>
              <Card>
                    <CardItem>
                        <TouchableOpacity style={{flexDirection:"row"}}>
                     <Icon name="search" style={{color:"silver"}}/>
                      <Text style={{color:"silver"}}>Search for your city</Text>
                      </TouchableOpacity>
                    </CardItem>
              </Card></View>
              <Card>
                  <CardItem bordered>
                      <TouchableOpacity  style={{flexDirection:"row"}}>
                      <Icon name="ios-navigate" style={{color:"blue"}}/>
                      <Text style={{color:"blue"}}>Detect my location</Text>
                      </TouchableOpacity>
                  </CardItem>
             
              
                   <CardItem bordered>
                     
                   <Text style={{color:"silver"}}>
                      POPULAR CITIES
                  </Text>
                 
                   
                  </CardItem>
                  <CardItem bordered>
                     
                      
                      <View style={{borderWidth: 1,borderColor: "black",width:"25%"}}>
                      <TouchableOpacity>
                      <Icon name="ios-home" style={{marginLeft:"35%",marginTop: "20%",}}/>
                      <Text style={{marginLeft:"25%",marginBottom: "15%",}}>Mysuru</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={{borderWidth: 1,borderLeftWidth: 0,borderColor: "black",width:"25%"}}>
                      <TouchableOpacity>
                      <Icon name="ios-home" style={{marginLeft:"35%",marginTop: "20%",}}/>
                      <Text style={{marginLeft:"15%",marginBottom: "15%",}}>DelhiNCR</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={{borderWidth: 1,borderLeftWidth: 0,borderColor: "black",width:"25%"}}>
                      <TouchableOpacity>
                      <Icon name="ios-home" style={{marginLeft:"35%",marginTop: "20%",}}/>
                      <Text style={{marginLeft:"10%",marginBottom: "15%",}}>Hyderabad</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={{borderWidth: 1 ,borderLeftWidth: 0,borderColor: "black",width:"25%"}}>
                      <TouchableOpacity>
                      <Icon name="ios-home" style={{marginLeft:"35%",marginTop: "20%",}}/>
                      <Text style={{marginLeft:"15%",marginBottom: "15%",}}>Chennai</Text>
                      </TouchableOpacity>
                      </View>
                      
                      
                                          
                  </CardItem>
                  <CardItem bordered style={{backfaceVisibility:"hidden",margin:'10%'}}>
                     
                      
                      <View style={{borderWidth:1,borderColor: "black",width:"25%"}}>
                      <TouchableOpacity>
                      <Icon name="ios-home" style={{marginLeft:"35%",marginTop: "20%",}}/>
                      <Text style={{marginLeft:"25%",marginBottom: "15%",}}>Pune</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={{borderWidth: 1,borderLeftWidth: 0,borderColor: "black",width:"25%"}}>
                      <TouchableOpacity>
                      <Icon name="ios-home" style={{marginLeft:"35%",marginTop: "20%",}}/>
                      <Text style={{marginLeft:"28%",marginBottom: "15%",}}>Kochi</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={{borderWidth: 1,borderLeftWidth: 0,borderColor: "black",width:"25%"}}>
                      <TouchableOpacity>
                      <Icon name="ios-home" style={{marginLeft:"35%",marginTop: "20%",}}/>
                      <Text style={{marginLeft:"15%",marginBottom: "15%",}}>Lucknow</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={{borderWidth: 1 ,borderLeftWidth: 0,borderColor: "black",width:"25%"}}>
                      <TouchableOpacity>
                      <Icon name="ios-home" style={{marginLeft:"35%",marginTop: "20%",}}/>
                      <Text style={{marginLeft:"30%",marginBottom: "15%",}}>Goa</Text>
                      </TouchableOpacity>
                      </View>
                      
                      
                                          
                  </CardItem>
                  <CardItem>
                     
                      
                      <View style={{borderWidth: 1,borderColor: "black",width:"25%"}}>
                      <TouchableOpacity>
                      <Icon name="ios-home" style={{marginLeft:"35%",marginTop: "20%",}}/>
                      <Text style={{marginLeft:"5%",marginBottom: "15%",}}>Ahmedbad</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={{borderWidth: 1,borderLeftWidth: 0,borderColor: "black",width:"25%"}}>
                      <TouchableOpacity>
                      <Icon name="ios-home" style={{marginLeft:"35%",marginTop: "20%",}}/>
                      <Text style={{marginLeft:"5%",marginBottom: "15%",}}>Chandigarh</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={{borderWidth: 1,borderLeftWidth: 0,borderColor: "black",width:"25%"}}>
                      <TouchableOpacity>
                      <Icon name="ios-home" style={{marginLeft:"35%",marginTop: "20%",}}/>
                      <Text style={{marginLeft:"15%",marginBottom: "15%",}}>Kodagu</Text>
                      </TouchableOpacity>
                      </View>
                                    
                      
                                          
                  </CardItem>
                  
             
              
                   <CardItem>
                     
                  <TouchableOpacity>
                  <Text style={{color:"gray"}}>
                      Other CITIES
                  </Text>
                  </TouchableOpacity>
                 
                   
                  </CardItem>
                  <CardItem bordered>
                    <TouchableOpacity>
                       
                     <Text style={{color:"black"}}>
                        Ranchi
                    </Text>
                   
                    </TouchableOpacity>
                     
                    </CardItem>
                    <CardItem bordered>
                     
                    <TouchableOpacity>
                    <Text style={{color:"black"}}>
                        Udaipur
                    </Text>
                    </TouchableOpacity>
                   
                     
                    </CardItem>
                    <CardItem bordered>
                   <TouchableOpacity>
                       
                   <Text style={{color:"black"}}>
                        Shimla
                    </Text>
                   
                   </TouchableOpacity>
                     
                    </CardItem>
            </Card>
      </Container>
    );
  }
}


