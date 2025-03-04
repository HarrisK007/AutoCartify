import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard'; // Your dashboard component
import OrderPage from './OrderPage'; // Your order page component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
    return (
        <Router>
            <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
                <div className="sidebar" style={{ width: '220px', backgroundColor: '#2c3e50', color: '#ecf0f1', padding: '20px 0', height: '100vh' }}>
                    <h4 style={{textAlign:"center", padding: '0 20px 15px', marginBottom: '20px', borderBottom: '1px solid #34495e', fontWeight: '600' }}>AutoCartify</h4>
                    
                    <Link to="/" style={{ textAlign:"center",display: 'block', padding: '12px 20px', textDecoration: 'none', color: '#ecf0f1', transition: 'background-color 0.3s ease' }}>
                        <i className="fas fa-tachometer-alt" style={{ marginRight: '10px' }}></i> Dashboard
                    </Link>
                    <Link to="/orders" style={{textAlign:"center", display: 'block', padding: '12px 20px', textDecoration: 'none', color: '#ecf0f1', transition: 'background-color 0.3s ease' }}>
                        <i className="fas fa-shopping-cart" style={{ marginRight: '10px' }}></i> Analytics
                    </Link>
                    <Link to="/" style={{ textAlign:"center",display: 'block', padding: '12px 20px', textDecoration: 'none', color: '#ecf0f1', transition: 'background-color 0.3s ease' }}>
                        <i className="fas fa-tachometer-alt" style={{ marginRight: '10px' }}></i> Products
                    </Link>
                    <Link to="/orders" style={{textAlign:"center", display: 'block', padding: '12px 20px', textDecoration: 'none', color: '#ecf0f1', transition: 'background-color 0.3s ease' }}>
                        <i className="fas fa-shopping-cart" style={{ marginRight: '10px' }}></i> Orders
                    </Link>
                    <Link to="/" style={{ textAlign:"center",display: 'block', padding: '12px 20px', textDecoration: 'none', color: '#ecf0f1', transition: 'background-color 0.3s ease' }}>
                        <i className="fas fa-tachometer-alt" style={{ marginRight: '10px' }}></i> Users
                    </Link>
                </div>
                <div className="content" style={{ flexGrow: '1', backgroundColor: '#f4f7f9' }}>
                    <Routes>
                        <Route path="/" element={<AdminDashboard />} />
                        <Route path="/orders" element={<OrderPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;