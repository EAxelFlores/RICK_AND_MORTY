const axios =require("axios");
const { response } = require("express");
 
 const   URL ="https://rickandmortyapi.com/api/character/";

function getCharDetail(req,res) {
    const {detailId} =req.params;
    axios(URL + detailId).then((response)=> {
        const character={
            id:response.data.id,
            name :response.data.name,
            image :response.data.image,
            gender :response.data.gender,
            species :response.data.species,
            status :response.data.status,
            origin:response.data.origin?.name,
        }
        res.status(200).json(character);
    },
    (error) => res.status(500).json(error.message)
    )
}
module.exports ={getCharDetail}









/*  const axios =require("axios");

const getCharDetail =(res,id) =>{
axios.get(`https://rickandmortyapi.com/api/character/${id}`)
.then(response => response.data)
.then(data =>{
    const character={
        id:data.id,
        name :data.name,
        image :data.image,
        gender :data.gender,
        species :data.species,
        status :data.status,
        origin:data.origin?.name,
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

module.exports= getCharDetail;  */