import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const OrderPage = () => {
    const [orders, setOrders] = useState([
        { order_id: 1, customer_name: 'John Doe', order_date: '2024-07-05', total_amount: 150.00, status: 'Shipped' },
        { order_id: 2, customer_name: 'Jane Smith', order_date: '2024-07-04', total_amount: 80.50, status: 'Delivered' },
        { order_id: 3, customer_name: 'David Lee', order_date: '2024-07-03', total_amount: 220.00, status: 'Pending' },
        { order_id: 4, customer_name: 'Sarah Jones', order_date: '2024-07-02', total_amount: 100.00, status: 'Shipped' },
        { order_id: 5, customer_name: 'Michael Brown', order_date: '2024-07-01', total_amount: 50.00, status: 'Delivered' },
    ]);

    const [filterStatus, setFilterStatus] = useState('');
    const [filterCustomer, setFilterCustomer] = useState('');

    const filteredOrders = orders.filter(order => {
        const statusMatch = !filterStatus || order.status.toLowerCase().includes(filterStatus.toLowerCase());
        const customerMatch = !filterCustomer || order.customer_name.toLowerCase().includes(filterCustomer.toLowerCase());
        return statusMatch && customerMatch;
    });

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Orders</h2>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Filter by Customer Name"
                    className="form-control"
                    value={filterCustomer}
                    onChange={(e) => setFilterCustomer(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <select
                    className="form-select"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="">All Statuses</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>

            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map(order => (
                        <tr key={order.order_id}>
                            <td>{order.order_id}</td>
                            <td>{order.customer_name}</td>
                            <td>{order.order_date}</td>
                            <td>${order.total_amount.toFixed(2)}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderPage;