import React from 'react'
import Searchform from './Searchform'
import { connect } from 'react-redux';
import Spinner from './Spinner'
import Moviescontainer from '../home/Moviescontainer'

function Landing({loading}) {

    return (
        <div>
            <Searchform />
            {loading ? <Spinner/>: <Moviescontainer />}
        </div>
    )
}
 const mapStateToProps =(state)=>({
      loading :state.loading
})



export default connect(mapStateToProps) (Landing)
