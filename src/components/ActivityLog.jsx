// src/components/ActivityLog.jsx
import React from 'react';

const ActivityLog = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h4 className="font-semibold mb-2">Actividades Recientes</h4>
      <ul>
        <li>- Usuario A realizó un pedido.</li>
        <li>- Pedido B fue completado.</li>
        <li>- Se registró un nuevo usuario.</li>
      </ul>
    </div>
  );
};

export default ActivityLog;
