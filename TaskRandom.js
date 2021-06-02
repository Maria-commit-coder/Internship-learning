import React, { Component } from 'react';
import { View, Text,ImageBackground } from 'react-native';
import{Avatar,} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

import { Container ,Card, CardItem, Right, Left, Body, Header} from 'native-base';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Modal from 'react-native-modal';
export default class TaskRandom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <Container>
      
         <Header style={{width:800,height:800,borderRadius:70,alignSelf:'center',top:'-140%',backgroundColor:'firebrick'}}>
          
             <View style={{flexDirection:"row"}}>
             <View style={{marginLeft:"5%",marginTop: "35%",}}>
                 <Text style={{color:"white",fontSize:15,fontStyle:"italic"}}>Followers</Text>
                 <Text style={{color:"white",fontSize:15}}>  200M</Text>
                 </View>
             <View  style={{marginLeft:"10%",marginTop: "5%",}}>
             <Avatar rounded title="VK" size="large" source={require('./Vicky.png')}/>
             <Text style={{color:"white",marginLeft:-20,fontSize:20}}>Vicky Kaushal</Text>
             </View>
             <View style={{marginLeft:"5%",marginTop: "35%",}}>
             <Text style={{color:"white",fontSize:15,fontStyle:"italic"}}>Following</Text>
             <Text style={{color:"white",fontSize:15}}>   1.2K</Text>
             </View>
             </View>
         
  
         </Header>
         <Card>
<CardItem>
<View style={{flexDirection:"row"}}>
<Avatar rounded title="VK" size="medium" source={require('./Vicky.png')}/>

<Text style={{fontSize:15}}>
  Scrolling will be worth it!
</Text>
</View>
<View style={{flexDirection:'row',marginLeft:"10%", marginTop:"15%"}}>

          <Icon name='eye' style={{color:'grey', marginLeft:5, marginTop:3}}/>

          <Text style={{color:'grey'}}>36</Text>

          <Icon name='comment' style={{color:'grey', marginLeft:5, marginTop:3}}/>

          <Text style={{color:'grey'}}>6</Text>

          <Icon name='thumbs-up' style={{color:'red', marginLeft:5, marginTop:3}}/>

          <Text style={{color:'grey'}}>2</Text>

          </View>
</CardItem>
  </Card>
  <Card>
<CardItem>
<View style={{flexDirection:"row"}}>
<Avatar rounded title="VK" size="medium" source={require('./Vicky.png')}/>

<Text style={{fontSize:15}}>
   is fun-tas-tic!
</Text>
</View>
<View style={{flexDirection:'row',marginLeft:"35%", marginTop:"15%"}}>

          <Icon name='eye' style={{color:'grey', marginLeft:5, marginTop:3}}/>

          <Text style={{color:'grey'}}>36</Text>

          <Icon name='comment' style={{color:'grey', marginLeft:5, marginTop:3}}/>

          <Text style={{color:'grey'}}>6</Text>

          <Icon name='thumbs-up' style={{color:'red', marginLeft:5, marginTop:3}}/>

          <Text style={{color:'grey'}}>2</Text>

          </View>
</CardItem>
  </Card>
     </Container>
  

    );
  }
}
