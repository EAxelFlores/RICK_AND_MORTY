import { ADD_FAV,REMOVE_FAV } from "./types";
import axios from "axios"

export function addFav(character) {
   return function(dispatch) {
    axios.post("http://localhost:3001/rickandmorty/favs",character)
    .then(response => {
        return dispatch ({
            type : ADD_FAV,
            payload :response.data
        })
    })
   }
 
}


export function removeFav(id) {

    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    //axios
   // .delete(`http://localhost:3001/rickandmorty/favs/${id}`)
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
           return dispatch({
              type: 'REMOVE_FAV',
              payload:data,
        });
        });


    // .then(response => {
     //   return dispatch({
       //     type : REMOVE_FAV,
         //   payload :response.data  
        //})
    //})
   }
}