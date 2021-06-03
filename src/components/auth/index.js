import React,{useState,useCallback,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

import { Input, Button} from 'react-native-elements';
import {LogoText, Colors, ShowToast} from '../../utils/tools';
import Toast from 'react-native-toast-message';


const AuthScreen = ()=>{

    const [secureEntry, setSecureEntry] = useState(true)
    const [formType, setFormType ] = useState(true)

    useEffect(() => {
      // ShowToast('sucess','sorry','error message')
    }, [])
    
    const handleSubmit = (values) =>{
        alert(values)
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style ={styles.container}>
                <LogoText></LogoText>
                <Formik initialValues ={{
                            email: 'hello@gmail.com',
                            password: 'test123'}}
                        validationSchema={Yup.object({
                            email: Yup.string().email('Invalid email address').required('The Email is required'),
                            password: Yup.string().max(10, 'Must be 10 digit').required('The Password is required') })}
                    
                >
                    {({handleChange, handleBlur, handleSubmit, values, touched, errors})=> (
                        <>
                        <Input placeholder="Email"
                                leftIcon={{type:'antdesign', name: 'mail', color: Colors.white}}
                                inputStyle ={styles.inputStyle}
                                placeholderTextColor={Colors.grey}
                                inputContainerStyle={styles.inputContainerStyle}

                                renderErrorMessage ={errors.email && touched.email}
                                errorMessage={errors.email}
                                errorStyle={{color: Colors.black}}

                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value = {values.email}
                        />
                        <Input placeholder="Password"
                                secureTextEntry={secureEntry}
                                leftIcon={{type:'antdesign', name: 'lock', color: Colors.white}}
                                inputStyle ={styles.inputStyle}
                                placeholderTextColor={Colors.grey}
                                inputContainerStyle={styles.inputContainerStyle}
                                rightIcon={{type:'antdesign', 
                                            name: secureEntry ? 'eye': 'eyeo', 
                                            onPress: ()=>setSecureEntry(!secureEntry)}}

                                renderErrorMessage ={errors.password && touched.password}
                                errorMessage={errors.password}
                                errorStyle={{color: Colors.black}}

                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value = {values.password}
                        />
                        
                        <Button type ="clear"
                            title={formType ? 'Regsitered' :'Login'}
                            buttonStyle={{
                                backgroundColor: Colors.black,
                                marginTop: 20
                            }}
                            titleStyle={{width: '100%'}}
                            onPress={handleSubmit}
                            />

                        <Button type ="clear"
                            title={`${!formType ? 'Already Regsitered?' :'Need to Sign in?'}`}
                            buttonStyle={{
                                marginTop: 20
                            }}
                            titleStyle={{width: '100%', color: Colors.white}}
                            onPress={()=>setFormType(!formType)}/>
                        </>
                    )}
                </Formik>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentContainer:{
        flex: 1,
        backgroundColor: Colors.red
    },
    container: {
        padding: 50,
        alignItems: 'center'
    },
    inputStyle:{
        fontSize: 15,
        color: Colors.white
    },
    inputContainerStyle:{
        borderBottomWidth:3,
        borderBottomColor: Colors.black
    }
})
export default AuthScreen;