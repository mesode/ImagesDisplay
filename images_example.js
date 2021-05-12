import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImagesExample = () => {
    return ( 
    <View style = {styles.container}>
        <Image source = { require('/home/kelly/RNProjects/ImagesDisplay/src/img/img1.png')} />
        <Text>This is a local image!</Text>

        <Image source = {{ uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
                style = {{ width: 200, height: 200 }} 
        />
        <Text>This is a network image!</Text>
    </View>
    )
}

export default ImagesExample

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        fontSize: 300,
    },
});