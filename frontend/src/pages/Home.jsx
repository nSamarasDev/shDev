import React from 'react'
import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'

function Home() {
  return (
    <>
        <section className="heading">
            <h1>What do you need help with?</h1>
            <p>Please choose from an option below</p>
        </section>

        <Link to='/new-ticket' className='btn btn-reverse btn-block'>
            <FaQuestionCircle /> Create New Ticket
        </Link>

        <Link to='/tickets' className='btn btn-block'>
            <FaTicketAlt /> View My Tickets
        </Link>
        
        <Link to='/admin' >
            <FaTicketAlt /> Adminstrative area
                </Link>
                <div>
                    <Link to='/contact' >
                    <FaTicketAlt /> Contact Page
                </Link> 
                </div>
                <div>
                    <Link to='/about' >
                    <FaTicketAlt /> About Page
                </Link> 
                </div>
    </>
  )
}

export default Home