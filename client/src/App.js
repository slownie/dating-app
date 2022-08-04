import { BrowserRouter, Route, Routes } from "react-router-dom";


import LoginViewport from './screens/LoginViewport';
import CreationViewport from './screens/CreationViewport';
import ProfileViewport from './screens/ProfileViewport';
import MatchesViewport from "./screens/MatchesViewport";
import ChatsViewport from './screens/ChatsViewport';
import SearchViewport from "./screens/SearchViewport";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact   element={<LoginViewport/>} />
          <Route path="/create"   element={<CreationViewport/>} />

          <Route path="/profile"  element ={<ProfileViewport />} />
          <Route path="/matches"  element ={<MatchesViewport />} />
          <Route path="/chats"    element ={<ChatsViewport />} />
          <Route path="/search"   element ={<SearchViewport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}