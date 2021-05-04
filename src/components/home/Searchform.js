import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Form,Button} from 'react-bootstrap';
import {searchMovies,fetchMovies,loading} from '../../reducers/actions/actions';
import { connect } from 'react-redux';

function Searchform(props) {

    const onSubmit=(e)=>{
        e.preventDefault();
        props.fetchMovies(props.text)
        props.loading()

    }
    const handelChange =(e)=>{
        props.searchMovies(e.target.value)

    }

    return (
        <div>
            <Jumbotron className='container text-center' style ={{marginTop:'50px'}}>
                <h1 style ={{padding:'50px'}}> Search for a movie ,TV series ..</h1>
                <form id='searchForm' onSubmit={onSubmit}>
                <Form.Control 
                type="text" 
                placeholder="Search movies ,TV series" 
                onChange={handelChange}
                style ={{marginBottom:'20px'}}
                />
               <Button variant="primary" type ='submit' >
                        Search
               </Button>
                </form>
             </Jumbotron>

        </div>
    )
}
const mapStateToProps =(state)=>({
    text :state.text
 })

export default connect(
    mapStateToProps,
    {searchMovies,fetchMovies,loading}) (Searchform);
