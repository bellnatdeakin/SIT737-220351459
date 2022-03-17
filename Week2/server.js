var express = require("express");
var bodyParser = require("body-parser");
var log = require("log");
app = express();

var port = 3000;

var root = "/public";

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(express.static(__dirname + root));

// app.get("/test", function (request, response) {
//   var param = request.query.username;
//   console.log("Get requested by " + param);
//   response.send("Thank you for requesting our Get Service");
// });

// app.post("/test", function (request, response) {
//   console.log(request.body);
//   var data = request.body;
//   console.log("Post requested. Here is the data: " + data);
//   response.send("Thank you for requesting our Post Service");
// });

app.post("/additionCalculator", function (request, response) {
  try {
    const number1 = parseInt(request.body.number1);
    const number2 = parseInt(request.body.number2);
    const sum = additionCalculator(number1, number2);

    log.info("some info message");

    response.json({ statuscode: 200, data: sum });
  } catch (error) {
    response.json({ statuscode: 200, data: "Please put in two numbers." });
  }
});

function additionCalculator(number1, number2) {
  return number1 + number2;
}

app.listen(port);
log.notice("hello %s", "hello");
console.log(`Listening on port ${port}. :)`);
