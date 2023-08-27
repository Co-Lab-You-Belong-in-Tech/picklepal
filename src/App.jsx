
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import AppLayout from './ui/AppLayout'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Match from './pages/Match'
import Courts from './pages/Courts'

import Invites from "./components/Invites"
import Login from './pages/Login'
import MatchFound from './components/MatchFound'
import InviteMatch from './components/InviteMatch'
import { Loader as MatchFoundLoader } from './components/MatchFound'
function App() {
  const router=createBrowserRouter([
    {path:"/",element:<Home/>},
    {element:<AppLayout/>,children:[
      {path:"signup" ,element:<SignUp/>},
      {path:"login" ,element:<Login/>},
      {path:"profile" ,element:<Profile/>,
      children:[{path:"invites",element:<Invites/>}]} ,
      {path:"match" ,element:<Match/>,
      children:[{path:"matchFound",element:<MatchFound/>,loader:MatchFoundLoader},
                {path:"inviteMatch",element:<InviteMatch/>}
                ]},
      {path:"courts" ,element:<Courts/>}
    ]}
  ])

  return (
     <RouterProvider router={router}/>  
  )
}

export default App
