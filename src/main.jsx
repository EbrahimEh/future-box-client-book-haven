import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout.jsx';
import Home from './components/Home/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import 'aos/dist/aos.css';
import AOS from 'aos';
import AllBooks from './Pages/AllBooks.jsx';
import BookDetails from './Pages/BookDetails.jsx';
import AddBook from './Pages/AddBook.jsx';
import MyBooks from './Pages/MyBooks.jsx';


AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});



const router = createBrowserRouter ([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/allBooks',
        Component: AllBooks
      },
      {
        path: '/book-details/:id',
        Component: BookDetails
      },
      {
        path: '/add-book',
        Component: AddBook
      },
      {
        path: '/mybooks',
        Component: MyBooks
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
