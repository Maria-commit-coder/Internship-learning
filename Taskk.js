import React from 'react';
import {
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';
import SearchHeader from 'react-native-search-header';
 
const Demo = () => {
    const searchHeaderRef = React.useRef(null);
    return (
        <View>
            <StatusBar barStyle = 'light-content' />
            <View/>
            <View>
                <Text> Demo </Text>
                <Button
                    title = 'Search'
                    color = '#f5fcff'
                    onPress = {() => searchHeaderRef.current.show()}
                />
            </View>
            <SearchHeader
                ref = { searchHeaderRef }
                placeholder = 'Search...'
                placeholderColor = 'gray'
                pinnedSuggestions = {[ 'react-native-search-header','react-native', 'javascript' ]}
                onClear = {() => {
                    console.log('Clearing input!');
                }}
            
            />
            <View>
                <Button
                    title = 'Open Search'
                    color = '#f5fcff'
                    onPress = {() => searchHeaderRef.current.show()}
                />
            </View>
            <View style = { styles.button }>
                <Button
                    title = 'Clear'
                    color = '#f5fcff'
                    onPress = {() => {
                        searchHeaderRef.current.clear();
                    }}
                />
            </View>
        </View>
    );
}
 
