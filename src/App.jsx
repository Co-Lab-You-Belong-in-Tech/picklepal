
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import AppLayout from './ui/AppLayout'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Match from './pages/Match'
import Courts from './pages/Courts'

function App() {
  const router=createBrowserRouter([
    {path:"/",element:<Home/>},
    {element:<AppLayout/>,children:[
      {path:"signup" ,element:<SignUp/>},
      {path:"profile" ,element:<Profile/>} ,
      {path:"match" ,element:<Match/>},
      {path:"courts" ,element:<Courts/>}
    ]}
  ])

  return (
     <RouterProvider router={router}/>  
  )
}

export default App
