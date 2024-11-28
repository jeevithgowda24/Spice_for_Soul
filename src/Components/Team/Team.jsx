import React, { useRef } from 'react'
import './Team.css'
import next_btn from '../../Assets/frontend_assets/next-icon.png'
import back_btn from '../../Assets/frontend_assets/back-icon.png'


const Team = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }




    return (

        <>
            <h1 className='heading'>Meet Our Partners</h1>
            <div className='testimonials'>
                <img src={back_btn} alt="" className='back-btn' onClick={slideBackward} />
                <img src={next_btn} alt="" className='next-btn' onClick={slideForward} />
                <div className='slider'>
                    <ul ref={slider}>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    {/* <img src={user_1} alt="" /> */}
                                    <div>
                                        <h3>Ruby Thomas</h3>
                                        <span>Quality Assurance & Sourcing Partner</span>
                                    </div>
                                </div>
                                <p>Ruby Thomas is a seasoned agriculturalist with over 30 years of hands-on experience in farming and agricultural practices.
                                    Holding a Master of Arts (MA) and Bachelor of Education (B.Ed.),
                                    Ruby possesses an in-depth understanding of crop cultivation, resource management, and product quality standards.</p>
                                <p><span>Role</span><br />
                                    Ruby ensures all products meet stringent quality standards, overseeing quality control processes from sourcing to final inspection. Her role is pivotal in maintaining product consistency, reliability, and client satisfaction.</p>
                                <p><span>Achievements</span> <br />-Developed and implemented robust quality control processes<br />
                                    - Fostered strong relationships with suppliers and farmers <br />
                                    - Consistently exceeded client satisfaction targets
                                </p>

                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    {/* <img src={user_4} alt="" /> */}
                                    <div>
                                        <h3>Nimy Rose Anto</h3>
                                        <span>Overseas Client Managing Partner</span>
                                    </div>
                                </div>
                                <p>Nimy Rose Anto is a Chartered Engineer with seven years of experience in managing international client relations and European market operations. Her expertise lies in understanding diverse client needs and regulatory requirements.
                                </p>
                                <p><span>Role</span><br />
                                    Nimy handles overseas client management activities, including sales, contract negotiations, and after-sales services. She ensures compliance with local standards and facilitates seamless collaboration with clients abroad.
                                </p>

                                <p><span>Achievements</span> <br />- Established strong relationships with international clients<br />
                                    - Successfully navigated complex regulatory requirements<br />
                                    - Consistently exceeded sales growth targets
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    {/* <img src={user_2} alt="" /> */}
                                    <div>
                                        <h3>Anju Roy</h3>
                                        <span>Business and Client Management Partner</span>
                                    </div>
                                </div>
                                <p>Anju Roy holds a Master of Commerce and Master of Business Administration (MBA), bringing nine years of experience in business management, vendor relations, and finance.</p>
                                <p><span>Role</span><br />
                                    Anju oversees vendor management, product development, and day-to-day operations, ensuring alignment with organizational goals. She manages financial planning, budgeting, and operational strategy.
                                </p>

                                <p><span>Achievements</span> <br />- Implemented efficient operational processes <br />
                                    - Developed and managed successful vendor relationships<br />
                                    - Consistently improved financial performance
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <h1 className='heading'>Our Partnership</h1>
            <div className="partner-desc">
                <p>Together, Ruby, Nimy, and Anju form a well-rounded team, leveraging their unique skills to drive excellence in:<br /> </p>
                <p className='list'>
                    - Quality assurance and sourcing <br />
                    - International client relations <br />
                    - Business management and operations <br /> </p>

                <p>Their collective expertise enables our company to deliver exceptional products, build strong client relationships, and maintain operational efficiency.</p>
            </div>

        </>
    )
}

export default Team
