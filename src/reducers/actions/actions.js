import {SEARCH_MOVIES,FETCH_MOVIES,FETCH_MOVIE,LOADING} from '../typeAction/type'
import APIKey from '../../reducers/Apikye'
import axios from 'axios'

export const searchMovies =(text)=>dispatch =>{
    dispatch({
        type :SEARCH_MOVIES,
        payload :text
    })
}
export const loading =()=>dispatch =>{
  dispatch({
      type :LOADING
   })
}

export const fetchMovies = text => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=3830bc04&s=${text}`)
    .then(res =>
      dispatch({
        type: FETCH_MOVIES,
        payload: res.data
      })
    )
    .catch(err => alert(err));
};

export const fetchMovie = id=>dispatch=>{
  axios
  .get(`https://www.omdbapi.com/?apikey=3830bc04&i=${id}`)
  .then(res=>
  dispatch({
    type:FETCH_MOVIE,
    payload:res.data
  })
  )
  .catch(err=>alert(err))
}