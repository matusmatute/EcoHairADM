// src/pages/Dashboard/Dashboard.jsx
import React from 'react';
import StatisticsCard from '../../components/StatisticsCard';
import ActivityLog from '../../components/ActivityLog';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tarjetas de estadísticas */}
        <StatisticsCard title="Total de Usuarios" value="150" />
        <StatisticsCard title="Pedidos Activos" value="23" />
        <StatisticsCard title="Total de Ventas" value="$1,230" />
      </div>
      {/* Gráficos de ejemplo */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Resumen de Actividad</h2>
        <ActivityLog />
      </div>
    </div>
  );
};

export default Dashboard;
