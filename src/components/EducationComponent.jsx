import React from 'react'
import { motion } from 'framer-motion'


export default function EducationComponent() {
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
            ACADEMIC
          </h1>

          <h1 className="display-4 text-white"
            style={{ fontFamily: 'Inter', fontWeight: 700 }}>
            BACKGROUND
          </h1>
        </section>

        <div className="col-7 d-flex align-items-center gap-3 my-2">
          <div className="table2 my-4">
            <p className="display-6 fw-bold  text-white">Central Michigan University</p>
            <p className="mb-0 text-white">Master in Information Systems</p>
            <p className="mb-0 text-white">August 2024 - May 2026</p>
          </div>
        </div>

        <div className="col-7 d-flex align-items-center gap-3 my-2">
          <div className="table2 my-4">
            <p className="display-6 fw-bold  text-white">Geethanjali College of Engineering and Technology</p>
            <p className="mb-0 text-white">Bachelor of Technology in Electrical and Electronics Engineering</p>
            <p className="mb-0 text-white">July 2018 - May 2022</p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
