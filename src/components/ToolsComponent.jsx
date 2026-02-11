import ProjectComponent from "./ProjectComponent";
import { motion } from 'framer-motion'
import figma from '/figma.svg'
import react from '/react.svg'
import angular from '/angular.svg'
import asp from '/asp.svg'
import azure from '/azure.svg'
import sql from '/sql.svg'

export default function ToolsComponent() {
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
      >
        <section >
          <h1 className="display-4" style={{ fontFamily: 'Inter', fontWeight: 700, color: 'orange' }}>
            PREMIUM
          </h1>

          <h1 className="display-4 text-white"
            style={{ fontFamily: 'Inter', fontWeight: 700 }}>
            TOOLS
          </h1>
        </section>

        <div className="row justify-content-around my-4">
          <div className="col-7 d-flex align-items-center gap-3">
            <div className="box" style={{ width: '4rem', height: '4rem', borderRadius: '10px', backgroundColor: '#fff', padding: '6px' }}>
              <img src={figma} alt="Figma Logo" style={{ width: '3rem', height: '3rem', padding: '2px' }} />
            </div>
            <p className="mb-0 fw-bold text-white">Figma</p>
          </div>
          <div className="col-5 d-flex align-items-center gap-3">
            <div className="box2" style={{ width: '4rem', height: '4rem', borderRadius: '10px', backgroundColor: '#fff', padding: '6px' }}>
              <img src={react} alt="react Logo" style={{ width: '3rem', height: '3rem', padding: '2px' }} />
            </div>
            <p className="mb-0 fw-bold text-white">React</p>
          </div>
        </div>


        <div className="row justify-content-around my-4">
          <div className="col-7 d-flex align-items-center gap-3">
            <div className="box3" style={{ width: '4rem', height: '4rem', borderRadius: '10px', backgroundColor: '#fff', padding: '6px' }}>
              <img src={angular} alt="Angular Logo" style={{ width: '3rem', height: '3rem', padding: '2px' }} />
            </div>
            <p className="mb-0 fw-bold text-white">Angular</p>
          </div>
          <div className="col-5 d-flex align-items-center gap-3">
            <div className="box4" style={{ width: '4rem', height: '4rem', borderRadius: '10px', backgroundColor: '#fff', padding: '6px' }}>
              <img src={asp} alt="ASP Logo" style={{ width: '3rem', height: '3rem', padding: '2px' }} />
            </div>
            <p className="mb-0 fw-bold text-white">ASP.NET</p>
          </div>
        </div>

        <div className="row justify-content-around my-4">
          <div className="col-7 d-flex align-items-center gap-3">
            <div className="box5" style={{ width: '4rem', height: '4rem', borderRadius: '10px', backgroundColor: '#fff', padding: '6px' }}>
              <img src={azure} alt="Azure Logo" style={{ width: '3rem', height: '3rem', padding: '2px' }} />
            </div>
            <p className="mb-0 fw-bold text-white">Azure</p>
          </div>
          <div className="col-5 d-flex align-items-center gap-3">
            <div className="box6" style={{ width: '4rem', height: '4rem', borderRadius: '10px', backgroundColor: '#fff', padding: '6px' }}>
              <img src={sql} alt="SQL Logo" style={{ width: '3rem', height: '3rem', padding: '2px' }} />
            </div>
            <p className="mb-0 fw-bold text-white">SQL Server</p>
          </div>
        </div>

      </motion.section>



    </div>
  )
}
