import React from 'react'
import "./OrderDetailsCard.scss"
export const OrderDetailsCard = ({data}) => {
    return (
        <section className='h-100 order-details-card p-3'>
            <img src={data.cardImg} className='main-img' alt="" />
            <p className='mt-1'>{data.cardTitle}</p>
            <div className='d-flex align-items-center justify-content-between'>
                <h4 className='mb-0'>{data.orderCount}</h4>
                <div>
                    <span className={`${data.outcome} d-block`}>{data.persentage}</span>
                </div>
            </div>
        </section>
    )
}
