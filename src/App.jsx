import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeComponent from './components/HomeComponent'
import ToolsComponent from './components/ToolsComponent'
import ExperienceComponent from './components/ExperienceComponent'
import ProjectComponent from './components/ProjectComponent'
import ContactComponent from './components/ContactComponent'
import { Link, Route, Routes } from 'react-router-dom'
import img from '/IMG_3503.jpg'
import certificate from './assets/diploma.png'
import background from './assets/background.jpg'

function App() {

  const style = {

    outerCircle: {
      width: '300px',
      height: '300px',
      backgroundColor: '#e0e0e0', /* Light grey */
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center', /* Centers inner circle horizontally */
      alignItems: 'center',     /* Centers inner circle vertically */
      marginLeft: '90px',
    },
    innerCircle: {
      width: '250px',
      height: '270px',
      borderRadius: '20px',
    }
  }

  //   useEffect(() => {
  //   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  //   tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
  // }, []);



  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{
        flexFlow: 'row',
        placeContent: 'center',
        alignItems: 'center',
        gap: 18,
        width: 'min-content',
        height: 48,
        padding: '0 20px',
        display: 'flex',
        position: 'relative',
        overflow: 'visible',
        borderRadius: '50px',
        opacity: '1',
        margin: '20px auto',
        backgroundColor: '#373738', // Semi-transparent white background
        color: '#fff', // White text color
      }}>
        <div className="container">
          <Link className="navbar-brand" to="/home" style={{

            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,

          }}><img src={img} alt="Profile Picture" style={{ borderRadius: '50%', width: '30px', height: '30px', marginLeft: '10px' }} />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{
            flexFlow: 'row',
            placeContent: 'center',
            alignItems: 'center',
            gap: 18,
            width: 'min-content',
            height: 48,
            padding: '0 20px',
            display: 'flex',
            position: 'relative',
            overflow: 'visible',
            color: '#fff !important',
          }}>
            <li className="nav-item">
              <Link className="nav-link active text-white" data-bs-toggle="tooltip" data-bs-html="true" data-bs-placement="bottom" data-bs-title="Home" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/tools">Tools</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-disabled="page" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-disabled="page" to="/experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white " aria-disabled="page" to="/project">Projects</Link>
            </li>
          </ul>
        </div>

      </nav >


      <div className="row justify-content-center">
        {/* Left Column: Profile Card */}
        <div className="col-sm-12 col-md-4 d-flex justify-content-center mb-4">
          <div className="card profile-card position-fixed" style={{ width: '300px', height: '500px', padding: '20px', borderRadius: '20px', backgroundColor: '#ffffff', margin: '0px auto' }}>
            <img src={img} className="profile-img" style={{borderRadius:'10px'}} alt="Profile" />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Hem Sumanth Neralla</h5>
              <p className="card-text fw-bold">Software Engineer</p>
            </div>
          </div>
        </div>

        {/* Right Column: Main Content */}
        <div className="col-sm-12 col-md-8">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/tools" element={<ToolsComponent />} />
            <Route path="/experience" element={<ExperienceComponent />} />
            <Route path="/project" element={<ProjectComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
          </Routes>
        </div>
      </div>





    </>
  )
}

export default App
