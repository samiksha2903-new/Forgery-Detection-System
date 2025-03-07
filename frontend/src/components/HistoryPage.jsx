// src/components/HistoryPage.js
import React from 'react';

const HistoryPage = () => {
    const historyData = [
        { name: 'Degree #1', status: 'Verified', date: '2025-03-01' },
        { name: 'Degree #2', status: 'Forgery Detected', date: '2025-03-02' },
        { name: 'Transcript #1', status: 'Pending', date: '2025-03-03' },
    ];

    return (
        <div>
            <h2>Verification History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Document Name</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {historyData.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.status}</td>
                            <td>{entry.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HistoryPage;