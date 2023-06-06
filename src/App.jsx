import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Tvshow from './Components/Tvshow/Tvshow';
import People from './Components/People/People';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MovieDetails from './Components/MovieDetails/MovieDetails';

import Notfound from './Components/NotFound/Notfound';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';



function App() {
  useEffect(()=>{
    if(localStorage.getItem('userToken')!==null){
saveUserData()
    }
  },[])

const [userData, setuserData] = useState({})

function saveUserData(){
  let encodedToken = localStorage.getItem('userToken');
  let decodedToken = jwtDecode(encodedToken);
  setuserData(decodedToken)
}

  let routers = createBrowserRouter([
    { path: "", element: <Layout setuserData={setuserData} userData={userData}/> , children: [
      {index:true , element: <Home/> },
      {path:"movies" , element:<Movies/> },
      {path:"tvshow" , element:<Tvshow/> },
      {path:"people" , element: <People/>},
      {path:"moviedetails/:id/:mediaType" , element: <MovieDetails/>},

      {path:"login" , element: <Login saveUserData={saveUserData } />},
      {path:"register" , element: <Register/>},
      {path:"*" , element: <Notfound/>},
    ]}
  ])

  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
