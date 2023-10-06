import React, {useEffect} from 'react'
import './main.css'

// import icons
import{HiOutlineLocationMarker} from 'react-icons/hi'
import{HiOutlineClipboardCheck} from 'react-icons/hi'

// Import images to stop displaying error message
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

// Pasting array data

const Data = [
  {
  id:1,
  imgSrc: img,
  jobTitle: 'Building Construction',
  location: 'on Site',
  grade: 'NEW STRUCTURES',
  fees: '$4000',
  description: 'Front-End Engineering Design, Estimating Services, Detailed Engineering Design, Procurement Service, Construction Management, Manpower Supply, etc.'
  },

  {
  id:2,
  imgSrc: img2,
  jobTitle: 'House Renovation',
  location: 'on Site',
  grade: 'MAINTENANCES',
  fees: '$500',
  description: 'Safety Checks, Asset Repairs, Minor Repairs, Cleaning, Rodent Control, Garbage Disposal, gardening and Landscaping.'
  },

  {
  id:3,
  imgSrc: img3,
  jobTitle: 'Architectural Design',
  location: 'off Site',
  grade: 'CREATIVITIES',
  fees: '$1000',
  description: 'Building Plans, Design Modification, Initial Estimate, Interior Structures, Presentation, Supervised Development.'
  }, 

  {
  id:4,
  imgSrc: img4,
  jobTitle: 'Material Supply',
  location: 'on Site',
  grade: 'EXTERNALS',
  fees: '$4000',
  description: 'Sourcing, Raw Materials, Semi-finished Products, Additives, Parts, Small tools, Ancillary Materials (lubricants, water, etc).'
  }, 

  {
  id:5,
  imgSrc: img5,
  jobTitle: 'Construction Consultant',
  location: 'on/off Site',
  grade: 'EXTERNALS',
  fees: '$1500',
  description: 'General Assistants, Technical Assistants, Project Feasibility, Labour & Insurance Cost, Environmental Evaluation, Potentisl Hazard Evaluation, Collaboration & Structural Alliances, Regulatory Matters, Insurance.'
  }, 

  {
  id:6,
  imgSrc: img6,
  jobTitle: 'Interior Design',
  location: 'off Site',
  grade: 'CREATIVITIES',
  fees: '$2000',
  description: 'Plan, Research, Coordinate and Manage Enhancement Projects. Conceptual Development, Space Requirement Assessment, Space Planning, Optimal Furniture Placement, Decorative Item Selection, Building Code, Inspection Requirements.'
  }, 

  {
  id:7,
  imgSrc: img7,
  jobTitle: 'Building Maintenance',
  location: 'on Site',
  grade: 'MAINTENANCES',
  fees: '$500',
  description: 'Inspection, Repairs, Maintenance: Structural Maintenance, Electrical Systems, Heating/Air Conditioning Systems and other Utility Services.'
  }, 

  {
  id:8,
  imgSrc: img8,
  jobTitle: 'Building Renovation',
  location: 'on Site',
  grade: 'MAINTENANCES',
  fees: '$2000',
  description: 'Installation, Repairs, Replacement, Building Systems, Devices, Equipments, Materials.'
  }, 
]

const Main = () => {
    // creating a react hook to add scroll animation...
    useEffect(()=>{
      Aos.init ({duration: 2000})
    }, [])


  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most requested services
        </h3>
      </div>
      
      <div className="setContent grid">
        {/* Using high order array method (map), using a list of one object in one array. We shall create an array named data and from that we shall .map() array to fetch the jobs at once */}

        {
          Data.map(({id, imgSrc, jobTitle, location, grade, fees, description })=>{
            return(
                  <div key={id} className="singleService">
                    {/* Here it will return single id from the mapped array */}
                    
                    <div className="imageDiv">
                      <img src={imgSrc} alt={jobTitle} />
                    </div>

                    <div data-aos="fade-up" className="cardInfo">
                      <h4 className="jobTitle">{jobTitle}</h4>
                      <span className="continent flex">
                        <HiOutlineLocationMarker className='icon'/>
                        <span className="name">{location}</span>
                      </span>

                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>

                      <div className="des">
                        <p>{description}</p>
                      </div>

                      <button className='btn flex'>
                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                      </button>
                    </div>
                  </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main