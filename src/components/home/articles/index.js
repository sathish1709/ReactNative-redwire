import React from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import {Card} from 'react-native-elements';

const HomeScreen = ({navigation})=>{
    const renderCard = () =>(
        <TouchableOpacity onLongPress = {()=> navigation.navigate("Article_screen"), {
            id: '12334',
            postData: {title: 'card1', content:''}
        } }>
            <Card>
                <Card.Title style={styles.cardTitle}>
                    <Text>My first Card</Text>
                </Card.Title>
                <Card.Divider></Card.Divider>
                <Text style ={styles.cardTitle}>
                    Details of my first card can be found here..!!!
                </Text>
            </Card>
        </TouchableOpacity>
    )
    return (
       <ScrollView>
           {renderCard()}
           {renderCard()}
           {renderCard()}
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardTitle: {
        fontSize: 20,
        textAlign: 'left',
    },
    cardText:{
        marginBottom:10,
        marginTop: 10
    }
})
export default HomeScreen;