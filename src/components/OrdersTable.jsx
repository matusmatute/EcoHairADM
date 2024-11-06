// src/components/OrdersTable.jsx
import React from 'react';

const OrdersTable = () => {
  const orders = [
    { id: 1, description: 'Pedido de Shampoo', user: 'User123', status: 'Activo' },
    { id: 2, description: 'Pedido de Acondicionador', user: 'User456', status: 'Pendiente' },
    // Agregar más datos de ejemplo aquí
  ];

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4">Descripción</th>
          <th className="py-2 px-4">Usuario</th>
          <th className="py-2 px-4">Estado</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td className="border-t py-2 px-4">{order.description}</td>
            <td className="border-t py-2 px-4">{order.user}</td>
            <td className="border-t py-2 px-4">{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
