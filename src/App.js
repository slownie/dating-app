import { BrowserRouter, Route, Routes } from "react-router-dom";


import Sidebar from './components/Sidebar';

import ProfileViewport from './screens/ProfileViewport';
import MatchesViewport from "./screens/MatchesViewport";
import ChatsViewport from './screens/ChatsViewport';
import SearchViewport from "./screens/SearchViewport";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/profile"  element ={<ProfileViewport />} />
          <Route path="/matches"  element ={<MatchesViewport />} />
          <Route path="/chats" element ={<ChatsViewport />} />
          <Route path="/" exact element ={<SearchViewport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}