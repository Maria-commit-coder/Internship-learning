import React, { Component } from 'react';
import { View,TouchableHighlight, Text, Styles,StyleSheet, Image} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import { Container,SafeAreaView, Header, Content, Title, Footer, Icon, FooterTab, Left, Body, Right, Button } from 'native-base';
export default class extends Component {
 
  render() {
    
    const images=[
      'https://placeimg.com/640/640/nature',
      
      'https://placeimg.com/640/640/animals',
      
    ]
    return (

      <Container>

        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' size={15} color="black" style={{ margin: 10 }} />
            </Button>
          </Left>
          <Body style={{ alignItems: 'center',marginLeft:'20%' }}>
            <Title>ADIHPTHAM</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='rocket' />
            </Button>
          </Right>
        </Header>
        
       <View style={styles.container}>
          <ImageSlider
          loopBothSides
          autoPlayWithInterval={3000}
          images={images}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View key={index}
              style={[style, styles.customSlide,
              //{ backgroundColor: index % 2 === 0 ? 'yellow' : 'green' },
            ]} >
              <Image source={{ uri: item }} style={styles.customImage} />
            
            </View>
          )}/>
      </View>
      
        
        <Footer>
            <FooterTab>
            <TouchableHighlight underlayColor='pink'
         onPress={this.onPress}
        >
                       <Button>
                <Icon name="home" />
                <Text>Home</Text>
                <View style={[ this.props.selected ? {backgroundColor: 'orange'} : {}]}></View>
              </Button>
       </TouchableHighlight>
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
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop:'25%',
        marginLeft:'15%',
        marginRight:'15%'
            
      },
      image:{ 
        width: "55%",
        height: "35%" ,
        bottom:'5%' 
       },
       text:{
         fontSize:18,
         color:'rgb(77,189,55)',
         paddingBottom:'2%'
       },
      offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      
        position: 'absolute',
        top: 30
      },
      offlineText: { color: '#fff' },
      customSlide: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
       
      },
      customSlide: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
       
      },
      customImage: {
        width: '100%',
        height: '100%',
      },
      
    });
    