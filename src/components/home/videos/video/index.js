import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ContentShow from '../../../../utils/contentShow';
import Youtube from 'react-native-youtube';

const VideoScreen = ()=>{
    return (
        <ScrollView>
            <View>
                <Youtube apiKey="AIzaSyAsiDo5dJb7CmzDPgGpDi-FcXts4YapMMc"
                         videoId="Zfsg3oiPXGc"  
                         play ={false} 
                         onChangeState={e=> console.log(e)}
                         onError={error => console.log(error)}  
                         style ={{alignSelf:"stretch",height:300}} />
            </View>
            <ContentShow/>
        </ScrollView>
    )
}

export default VideoScreen;