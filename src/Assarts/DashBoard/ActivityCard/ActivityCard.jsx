import React from 'react'
import "./ActivityCard.scss"
import { Form } from 'react-bootstrap'
import graph from "../../../images/activity-graph.png"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: '5', uv: 4000 },
    { name: '6', uv: 3000 },
    { name: '7', uv: 2000 },
    { name: '8', uv: 2780 },
    { name: '9', uv: 1890 },
    { name: '10', uv: 2390 },
    { name: '11', uv: 2490 },
    { name: '12', uv: 3490 },
    { name: '13', uv: 1490 },
    { name: '14', uv: 650 },
    { name: '15', uv: 3490 },
    { name: '16', uv: 2580 },
    { name: '17', uv: 3490 },
    { name: '18', uv: 3490 },
    { name: '19', uv: 1111 },
    { name: '13', uv: 3490 },
    { name: '14', uv: 3490 },
    { name: '15', uv: 1920 },
    { name: '16', uv: 3490 },
    { name: '17', uv: 3255 },
    { name: '18', uv: 3490 },
    { name: '19', uv: 2585 },
    { name: '20', uv: 650 },
];

export const ActivityCard = () => {
    return (
        <section className='h-100 p-3 dashboard-card activity-card'>
            <div className='d-flex mb-3 justify-content-between align-items-center'>
                <h4>Activity</h4>
                <div className='position-relative select-arrow'>
                    <Form.Select aria-label="Default select example">
                        <option>Weekly</option>
                        <option value="1">Monthly</option>
                        <option value="2">Yearly</option>
                        <option value="3">Daily</option>
                    </Form.Select>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data}>
                    <CartesianGrid  strokeDasharray="" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#7294ff" radius={60} />
                </BarChart>
            </ResponsiveContainer>
        </section>
    )
}
