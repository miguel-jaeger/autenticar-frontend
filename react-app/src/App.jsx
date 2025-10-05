import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RequireAuth from './components/Auth/RequireAuth';
import MainLayout from '@/components/layout/MainLayout';
import HomePage from '@/pages/HomePage';
import AddUserPage from '@/pages/AddUserPage';
import UsersPage from '@/pages/UsersPage';
import LoginPage from '@/pages/LoginPage';
import Forbidden from './pages/Forbidden';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />

                    <Route path="add-user" element={<AddUserPage />} />
                    <Route path="users" element={<RequireAuth requiredRole="ADMIN"> <UsersPage /></RequireAuth>} />
                    <Route path="login" element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;