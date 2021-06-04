import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Appbar, TextInput, Divider, Title } from 'react-native-paper';
import UserData from './userData';

const ProfileScreen = ({navigation})=>{
    const goBack = () =>navigation.navigate('Home_screen')

    return (
        <ScreenView>
           <Appbar.Header>
               <Appbar.BackAction onPress={goBack}></Appbar.BackAction>
               <Appbar.Content title="Profile" subtitle="Redwire"/>
           </Appbar.Header>
           <View style={{padding:20}}>
               <Title >Your User Login Data</Title>
               <TextInput label="email" 
                          value ={''}
                          onChangeText={text=> console.log("hello")}
                          mode="flat"/>
                <TextInput label="password" 
                          value ={''}
                          onChangeText={text=> console.log("hello")}
                          mode="flat"/>
                <Button mode="contained" onPress ={()=>console.log('Pressed')}>UPDATE</Button>
           </View>
           <Divider/>
           <UserData/>
        </ScreenView>
    )
}

export default ProfileScreen;