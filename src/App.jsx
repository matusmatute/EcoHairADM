import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout/DashboardLayout.jsx';
import './App.css';
import Home from './pages/Dashboard/Dashboard.jsx'; // Página de inicio del dashboard
import Orders from './pages/Orders/Orders.jsx'; // Página de pedidos

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          {/* Añade más rutas según sea necesario */}
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
