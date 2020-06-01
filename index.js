var express = require("express");
var request = require("request");
var cors = require("cors");

var app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
};

app.use(cors(corsOptions));

app.use("/", function (req, res) {
  var url = req.url.slice(1);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  console.log(url);
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 9000);
console.log(
  `Starting my little cors proxy on http://localhost:${
    process.env.PORT || 9000
  }`
);
