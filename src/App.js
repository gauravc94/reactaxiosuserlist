import { AppBar, Button, Toolbar } from '@mui/material';
import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { UserList } from './component/UserList';
import { AddUsers } from './component/AddUsers';
import { NotFoundPage } from './component/NotFoundPage';
import { EditUsers } from './component/EditUsers';

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/users")}>UserList</Button>
          <Button color="inherit" onClick={() => navigate("/users/add")}>AddUser</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/add" element={<AddUsers />} />
        <Route path="/users/edit/:userID" element={<EditUsers />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
