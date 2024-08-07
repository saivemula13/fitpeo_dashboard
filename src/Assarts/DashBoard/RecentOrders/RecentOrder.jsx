import React from 'react'
import { Table } from 'react-bootstrap'
import "./RecentOrder.scss"
import customer from "../../../images/profile.png"

export const RecentOrder = () => {
    return (
        <section className=' p-3 recent-orders dashboard-card'>
            <h2>Recent Orders</h2>
            <Table responsive className='mb-0 bg-transparent'>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Order No.</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={customer} width={"40px"} alt="" /> <span className='ms-2'>Wade Warren</span>
                        </td>
                        <td>
                            125552
                        </td>
                        <td>
                            $120.52
                        </td>
                        <td>
                          <span className='success'>Delivered</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={customer} width={"40px"} alt="" /> <span className='ms-2'>Wade Warren</span>
                        </td>
                        <td>
                            125552
                        </td>
                        <td>
                            $120.52
                        </td>
                        <td>
                          <span className='success'>Delivered</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={customer} width={"40px"} alt="" /> <span className='ms-2'>Wade Warren</span>
                        </td>
                        <td>
                            125552
                        </td>
                        <td>
                            $120.52
                        </td>
                        <td>
                          <span className='cancel'>Delivered</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={customer} width={"40px"} alt="" /> <span className='ms-2'>Wade Warren</span>
                        </td>
                        <td>
                            125552
                        </td>
                        <td>
                            $120.52
                        </td>
                        <td>
                          <span className='cancel'>Delivered</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={customer} width={"40px"} alt="" /> <span className='ms-2'>Wade Warren</span>
                        </td>
                        <td>
                            125552
                        </td>
                        <td>
                            $120.52
                        </td>
                        <td>
                          <span className='cancel'>Delivered</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={customer} width={"40px"} alt="" /> <span className='ms-2'>Wade Warren</span>
                        </td>
                        <td>
                            125552
                        </td>
                        <td>
                            $120.52
                        </td>
                        <td>
                          <span className='cancel'>Delivered</span>
                        </td>
                    </tr>

                </tbody>
            </Table>
        </section>
    )
}
