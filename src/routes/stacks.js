import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation } from '@react-navigation/native';

import VideosScreen from '../components/home/videos';
import VideoScreen from '../components/home/videos/video';
import HomeScreen from '../components/home/articles';
import ArticleScreen from '../components/home/articles/article';
import {Colors, LogoText} from '../utils/tools';
import {Icon} from 'react-native-elements';

const LeftIcon = () =>{
    const navigation = useNavigation();
    return(
        <View Style={{margin: 10}}>
            <Icon name="menu" type="antdesign" color ={Colors.white}
                 onPress = {() => navigation.openDrawer()}/>
        </View>
    )
}

export const Stack = createStackNavigator();
export const ScreenOptions = {
    headerTitleAlign: 'center',
                                      headerTintColor:Colors.red,
                                      headerStyle : {backgroundColor: Colors.black,
                                                     borderBottomWidth: 6,
                                                     borderBottomColor: Colors.red,
                                                     height: Platform.OS === 'ios' ? 110: 60 },
                                    headerTitle: ()=><LogoText style={{fontSize: 25}}/>
}

export const VideosStack = () =>{
    <Stack.Navigator screenOptions ={{
                                      ...ScreenOptions}} 
                     initialRouteName ="Videos_screen">
        <Stack.Screen name="Videos_screen" component={VideosScreen} options ={{headerLeft:(props)=><LeftIcon/>}}></Stack.Screen>
        
    </Stack.Navigator>
}

export const HomeStack = () =>{
    <Stack.Navigator screenOptions ={{
                                     ...ScreenOptions,
                                     headerBackTitleVisible: false}} 
                     initialRouteName ="Home_screen">
        <Stack.Screen name="Home_screen" component={HomeScreen} options ={{headerLeft:(props)=><LeftIcon/>}}></Stack.Screen>
        <Stack.Screen name="Article_screen" component={ArticleScreen}></Stack.Screen>
    </Stack.Navigator>
}