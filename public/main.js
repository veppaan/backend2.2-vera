const express = require("express");
const bodyParser = require("body-parser"); //Möjlighet att läsa in från form-data
const cors = require("cors");


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true})); //Ta emot form-data

