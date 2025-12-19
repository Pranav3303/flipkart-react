import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './component/Login'
import Member from './component/Member'
import More, { Notification, CustomerCare, Advertise, DownloadApp} from './component/More'
import Cart from './component/Cart'
import Signup from './component/Signup'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: "login",
                element: <Login/>,                
            },
            {
                path: "signup",
                element: <Signup/>,
            },
            {
                path: "member",
                element: <Member/>
            },
            {
                path: "more",
                element: <More/>,
                children:[
                    {
                        path: "notification",
                        element: <Notification/>
                    },
                    {
                        path: "customer-care",
                        element: <CustomerCare/>
                    },
                    {
                        path: "advertise",
                        element: <Advertise/>
                    },
                    {
                        path: "download-app",
                        element: <DownloadApp/>
                    }
                ],
            },
            {
                path: "cart",
                element: <Cart/>
            }

        ]
    }
])


export default router