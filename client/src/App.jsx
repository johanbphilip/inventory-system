import { Routes, Route, Router, BrowserRouter } from 'react-router';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { AuthLayout } from './layouts/AuthLayout';
import { SignupPage } from './pages/SignupPage';
import { MainLayout } from './layouts/MainLayout';
import { AllProductsPage } from './pages/AllProductsPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { HistoryPage } from './pages/HistoryPage';
import { AddItemPage } from './pages/AddItemPage';

function App() {
  // return <Dashboard />;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="all-products" element={<AllProductsPage />} />
          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="add-item" element={<AddItemPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          {/* <Route path="register" element={<Register />} /> */}
        </Route>
        <Route path="*" element={<div>Not Found Page to come soon</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
