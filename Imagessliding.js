import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text
} from "react-native";
import  {DotsLoader} from 'react-native-indicator';
import ImageSlider from 'react-native-image-slider';

const { width } = Dimensions.get('window');


class SplashScreen extends Component {
  render() {
    const images=[
      'https://placeimg.com/640/640/nature',
      
      'https://placeimg.com/640/640/animals',
      
    ]
    return (
      <View style={styles.container}>
        <Image style={styles.image}
          source={require("./assets/images/logo.png")} />
          <Text style={styles.text}>"From a Farmer to Farmers"</Text>
          <DotsLoader size={14} color='rgb(56,64,157)'/>
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
    );

  }
}
export default SplashScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
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
    width,
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