import { Route, Routes } from 'react-router-dom';
import './App.css';
import "./sass/main.scss";
import CommentProvider from './contexts/data';
import Main from './screen/main/main';
import AddComment from './screen/add/add';

function App() {
  return (
    <CommentProvider>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/add' element={<AddComment />} />
      </Routes>
    </CommentProvider>
  );
}

export default App;
