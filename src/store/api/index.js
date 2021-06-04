import {firebase, usersCollection, articlesCollection} from  '../../firebase';

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

export const autoSignIn = () =>{
    new Promise((resolve, reject)=>{
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                usersCollection.doc(user.uid).get().then( snapshot =>{
                    resolve({user: snapshot.data(), isAuth: true})
                })
            
            }else{
                resolve({user: [], isAuth: false})
            }
        })
    })
}

export const logoutUser = () =>{
    firebase.auth().signOut();
}

export const updateUserData= async(values, user) =>{
    try{
        const collection = usersCollection.doc(user.uid);
        const update = await firebase.collection.update(values);

        const newUser = {
            ...user,
            ...values
        }

        return {user: newUser, error: null}
    }catch(error){
        return {user: user, error: error}
    }
}

export const getArticles= async() =>{
    try{
        const response = await articlesCollection
                        .where('public','==',1)
                        .orderBy('createdAt')
                        .limit(4)
                        .get();

        const lastPostVisible = response.docs[response.docs.length-1]
        const articles = response.docs.map(doc =>({
            id: doc.id,...doc.data()
        }))
        
        return {posts: articles, lastPostVisible:lastPostVisible }
    }catch(error){
        console.log(error)
        return error;
    }
}


export const getMoreArticles= async() =>{

    let posts =[...articles.posts];
    let lastPostVisible = articles.lastPostVisible;
    try{
        if(lastPostVisible){
            const response = await articlesCollection
                        .where('public','==',1)
                        .orderBy('createdAt')
                        .startAfter(lastPostVisible)
                        .limit(2)
                        .get(); 
            
            const lastPostVisible = response.docs[response.docs.length-1];
            const newArticles = response.docs.map(doc =>({
                id: doc.id,...doc.data()
            }))
            return {posts: [...articles.posts,...newArticles], lastPostVisible}
        }
        return {posts, lastPostVisible};
    }catch(error){
        alert(error)
        return {posts, lastPostVisible};
    }
}