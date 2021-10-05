import {SEARCH_MOVIES,FETCH_MOVIES,FETCH_MOVIE,LOADING} from '../typeAction/type';

const initialState ={
    text:'',
    movies: [],
    movie:[],
    loading:false
}

const reducer = (state =initialState,action)=>{
    switch(action.type){
          case SEARCH_MOVIES:
          return{
              ...state,
              text:action.payload,
              loading:false
          }
          case FETCH_MOVIES:
              return{
                ...state,
                movies:action.payload,
                loading:false
              }
          case FETCH_MOVIE:
              return{
                  ...state,
                  movie:action.payload,
                  loading:false
              }

          case LOADING:
             return{
                    ...state,
                     loading:true
                }

                default : return state
     };

  }
export default reducer
