import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav,removeFav } from "../../redux/actions/actions";
import { useState ,useEffect } from "react";

 function Card(props) {

   const {myFavorites} = props;

    const [isFav,setIsFav]= useState(false);
   function handleFavorite() { 
      if (isFav) {
         setIsFav(false);
         props.removeFav(props.id);
         
      }else{
         setIsFav(true);
       props.addFav(props)
      }
      
   }
   useEffect(() => {
     myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className={styles.container}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <div className={styles.buttonX}>
         <button onClick={props.onClose}>X</button>


         </div>
       
       <div className={styles.dataContainer} >
       <h2>{props.name}</h2>
         <h3>{props.status}</h3>
         <h3>{props.species}</h3>
         <h3>{props.gender}</h3>
       <h2>{props.origin}</h2>

       </div>
       <Link to={`/detail/${props.id}`}>
         <img  className={styles.img} src={props.image} alt={props.name} /> 
         </Link>
      </div>
   );
}
function  mapStateToProp(state){
   return {
        myFavorites  :state.myFavorites
   };
}

function  mapDispatchToProp(dispatch){
   return {
        addFav : (ch)=> dispatch(addFav(ch)),
        removeFav :(id) =>dispatch(removeFav(id)),
   }
}




export default connect (mapStateToProp, mapDispatchToProp )(Card)