import React from 'react'
import './index.css';
import {BrowserRouter,Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom';
import Layout from "./layouts/Layout";
function App() {
  return (
    <>
      <Layout />   
    </>
  )
}

export default App
