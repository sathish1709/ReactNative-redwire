import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ActivityIndicator } from 'react-native';
import {Tile} from 'react-native-elements';

const VideosScreen = ({navigation})=>{
    const renderVideos = () =>{
        <Tile imageSrc={{uri:'https://picsum.photos/200/300'}}
        title='video for Pic sum article'
        icon={{name: 'play-circle', type: 'font-awesone', color:'#fff',size:'50'}}
        contentContainerStyle ={styles.containerContentStyle}
        containerStyle ={styles.containerStyle}
        titleStyle ={{fontSize: 15}}
        onPress = {()=> navigation.navigate('VideoScreen',{
            id:'1234',
            postData:{}
        })} />
    }

    return (
        <View>
            <View style={{padding: 20}}>
                {renderVideos}</View>
            {/* <Button title="See Videos"
                    onPress = {()=> navigation.navigate('Video_screen')} /> */}
        </View>
    )
}

const styles = StyleSheet.create({

    containerStyle:{
        width: '100%',
        height: 250,
        marginBottom: 15
    },
    containerContentStyle:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e1e8ee',
        shadowColor: 'rgba(0,0,0,.2)'
    }
})

export default VideosScreen;