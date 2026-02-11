import img from '/public/IMG_3503.jpg'
import ToolsComponent from './ToolsComponent'
import ProjectComponent from './ProjectComponent'
import ExperienceComponent from './ExperienceComponent'
import EducationComponent from './EducationComponent'
import ContactComponent from './ContactComponent'
import arrow from '/barrow.png'
import { color, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function HomeComponent() {


    return (
        <>


            <div style={{ padding: '40px' }}>

                {/* Header Section */}
                <motion.div
                    className='col '
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="display-4 fw-bold " style={{ color: 'orange' }}>SOFTWARE</h1>
                    <h1 className="display-4 fw-bold text-white">ENGINEER</h1>

                    <h2 className="display-4 fw-bold" style={{ color: 'orange' }}>+2 </h2>
                    <p className="display-9 fw-bold text-white">YEARS OF EXPERIENCE</p>
                    <p className='display-10 text-white'>Frontend Software Engineer with 2+ years of experience building scalable,
                        responsive web applications using Angular and React.
                        I am skilled in modern JavaScript frameworks, REST API integration, component-based architecture, and performance optimization. </p>

                    <div className="row justify-content-evenly my-5">
                        <div className="col-6">

                            <div className="card" style={{ width: '18rem', height: '14rem', backgroundColor: '#ff5900', color: '#fff' }}>
                                <div className="card-body">
                                    <h5 className="card-title">EXPERIENCE</h5>
                                    <p className="card-text">2+ years of experience in frontend development using Angular and React with SQL.</p>
                                    <div className='mt-auto text-end'>
                                        <Link to="/experience">
                                            <img src={arrow} alt="Arrow Icon" style={{ width: '1.5rem', height: '1.5rem', marginLeft: '10px', transform: 'rotate(180deg)' }} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card" style={{ width: '18rem', height: '14rem', backgroundColor: '#ff5900', color: '#fff' }}>
                                <div className="card-body">
                                    <h5 className="card-title">PROJECTS</h5>
                                    <p className="card-text">Built multiple web applications using React and Angular, demonstrating expertise in frontend development.</p>
                                    <div className='mt-auto text-end'>
                                        <Link to="/project">
                                            <img src={arrow} alt="Arrow Icon" style={{ width: '1.5rem', height: '1.5rem', marginLeft: '10px', transform: 'rotate(180deg)' }} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <ToolsComponent />
                <ProjectComponent />
                <EducationComponent />
                <ExperienceComponent />
                <ContactComponent />

            </div>

        </>

    )


}



HomeComponent.defaultProps = {
    name: 'Hem Sumanth Neralla'
}
