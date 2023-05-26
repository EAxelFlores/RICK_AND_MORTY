import Card from '../Card/Card';

export default function Cards(props) {
   const {characters} =props;
   
   return <div  style={{display:'flex',justifyContent :"space-between"}} >
{characters.map(characters=>(
<Card
      id={characters.id}
    name ={characters.name} 
    status ={characters.status} 
    species =  {characters.species}
    gender =  {characters.gender}
    image  =  {characters.image} 
    originN =  {characters.origin}
    onClose={() => props.onClose(characters.id)}
/>
))}

   </div>;
}
