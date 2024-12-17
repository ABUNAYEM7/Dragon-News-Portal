import {
    createBrowserRouter,
    Navigate
  } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Career from "../Pages/Career";
import About from "../Pages/About";
import CardContainer from "../components/CardContainer";
import CardDetails from "../Pages/CardDetails";
import Login from "../Pages/Login";
import CreateAccount from "../Pages/CreateAccount";
import PrivateRoute from "./PrivateRoute";


  export const route = createBrowserRouter([
    {
        path:'/',
        element : <MainLayout/>,
        children :[
            {
                path :'',
                element:<Navigate to={'/category/01'}></Navigate>
            },
            {
                path :'/category/:id',
                element :<CardContainer/>,
                loader :({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path:'/About',
        element : <About/>
    },
    {
        path:'/Career',
        element : <Career/>
    },
    {
        path:'/LogIn',
        element : <Login/>
    },
    {
        path:'/LogIn/CreateAccount',
        element : <CreateAccount/>
    },
    {
        path :'/category/:category_id/:id',
        element:<PrivateRoute> <CardDetails/></PrivateRoute>,
        loader :({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    }
  ])