import React from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
    const { topic } = useParams()
    return (
        <div>
        <h2>Dashboard works.</h2>
    <h3>Topic: { topic }</h3>
        </div>
    );
}

export default Dashboard;