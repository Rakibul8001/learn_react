// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import "../styles/App.css";
// import Layout from './Layout';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Quiz from './pages/Quiz';
// import Result from './pages/Result';
// import Signup from './pages/Signup';
// import { AuthProvider } from '../contexts/AuthContext';
// import PrivateRoute from './PrivateRoute'
// import PublicRoute from './PublicRoute'

// export default function App() {
//   return (
//     <Router>
//       <AuthProvider>
//       <Layout>
//         <Routes>
          
//           <Route exact path="/" element={<Home/>}/>
//           <Route exact path="/signup" element={<PublicRoute Component={Signup} />}/>
//           <Route exact path="/login" element={<PublicRoute Component={Login}/>}/>
//           <Route exact path='/quiz' element={<PrivateRoute Component={Quiz}/>} />
//           <Route exact path="/result" element={<PrivateRoute Component={Result}/>}/>

//         </Routes>
//       </Layout>
//       </AuthProvider>
//     </Router>

//   );
// }

