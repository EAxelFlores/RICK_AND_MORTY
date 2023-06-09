const favs=require("../utils/favs")

function postFav(req , res) {
    favs.push(req.body);
    res.status(201).json(favs);
}
function gettFav(req , res) {
   
    res.status(200).json(favs);
}

function deleteFav(req , res) {
  const {id} =req.params;
 favs = favs.filter(
    char => char.id !== id
 )
  return  res.status(200).json(favs);
 
  // favs=favs.filter(character =>character.id !== Number(id)) 
   //  res.status(200).json(favs);
}

module.exports = { postFav,gettFav,deleteFav }