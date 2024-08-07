import React from 'react'
import goals from "../../../images/goals.png"
import arrow from "../../../images/arrow.png"
import menus from "../../../images/menus.png"
import popularDishes from "../../../images/popular-dishes.png"
import "./Features.scss"

export const Features = () => {
    return (
        <section className='dashboard-card d-flex flex-column justify-content-around p-3 features-card h-100'>
            <div className='mb-2 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <img src={goals} alt="" />
                    <h5 className='justify-self-start ms-3 mb-0'>Goals</h5>
                </div>
                <img src={arrow} className='arrow' alt="" />
            </div>
            <div className='mb-2 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <img src={popularDishes} alt="" />
                    <h5 className='justify-self-start ms-3 mb-0'>Popular Dishes</h5>
                </div>
                <img src={arrow} className='arrow' alt="" />
            </div>
            <div className='mb-2 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <img src={menus} alt="" />
                    <h5 className='justify-self-start ms-3 mb-0'>Menus</h5>
                </div>
                <img src={arrow} className='arrow' alt="" />
            </div>
        </section>
    )
}
