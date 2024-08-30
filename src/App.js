
import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './home/Hero';// Fix the casing of the file name
import Destination from './destination/Destination';
import Crew from './crew/Crew';
import Navbar from './home/Navbar';
import Tech from './technology/Tech';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="font-Barlow">
    <Navbar/>
    <Outlet/>
    </div>
  )
}

const AppRouter  = createBrowserRouter([
  {path:'/',
    element:<App/>,
    children:[{
      path:'/',
      element:<Hero/>,
    },
      {
        path:'/destination',
        element:<Destination/>,
      },
      {
        path:'/crew',
        element:<Crew/>,
      },
      {
        path:'/technology',
        element:<Tech/>,
      },
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>);
