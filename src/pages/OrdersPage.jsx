import React from 'react';

const OrdersPage = () => {
  // Sample order data (replace with real data from your API)
  const orders = [
    {
      id: 'ORD12345',
      customer: 'John Doe',
      date: '2025-01-15',
      total: 120.5,
      status: 'Delivered',
    },
    {
      id: 'ORD12346',
      customer: 'Jane Smith',
      date: '2025-01-14',
      total: 85.0,
      status: 'Pending',
    },
    {
      id: 'ORD12347',
      customer: 'Michael Brown',
      date: '2025-01-13',
      total: 150.0,
      status: 'Canceled',
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center">Order List</h2>
      <div className="table-responsive mt-4">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Total Amount ($)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>{order.total.toFixed(2)}</td>
                <td>
                  <span
                    className={`badge ${
                      order.status === 'Delivered'
                        ? 'bg-success'
                        : order.status === 'Pending'
                        ? 'bg-warning text-dark'
                        : 'bg-danger'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
