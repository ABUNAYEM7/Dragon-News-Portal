import React, { useContext } from 'react'
import { FirebaseContext } from '../Context/FirebaseProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../components/Loading'

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(FirebaseContext)
    const {pathname} = useLocation()
    if(loading){
        return <Loading/>
    }

    if(user){
        return children
    }
  return <Navigate state={pathname} to={'/LogIn'}></Navigate>
}

export default PrivateRoute
