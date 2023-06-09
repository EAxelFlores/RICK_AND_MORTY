const axios =require("axios");
const { response } = require("express");
 
 const   URL ="https://rickandmortyapi.com/api/character/";

function getCharById(req,res) {
    const {id} =req.params;
    axios.get(URL + id).then((response)=> {
        const character={
            id:response.data.id,
            name :response.data.name,
            image :response.data.image,
            gender :response.data.gender,
            species :response.data.species
        }
        res.status(200).json(character);
    },
    (error) => res.status(500).json(error.message)
    )
}
module.exports ={getCharById}



















/* const axios =require("axios");

const getCharById =(res,id) =>{
axios.get(`https://rickandmortyapi.com/api/character/${id}`)
.then(response => response.data)
.then(data =>{
    const character={
        id:data.id,
        name :data.name,
        image :data.image,
        gender :data.gender,
        species :data.species
    }
    res
    .writeHead(200,{"Content-Type":"application/json"})
    .end(JSON.stringify(character));
})
.catch((error) => 
res.writeHead(500,{"Content-Type" :"text/plain"})
.end(`Personaje con ${id} no encontrado`) 
)
}

module.exports= getCharById;  */