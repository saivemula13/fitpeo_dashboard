import React from 'react'
import "./Feedback.scss"
import customer from "../../../images/profile.png"
import yellowStar from "../../../images/yellow-star.png"
import whiteStar from "../../../images/white-star.png"
export const Feedback = () => {
    return (
        <section className='p-3 dashboard-card customer-feedback'>
            <h2>Customer's Feedback</h2>
            <div className='feedback mt-2'>
                <div>
                    <img src={customer} width={"40px"} alt="" /> <span className='ms-2'>Wade Warren</span>
                </div>
                <div>
                    <span>
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={whiteStar} className='stars' alt="" />
                    </span>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam cumque qui tenetur alias. Repellendus corrupti id commodi cum, ut at aliquam, debitis accusantium earum nam nihil hic autem quo!</p>
                </div>
            </div>
            <div className='feedback mt-2'>
                <div>
                    <img src={customer} width={"40px"} alt="" /> <span className='ms-2'>Wade Warren</span>
                </div>
                <div>
                    <span>
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={whiteStar} className='stars' alt="" />
                    </span>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam cumque qui tenetur alias. Repellendus corrupti id commodi cum, ut at aliquam, debitis accusantium earum nam nihil hic autem quo!</p>
                </div>
            </div>
            <div className='feedback mt-2'>
                <div>
                    <img src={customer} width={"40px"} alt="" /> <span className='ms-2'>Wade Warren</span>
                </div>
                <div>
                    <span>
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={whiteStar} className='stars' alt="" />
                    </span>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam cumque qui tenetur alias. Repellendus corrupti id commodi cum, ut at aliquam, debitis accusantium earum nam nihil hic autem quo!</p>
                </div>
            </div>
            <div className='feedback mt-2'>
                <div>
                    <img src={customer} width={"40px"} alt="" /> <span className='ms-2'>Wade Warren</span>
                </div>
                <div>
                    <span>
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={yellowStar} className='stars' alt="" />
                        <img src={whiteStar} className='stars' alt="" />
                    </span>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam cumque qui tenetur alias. Repellendus corrupti id commodi cum, ut at aliquam, debitis accusantium earum nam nihil hic autem quo!</p>
                </div>
            </div>
        </section>
    )
}
