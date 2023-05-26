import React from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";


const Favorites = ({myFavorites}) =>{
    return <div>{

    myFavorites.length && myFavorites.map(({
        id ,name,status,species,gender,origin,image
    })=>{
        return (
            <Card
      id={id}
    name ={name} 
    status ={status} 
    species =  {species}
    gender =  {gender}
    image  =  {image} 
    originN =  {origin}
   
/>
        )
    })    
}
</div>
}







  

function mapState(st) {
    return{
        myFavorites : st.myFavorites,
    }
    
}
export default connect(mapState)(Favorites )