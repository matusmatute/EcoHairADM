// src/pages/Orders/Orders.jsx
import React from 'react';
import OrdersTable from '../../components/OrdersTable';

const Orders = () => {
  return (
    <div className="orders-page">
      <h1 className="text-2xl font-bold mb-4">Pedidos Activos</h1>
      <OrdersTable />
    </div>
  );
};

export default Orders;
