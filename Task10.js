import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { Button, Title, Container, Content, Body } from 'native-base';
import Carousel from 'react-native-snap-carousel';
export default class Task8 extends Component {

  constructor(props) {
    super(props);
    this.state = {
        initialPosition: 0,
    };
    this.props = props;
    this._carousel = {};
    this.init();
  }
  handleSnapToItem(index){
    this.onNextPage(index);
  }
  init(){
    this.state={
        cards: [
            {
              id: "001",
              title:"This is First image",
              body:"Image 1",
              image:"http://placeimg.com/640/480/any"
            },
            {
              id: "002",
              title:"This is Second image",
              body: "Image 2",
              image:"https://placeimg.com/640/640/nature"
            },
            {
              id: "003",
              title:"This is Third image",
              body:"Image 3",
              image:"https://placeimg.com/640/640/beer"
            }
        ]
    };
}
 _renderItem = ( {item, index} ) => {
  return (
      <Container style={{backgroundColor:'grey', height:175, marginLeft:-20}}>
      <Content >
          <TouchableOpacity>
            <Body>
              <Text style={styles.textstyle}>{item.title}</Text>
              <Text style={{marginTop:100}}> {item.body}</Text>
              <Image style={{height:75, width:150, marginTop:15}} source={{uri:item.image}}/>
              <Text>Swipe for next!</Text>
            </Body>
            </TouchableOpacity>
      </Content>
   </Container>         
    );
}
  onNextPage=(pos)=>{
    this.setState({initialPosition: pos});
}
  render() {
    const labels = ["First Image","Second Image","Third Image"];
    const customStyles = {
      stepIndicatorSize: 25,
      currentStepIndicatorSize:30,
      separatorStrokeWidth: 2,
      currentStepStrokeWidth: 3,
      stepStrokeCurrentColor: '#fe7013',
      stepStrokeWidth: 3,
      stepStrokeFinishedColor: '#fe7013',
      stepStrokeUnFinishedColor: '#aaaaaa',
      separatorFinishedColor: '#fe7013',
      separatorUnFinishedColor: '#aaaaaa',
      stepIndicatorFinishedColor: '#fe7013',
      stepIndicatorUnFinishedColor: '#ffffff',
      stepIndicatorCurrentColor: '#ffffff',
      stepIndicatorLabelFontSize: 13,
      currentStepIndicatorLabelFontSize: 13,
      stepIndicatorLabelCurrentColor: '#fe7013',
      stepIndicatorLabelFinishedColor: '#ffffff',
      stepIndicatorLabelUnFinishedColor: '#aaaaaa',
      labelColor: '#999999',
      labelSize: 15,
      currentStepLabelColor: '#fe7013'
    }
    return (
        <View style={{backgroundColor:'grey', flex:1}}>
        <StepIndicator
        customStyles={customStyles}
        currentPosition={this.state.initialPosition}
        labels={labels}
        stepCount={3}
        direction={'horizontal'}
        />
    <Carousel
                        ref={ (c) => { this._carousel = c; } }
                        data={this.state.cards}
                        renderItem={this._renderItem.bind(this)}
                       onSnapToItem={this.handleSnapToItem.bind(this)}
                        layout={'default'}
                        firstItem={0}
                        sliderWidth={sliderWidth}
                        itemWidth={340}
                        itemHeight={140}
                        containerCustomStyle={{left:30, top:'5%'}}
                        slideStyle={{ flex: 1 }}/>
</View>
    );
  }
}
const styles = StyleSheet.create({
  textstyle:{
      color:'black',
      fontSize:20,
      marginTop:"25%"
      }
});
const sliderWidth = 350