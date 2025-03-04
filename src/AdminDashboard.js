import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
const AdminDashboard = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [tableData, setTableData] = useState([
        { id: 1, name: 'Product A', category: 'Electronics', price: 100 },
        { id: 2, name: 'Product B', category: 'Clothing', price: 50 },
        { id: 3, name: 'Product C', category: 'Home', price: 75 },
    ]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        if (ctx) {
            chartInstance.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 30'],
                    datasets: [{
                        label: 'Sales',
                        data: [12, 19, 3, 5, 2, 3, 20],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        tooltip: {
                            enabled: true
                        }
                    },
                    onClick: (event, elements) => {
                        if (elements.length > 0) {
                            const index = elements[0].index;
                            const label = chartInstance.current.data.labels[index];
                            const value = chartInstance.current.data.datasets[0].data[index];
                            alert(`Clicked on ${label}: ${value}`);
                        }
                    }
                }
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    const filteredData = tableData.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            <div className="content" style={{ flexGrow: '1', backgroundColor: '#f4f7f9' }}>
                <div className="header" style={{ backgroundColor: '#2c3e50', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb" style={{ backgroundColor: 'transparent', marginBottom: '0' }}>
                            <li className="breadcrumb-item active" aria-current="page" style={{ color: '#ecf0f1', fontWeight: '600' }}>Dashboard</li>
                        </ol>
                    </nav>
                </div>
                <div className="main-content" style={{ backgroundColor: '#ecf0f1', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    {/* Cards (enhanced) */}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow-sm border-0" style={{ marginBottom: '20px' }}>
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fas fa-shopping-cart me-2"></i> Orders Placed</h5>
                                    <p className="card-text display-4">125</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm border-0" style={{ marginBottom: '20px' }}>
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fas fa-question-circle me-2"></i> Queries Received</h5>
                                    <p className="card-text display-4">57</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 mt-2 mb-2">
                            <div className="card shadow-sm border-0" style={{ marginBottom: '20px' }}>
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fas fa-chart-line me-2"></i> Sales (Last 30 Days)</h5>
                                    <canvas ref={chartRef} width="200" height="100"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;