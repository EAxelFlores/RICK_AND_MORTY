
const express = require('express');
const server = express();
const morgan =require("morgan");
const PORT = 3001;
const router =require("../src/routes/index")
const cors =require("cors");



server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});
server.use(express.json());
server.use(morgan("dev"));

// localhost:3001//rickandmorty/fav
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log('Server raised in port: ' + PORT);
});

//server.use(express.json());
//server.use(morgan("dev"));
//server.use(cors());
//server.use("/rickandmorty",router);

//server.listen(PORT, () => {
  // console.log('Server raised in port: ' + PORT);
//});




















/*const http =require("http");
const PORT=3001;
const characters=require("./utils/data");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");


http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const id =req.url.split("/").pop();
//localhost:3001/rickandmorty/character/4

 if(req.url.includes("onsearch")){
    getCharById(res , id)
 }
 if(req.url.includes("detail")){
    getCharDetail(res , id)
 }


/*  if (req.url.includes("/rickandmorty/character")) {
        console.log(req.url.split("/"));
         const character=characters.filter(char => char.id === Number(id) )
        res.writeHead(200, {"content-type": "application-json"})
       // .end(JSON.stringify(character));
        .end(JSON.stringify(character[0]));
    } */
//}).
//listen(PORT,"localhost")   