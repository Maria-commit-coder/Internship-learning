import React, { Component } from 'react';
import { StyleSheet,Linking,View,Image, Text,Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Main extends Component {
   render() {
    return (
        <View style={styles.backk}>
          <Image style={{width: 75, height: 75}}
          source={require('./Picture3.png')}
        />
                <Text style={styles.container}> Welcome to ADIHPTHAM </Text>
       <View style={{padding: 2, flexDirection:'row'}}>
        <View style={{borderColor:'gray',margin:"5%",color:'white',borderWidth:1,flexDirection:'row'}}>
       <Icon name='user' size={20} color="white" style={{margin:10}} />
        <TextInput
        placeholder='Name'
        placeholderTextColor='white'
      style={{ height: 40, color:'white',width:"90%"}}
    />
    </View>
   </View>
   <View style={{padding: 2, flexDirection:'row'}}>
   <View style={{borderColor:'gray',margin:"5%",color:'white',borderWidth:1,flexDirection:'row'}}>
    <Icon name='address-book' size={20} color="white" style={{margin:10}}/>
    <TextInput
        placeholder='Phone No.'
        placeholderTextColor='white'
        keyboardType="number-pad"

      style={{ height: 40,color:'white', width:"90%"}}     
    />
      
    </View>
 
    </View>
   <View style={{padding: 2, flexDirection:'row'}}>
   <View style={{borderColor:'gray',margin:"5%",color:'white',borderWidth:1,flexDirection:'row'}}>
    <Icon name='lock' size={20} color="white" style={{margin:10}}/>
    <TextInput
        placeholder='Password'
        placeholderTextColor='white'
        secureTextEntry={true}
      style={{ height: 40,color:'white', width:"80%"}}     
    />
       <Icon name='eye' size={15} color="white" style={{margin:10}}/>
    </View>
 
    </View>
    <View  style={{width:"65%",hieght:20,marginTop:50}}>
        <Button
  onPress={() => {
    alert('You have successfully logged in!');
  }}
  title="Login"
/>
</View>
<TouchableOpacity
         onPress={this.onPress}
       >
         <Text style={{color:'white',marginLeft:'33%'}}> Fogot Password?</Text>
       </TouchableOpacity>
       <Text style={{color:'white',marginLeft:'36%'}}>New User?
  <Text
    style={{color: 'red'}}
    onPress={() => {Linking.openURL('http://www.example.com/')}}
  >
  Sign Up.
  </Text>
  
</Text>
      </View>  
    );
    
}
}
const styles = StyleSheet.create({
  container: {
    color:'white',
    fontSize:22,
    justifyContent: 'center',
    paddingHorizontal: 10,
    textAlign:'center',
    margin:'10%'
  },
  backk:{
    backgroundColor:'black',
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    }


})

