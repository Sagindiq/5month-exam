import { Route, Routes } from 'react-router-dom';
import './App.css';
import "./sass/main.scss";
import CommentProvider from './contexts/data';
import Main from './screen/main/main';
import AddComment from './screen/add/add';
import Edit from './screen/edit/edit';
import EditComment from './screen/edit/edit';

function App() {
  return (
    <CommentProvider>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/add' element={<AddComment />} />
        <Route path='/edit/:id' element={<EditComment />} />
      </Routes>
    </CommentProvider>
  );
}

export default App;
