const {Router} =require ("express") 
const {getCharById} =require("../controllers/getCharById")
const {getCharDetail} =require("../controllers/getCharDetail");
const { postFav, gettFav, deleteFav } = require("../controllers/favs");

const router=Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);

router.post("/favs",postFav); 
router.get("/favs",gettFav); 
router.delete("/favs/:id",deleteFav); 
module.exports =router;