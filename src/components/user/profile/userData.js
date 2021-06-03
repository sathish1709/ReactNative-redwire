import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, TextInput,  Title } from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

const UserData = () =>{

    const handleSubmit = () =>{
        alert("Submit")
    }

    return (
        <>
        <Formik 
            enableReinitialize ={true}
            initialValues ={{
                name: '',
                lastname: '',
                age: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string().required('The Name is required'),
                lastname: Yup.string().required('The Lastname is required'),
                age: Yup.number().required('The Age is required')
            })}
            onSubmit ={values=>handleSubmit(values)}>
                {({handleChange, handleBlur, handleSubmit, values, touched, errors})=>(
                     <View style={{padding:20}}>
                     <TextInput label="email" 
                                value ={''}

                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value = {values.name}
                                error ={errors.name && touched.name ? true : false}
                                mode="flat"/>
                    <TextInput label="lastname" 
                                value ={''}

                                onChangeText={handleChange('lastname')}
                                onBlur={handleBlur('lastname')}
                                value = {values.lastname}
                                error ={errors.lastname && touched.lastname ? true : false}
                                mode="flat"/>
                    <TextInput label="age" 
                                value ={''}

                                onChangeText={handleChange('age')}
                                onBlur={handleBlur('age')}
                                value = {values.age}
                                error ={errors.age && touched.age ? true : false}
                                mode="flat"/>
                     <Button mode="contained" onPress ={handleSubmit}>UPDATE</Button>
                    </View>
                )}
        </Formik>
        </>
    )
}


export default UserData;