import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Splash = () =>{
    <View style={styles.contentContainer}>
        <ActivityIndicator color={Colors.black}></ActivityIndicator>
    </View>
}

const styles = StyleSheet.create({
    contentContainer:{
        flex: 1,
        backgroundColor:Colors.red,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Splash;