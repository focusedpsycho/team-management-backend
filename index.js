const express = require("express");
const teamRoutes = require("./api/team-routes");
const bodyParser = require("body-parser");
const cors = require('cors');
const port = 3000; 
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/team", teamRoutes);
app.get('*', function(req, res){
  res.status(404).send({message:'The requested resource was not found, Please check the Url'});
});

app.listen(port, () =>
  console.log(`team management app listening on port ${port}!`)
);
