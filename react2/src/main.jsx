import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'
import Counter from './Counter.jsx'
import NotFound from './NotFound.jsx'
import Post from './Post.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <NotFound/>
  },
  {
    path : '/login',
    element  : <Login/>,
    errorElement: <NotFound/>
  },
  {
    path: '/counter',
    element: <Counter/>
  },
  {
    path: '/post/:id',
    element: <Post/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
