import React from 'react'
import { Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FaImdb } from "react-icons/fa";
import classes from './header.module.css'

function Header() {
    return (
        <div>
            
            <Navbar bg="dark" variant="dark" >
                <div className='container'>
                <div>  <Link to= '/' className='Movie_SeriesInfo'><span className ={classes.Span}>Movie SeriesInfo</span></Link>  </div>
                    <Navbar.Brand  >
                        <FaImdb className="d-inline-block align-top " size='5rem' color='yellow'  />
                    </Navbar.Brand>

                </div>
           </Navbar>
 
        </div>
    )
}

export default Header
