import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/Layouts/MainLayout';
import Home from './Components/Pages/Home/Home';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import CreateTask from './Components/Pages/CreateTask/CreateTask';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/createtask',
        element: (
          <PrivateRoute>
            <CreateTask></CreateTask>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
