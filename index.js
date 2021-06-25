require("./lib/log");
const express = require("express");
const { getDirTreeInit } = require("./lib");
const fs = require('fs');
const path = require('path');
const mineType = require('mime-types');
const bodyParser = require('body-parser');/*post方法*/

const app = express();
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
let base64pdf = (file) => {
  let filepath = path.resolve(file);
  let data = fs.readFileSync(path.resolve(filepath));
  data = Buffer.from(data).toString('base64');
  return 'data:' + mineType.lookup(filepath) + ';base64,' + data;
}
let ress = getDirTreeInit();
resss = JSON.parse(ress);
temp = resss.childFiles;
app.use("/",express.static("./"));
app.get("/server",(req,res) => {

  res.json(ress); 
});
app.post("/pdf",(req,res) => {
  let tempp = temp[req.body.index].full;
  tempp = base64pdf(tempp);
  res.send(tempp);
});
app.listen(3000);
// const init = function () {
//   log("______ init ______".blueBG, "\n");

//   const { getDirTreeInit } = require("./lib");
//   getDirTreeInit();

//   return init;
// };

// init();
