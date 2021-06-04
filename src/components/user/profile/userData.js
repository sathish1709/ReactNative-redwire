import React,{useState,useEffect,useCallback} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, TextInput,  Title } from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserData} from '../../../store/actions';
import {ShowToast} from '../../../utils/tools';
import {useFocusEffect} from '@react-navigation/native';

const UserData = () =>{
    const [loading, setLoading] = useState(false)
    const error  = useSelector(state => state.auth.error)
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleSubmit = (values) =>{
        setLoading(true);
        dispatch(updateUserData(values, user)).then(({payload})=>{
            setLoading(false);

            if(payload.error){
                ShowToast('error','OOPS>>!!','Try again later')
            }else{
                ShowToast('success','User Data','Profile was updated')
            }
        })
    }

    useEffect(()=>{   
        if(error){
            //show toast
        }
    },[error])

    useFocusEffect(
        useCallback(()=>{
            return () => dispatch(clearAuthError())
        },[])
    )

    return (
        <>
        <Formik 
            enableReinitialize ={true}
            initialValues ={{
                name: user.name ? user.name: '',
                lastname: user.lastname ? user.lastname: '',
                age: user.age ? user.age: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string().required('The Name is required'),
                lastname: Yup.string().required('The Lastname is required'),
                age: Yup.number().required('The Age is required')
            })}
            onSubmit ={values=>handleSubmit(values)}
            >
                {({handleChange, handleBlur, handleSubmit, values, touched, errors})=>(
                     <View style={{padding:20}}>
                         <Title>About You</Title>
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
                     <Button 
                        disabled={loading}
                        loading={loading}
                        mode="contained"
                        onPress ={handleSubmit}>UPDATE</Button>
                    </View>
                )}
        </Formik>
        </>
    )
}


export default UserData;