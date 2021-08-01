import React from 'react'
import { Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FaImdb } from "react-icons/fa";
import classes from './header.module.css'

function Header() {
    return (
        <div>
            
            <Navbar bg="dark" variant="dark" >
                <div className='container'>
                <div>  <Link to= './'><span className ={classes.Span}>MovieSeriesInfo</span></Link>  </div>
                    <Navbar.Brand href="#home">
                        <FaImdb className="d-inline-block align-top " size='5rem' color='yellow'  />
                    </Navbar.Brand>

                </div>
           </Navbar>
 
        </div>
    )
}

export default Header
