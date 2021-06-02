import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container,Card,CardItem,SafeAreaView, Header, Content, Title, Footer, Icon, FooterTab, Left, Body, Right, Button,} from 'native-base';

export default class Task4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>

        <Header style={{backgroundColor:"green"}}>
          <Left>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body style={{ alignItems: 'center',marginLeft:'5%' }}>
            <Title>Welcome Back</Title>
          </Body>
          <Right>
              <Button transparent>
                <Icon name='md-exit'/>
              </Button>
              </Right>
              </Header>
<View style={{margin:"2%"}}>
              <Card >
                  <CardItem bordered style={{backgroundColor:"silver"}}>
                  <View style={{flexDirection:"row"}}>
              <Text>DEVICE NAME:</Text>
              <Text style={{fontWeight:"bold"}}>Redmi Note7             #101</Text>
              </View>
                  </CardItem> 
                
                  <View style={{flexDirection:"row",backgroundColor:"gray"}}> 
                      <Button style={{backgroundColor:'green',width:"23%",margin:"5%"}}>
                        <View>
                          <Icon name='md-power' color="white" margin="5%"/>
                          <Text style={{marginBottom:"40%",marginLeft:"30%",color:"white"}}>ON</Text>
                          </View>
                      </Button>
                      <Button style={{backgroundColor:'red',width:"23%",margin:"5%"}}>
                        <View>
                          <Icon name='md-power' color="white" margin="5%"/>
                          <Text style={{marginBottom:"40%",marginLeft:"30%",color:"white"}}>OFF</Text>
                          </View>
                      </Button>
                      <Button style={{backgroundColor:'gold',width:"23%",margin:"5%"}}>
                        <View>
                          <Icon name='md-information-circle' color="white" margin="3%"/>
                          <Text style={{marginBottom:"40%",marginLeft:"30%",color:"white"}}>Query</Text>
                          </View>
                      </Button>
                  </View>
                 
                  <View  style={{flexDirection:"row",backgroundColor:"silver"}}>
                      <Icon name='settings' color="black"/>
                      <Text style={{marginTop:"2%", marginBottom:"2%",marginRight:"60%",fontWeight:"bold"}}>Device Settings</Text>
                        <Icon name="md-arrow-dropright" color="black"/>
                  </View>
                  </Card>
                  </View>
                   <View style={{margin:"2%"}}>
                  <Card>
                  <CardItem bordered style={{backgroundColor:"silver"}}>
                  <View style={{flexDirection:"row"}}>
              <Text  >DEVICE NAME:</Text>
              <Text style={{fontWeight:"bold"}}>Redmi Note7 Pro           #102</Text>
              </View>
                  </CardItem> 
                
             
                  <View style={{flexDirection:"row",backgroundColor:"gray"}}> 
                      <Button style={{backgroundColor:'green',width:"23%",margin:"5%"}}>
                        <View>
                          <Icon name='md-power' color="white" margin="5%"/>
                          <Text style={{marginBottom:"40%",marginLeft:"30%",color:"white"}}>ON</Text>
                          </View>
                      </Button>
                      <Button style={{backgroundColor:'red',width:"23%",margin:"5%"}}>
                        <View>
                          <Icon name='md-power' color="white" margin="5%"/>
                          <Text style={{marginBottom:"40%",marginLeft:"30%",color:"white"}}>OFF</Text>
                          </View>
                      </Button>
                      <Button style={{backgroundColor:'gold',width:"23%",margin:"5%"}}>
                        <View>
                          <Icon name='md-information-circle' color="white" margin="3%"/>
                          <Text style={{marginBottom:"40%",marginLeft:"30%",color:"white"}}>Query</Text>
                          </View>
                      </Button>
                  </View>
                  <View  style={{flexDirection:"row",backgroundColor:"silver"}}>
                      <Icon name='settings' color="black"/>
                      <Text style={{marginTop:"2%", marginBottom:"2%", marginRight:"60%",fontWeight:"bold"}}>Device Settings</Text>
                        <Icon name="md-arrow-dropright" color="black"/>
                  </View>
                  </Card>
                  </View>
                  <View  style={{marginLeft:"85%",marginTop:"60%",}}>
                    <Icon name="md-add-circle" style={{fontSize: 55,color:"green"}}/>
                    </View>

              </Container>

    );
  }
}
