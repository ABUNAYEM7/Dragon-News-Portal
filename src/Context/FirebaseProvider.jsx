import { createContext, useEffect, useState } from "react"
import Auth from "../firebase/FirebaseInit"
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider,GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail} from "firebase/auth"

export  const FirebaseContext = createContext(null)

const FirebaseProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)
    const [error,setError] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const createUser = (email,pass)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(Auth,email,pass)
    }

    const SignInUser =(email,pass)=>{
      setLoading(true)
      return signInWithEmailAndPassword(Auth,email,pass)
    }

    const singInWithGoogle = ()=>{
      setLoading(true)
      return signInWithPopup(Auth,googleProvider)
    }
    const singInWithGithub= ()=>{
      setLoading(true)
      return signInWithPopup(Auth,githubProvider)
    }
    
    const userLogOut = async()=>{
      setLoading(true)
      try{
        await signOut(Auth)
      }catch (err){
        setError(err.message || err.code)

      }finally{
        setLoading(false)
      }
    }

    const updateUsersProfile =(updatedData)=>{
      return updateProfile(Auth.currentUser,updatedData)
    }

    const emailVerification =()=>{
      return sendEmailVerification(Auth.currentUser)
    }
  
    const resetPass =(email)=>{
      return sendPasswordResetEmail(Auth,email)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(Auth,currentUser=>{
            setUser(currentUser || null)
            setLoading(false)
            // console.log('user',  currentUser)
      })
      return ()=> unsubscribe()
    },[])

    const authInfo ={
      createUser,
      SignInUser,
      singInWithGoogle,
      singInWithGithub,
      userLogOut,
      updateUsersProfile,
      emailVerification,
      loading,
      user
    }


  return (
    <FirebaseContext.Provider value={authInfo}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider
