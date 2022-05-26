import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../styles/App.css";
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Signup from './pages/Signup';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export default function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
          {/* Protected route */}
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<PublicRoute Component={(props)=> <Signup text="Please !" {...props}  key={Date.now()}/>} />}/>
          <Route path="/login" element={<PublicRoute Component={(props)=> <Login {...props} key={Date.now()}/>} />}/>
          <Route path='/quiz' element={<PrivateRoute Component={(props)=> <Quiz {...props} key={Date.now()}/>} />} />
          <Route path="/result" element={<PrivateRoute Component={(props)=> <Result {...props} key={Date.now()}/>} />}/>

        </Routes>
      </Layout>
      </AuthProvider>
    </Router>

  );
}

