import React from 'react'
import { motion } from 'framer-motion'
import linkedin from '/linkedin.png'
import git from '/git.png'

export default function ContactComponent() {
  return (
    <>
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
              LET'S GET
            </h1>

            <h1 className="display-4 text-white"
              style={{ fontFamily: 'Inter', fontWeight: 700 }}>
              IN TOUCH
            </h1>
          </section>
          <div className="row justify-content-around my-4 px-3">
            {/* LinkedIn */}
            <div className="col-7 d-flex align-items-center gap-3">
              <a
                href="https://www.linkedin.com/in/neralla-sumanth-250539211/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-3 text-decoration-none"
              >
                <div
                  className="box"
                  style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '10px',
                    backgroundColor: '#fff',
                    padding: '6px'
                  }}
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn Logo"
                    style={{ width: '3rem', height: '3rem', padding: '2px' }}
                  />
                </div>
                <p className="mb-0 fw-bold text-white">LinkedIn</p>
              </a>
            </div>

            {/* GitHub */}
            <div className="col-5 d-flex align-items-center gap-3">
              <a
                href="https://github.com/sumanthneralla19-design"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-3 text-decoration-none"
              >
                <div
                  className="box"
                  style={{ 
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '10px',
                    backgroundColor: '#fff',
                    padding: '6px'
                  }}
                >
                  <img
                    src={git}
                    alt="GitHub Logo"
                    style={{ width: '3rem', height: '3rem', padding: '2px' }}
                  />
                </div>
                <p className="mb-0 fw-bold text-white">GitHub</p>
              </a>
            </div>
          </div>



          <div className="row my-4 px-3" >
            <div className="col">
              <label htmlFor="name" className="form-label text-white fw-bold">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" aria-label="First name" />
            </div>
            <div className="col">
              <label htmlFor="email" className="form-label text-white fw-bold">Email</label>
              <input type="text" className="form-control" placeholder="Your@email.com" aria-label="Last name" />
            </div>
          </div>
          <div className="mb-3 px-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label text-white fw-bold">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" className="btn px-4" style={{ backgroundColor: 'orange', color: '#fff' }}>Submit</button>


        </motion.section >

      </div>

    </>

  )
}
