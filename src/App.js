import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {connect} from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';

import AuthScreen from './components/auth';
import ProfileScreen from './components/user/profile/profile';
import SideDrawerCustom from './utils/customDrawer';
import Colors from './utils/tools';

import {Stack, HomeStack, VideosStack, ScreenOptions} from './routes/stacks';
import Splash from './components/auth/splash';
import VideoScreen from './components/home/videos/video';
import { autoSignIn } from './store/api';

const Drawer = createDrawerNavigator();

const MainDrawer = () =>{
  <Drawer.Navigator 
    drawerContent = {(props)=> <SideDrawerCustom {...props}/>}
    drawerStyle ={{
        backgroundColor : Colors.black
    }}>
    <Drawer.Screen name="Home" Component={HomeStack}></Drawer.Screen>
    <Drawer.Screen name="Videos" Component={VideosStack}></Drawer.Screen>
    <Drawer.Screen name="Profiles" Component={ProfileScreen}></Drawer.Screen>
  </Drawer.Navigator>
}

class App extends Component{

  state ={
    loading: true
  }

  componentDidMount(){
    this.props.dispatch(autoSignIn()).then(()=>{
      this.setState({loading:false})
    })

  }

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.auth.isAuth ? 
          //whole APP
          <>
          <Stack.Screen 
            name = "Main"
            Component ={MainDrawer}
            options ={{headerShown: false}}
          />
          <Stack.Screen name="VideoScreen" component={VideoScreen}
          options={{...ScreenOptions, headerBackTitleVisible: false}}></Stack.Screen>
          </>
          :
          (
            this.state.loading ?
            <Stack.Screen options={{headerShown: false}}
            name="Splash"
            Component={Splash}
            />
            :
          //login page
          <Stack.Screen options={{headerShown: false}}
          name="AuthScreen"
            Component={AuthScreen}
            />
          )
          }
          
        </Stack.Navigator>

      </NavigationContainer>
    )
  }
}

const mapStateToProps = state =>({auth: state.auth})
export default connect(mapStateToProps)(App); 