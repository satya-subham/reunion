import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Favorite } from './components/favourite/Favorite';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

import './App.css';
import 'antd/dist/reset.css';

function App() {
  const [search, setSearch] = useState('')
  return (
    <>
      <Header setSearch={setSearch}/>
      <Routes>
      <Route path='/' element={<Main search={search}/>}/>
        <Route path='/Favorite' element={<Favorite/>}/>
      </Routes>
    </>
  );
}

export default App;
