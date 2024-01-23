import React, { useEffect, useState } from 'react';
import {createBrowserRouter,RouterProvider,useLocation} from 'react-router-dom';
import Login  from './pages/Login';
import Root from './pages/Root';
import Dashboard from './pages/Dashboard';
import Transcation from './pages/Transcation';
import Schedules from './pages/Schedules';
import Users from './pages/Users';
import Setting from './pages/Setting';
import './App.css';
import './index.css';
import {query} from '../src/store/http';
import {QueryClientProvider} from '@tanstack/react-query';


const router = createBrowserRouter([
  {path:'',element:<Login />},
  {
    path:'root',element:<Root />,children:[
      {path:'',element:<Dashboard/>},
      {path:'transcation',element:<Transcation/>},
      {path:'schedules',element:<Schedules/>},
      {path:'user',element:<Users />},
      {path:'setting',element:<Setting/>}
    ]
  }
])
function App() {
  return (
    <QueryClientProvider client={query}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
