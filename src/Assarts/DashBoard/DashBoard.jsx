import React, { useState } from 'react'
import "./DashBoard.scss"
import { Col, Row } from 'react-bootstrap'
import totalOrder from "../../images/total-order.png"
import totalDelivery from "../../images/total-delivary.png"
import totalCancilation from "../../images/total-cancilation.png"
import totalRevenue from "../../images/total-revenue.png"
import { OrderDetailsCard } from './OrderDetailsCard/OrderDetailsCard'
import { NetProfitCard } from './NetProfitCard/NetProfitCard'
import { ActivityCard } from './ActivityCard/ActivityCard'
import { Features } from './Features/Features'
import { RecentOrder } from './RecentOrders/RecentOrder'
import { Feedback } from './Feedback/Feedback'
export const DashBoard = () => {
  const [cardData, setcardData] = useState([
    {
      cardImg: totalOrder,
      cardTitle: "Total Orders",
      orderCount: 75,
      outcome: "profit",
      persentage: "3%"
    },
    {
      cardImg: totalDelivery,
      cardTitle: "Total Delivered",
      orderCount: 70,
      outcome: "loss",
      persentage: "3%"
    },
    {
      cardImg: totalCancilation,
      cardTitle: "Total Cancelled",
      orderCount: "05",
      outcome: "profit",
      persentage: "3%"
    },
    {
      cardImg: totalRevenue,
      cardTitle: "Total Revenue ",
      orderCount: "$12K",
      outcome: "loss",
      persentage: "3%"
    },
  ])
  return (
    <>
      <div className='dashboard'>
        <h2 className='mb-4'>Dashboard</h2>
        <Row>
          <Col lg="8">
            <Row>
              {
                cardData.map(data => {
                  return (<Col sm="6" md="3" className='mb-3'>
                    <OrderDetailsCard data={data} />
                  </Col>
                  )
                })
              }
            </Row>
          </Col>
          <Col className='mb-3' lg="4">
            <NetProfitCard />
          </Col>
          <Col lg="8" className='mb-3'>
            <ActivityCard />
          </Col>
          <Col lg="4" className='mb-3'>
            <Features />
          </Col>
          <Col lg="8" className='mb-3'>
            <RecentOrder />
          </Col>
          <Col lg="4" className='mb-3'>
            <Feedback />
          </Col>
        </Row>
      </div>
    </>
  )
}
