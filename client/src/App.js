import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {useAuthContext} from './hooks/useAuthContext';


import LoginViewport from './screens/LoginViewport';
import CreationViewport from './screens/CreationViewport';
import ProfileViewport from './screens/ProfileViewport';
import MatchesViewport from "./screens/MatchesViewport";
import ChatsViewport from './screens/ChatsViewport';
import SearchViewport from "./screens/SearchViewport";


export default function App() {
  const {user} = useAuthContext();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact   element={user ? <Navigate to="/search"/> : <LoginViewport/>} />
          <Route path="/create"   element={user ? <CreationViewport/> : <Navigate to="/"/>} />

          <Route path="/profile"  element ={user ? <ProfileViewport/> : <Navigate to="/"/>} />
          <Route path="/matches"  element ={user ? <MatchesViewport/> : <Navigate to="/"/>} />
          <Route path="/chats"    element ={user ? <ChatsViewport/> : <Navigate to="/"/>} />
          <Route path="/search"   element ={user ? <SearchViewport/> : <Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}