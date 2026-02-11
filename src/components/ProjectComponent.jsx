import ExperienceComponent from "./ProjectComponent";
import { motion } from 'framer-motion'
import application from '/application.png'
import portfolio from '/portfolio.png'


export default function ProjectComponent() {
  return (
    <div className="col">

      {/* HERO SECTION */}
      <motion.section
        className='col'
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        style={{ marginTop: '100px' }}
      >      <section >
          <h1 className="display-4" style={{ fontFamily: 'Inter', fontWeight: 700, color: 'orange' }}>
            RECENT
          </h1>

          <h1 className="display-4 text-white"
            style={{ fontFamily: 'Inter', fontWeight: 700 }}>
            PROJECTS
          </h1>
        </section>


        <a
          href="https://sumanthneralla19-design.github.io/react-app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          <div className="col-7 d-flex align-items-start gap-3 my-4">

            <div className="table2">
              <img
                src={application}
                alt="Job Application Tracker"
                style={{ width: '4rem', height: '4rem', padding: '2px' }}
              />
            </div>

            {/* TEXT CONTAINER */}
            <div className="d-flex flex-column">
              <p className="display-7 fw-bold text-white mb-1">
                Job Application Tracker
              </p>

              <p className="mb-0 text-white">
                A web application built using React to track job applications and manage the job search process.
              </p>
            </div>

          </div>
        </a>




        <div className="col-7 d-flex align-items-start gap-3 my-5">

          <div className="table2">
            <img
              src={portfolio}
              alt="Portfolio Website"
              style={{ width: '4rem', height: '4rem', padding: '2px' }}
            />
          </div>

          {/* TEXT CONTAINER */}
          <div className="d-flex flex-column">
            <p className="display-7 fw-bold text-white mb-1">
              Portfolio Website
            </p>

            <p className="mb-0 text-white">
              A web application built using React to showcase my projects and skills.
            </p>
          </div>

        </div>



      </motion.section>


    </div>
  )
}
