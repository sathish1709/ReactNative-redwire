import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import {Image} from 'react-native-elements';
import ContentShow from '../../../../utils/contentShow';
import {useRoute, useNavigation} from '@react-navigation/native';

const ArticleScreen = ()=>{
    const {params} = useRoute();
    return (
        <ScrollView>
            <View>
                <Image source={{uri:params.postData.images}}
                       style ={{width: '100%', height: 200}} 
                       PlaceholderContent={<ActivityIndicator/>}></Image>
                <ContentShow params={params}/>
            </View>
        </ScrollView>
    )
}

export default ArticleScreen;