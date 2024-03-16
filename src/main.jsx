import ReactDOM from 'react-dom/client'
import React from "react"
import App from './App.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Editor from "./components/EditorPage.jsx"
import Layout from './components/Layout.jsx';
import LoginPage from "./components/LoginPage.jsx"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<LoginPage />} />
      <Route path='editor/:roomId' element={<Editor />} />
    </Route>

  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div>
      <ToastContainer />
    </div>
    {/* <React.StrictMode> */}
    <RouterProvider router={router} />
    {/* </React.StrictMode>, */}
  </>
)
