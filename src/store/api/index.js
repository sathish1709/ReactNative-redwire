import {firebase, usersCollection} from  '../../firebase';

export const registerUser = async({email, password}) =>{
    try{
        const response = await firebase.auth()
        .createUserWithEmailAndPassword(email,password);
        
        const {user} = response;

        const userProfile ={
            uid: user.uid,
            email: user.email
        };

        await usersCollection.doc(user.uid).set(userProfile);

        return {
            user: userProfile,
            isAuth: true
        }

    }catch(error){
        return {error: error.message}
    }
}


export const loginUser = async({email, password}) =>{
    try{
        const response = await firebase.auth()
        .signInWithEmailAndPassword(email,password);
        
        const {user} = response;

        const userProfile = await usersCollection.doc(user.uid).get(userProfile);

        const data = userProfile.data();

       // await usersCollection.doc(user.uid).set(userProfile);

        return {
            user: data,
            isAuth: true
        }

    }catch(error){
        return {error: error.message}
    }
}