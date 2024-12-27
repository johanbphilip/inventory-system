import { Routes, Route } from 'react-router';
import { LoginPage } from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import { AuthLayout } from './layouts/AuthLayout';
import { SignupPage } from './pages/SignupPage';

function App() {
  // return <Dashboard />;

  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        {/* <Route path="register" element={<Register />} /> */}
      </Route>
      <Route path="*" element={<div>Not Found Page to come soon</div>} />
    </Routes>
  );
}

export default App;
