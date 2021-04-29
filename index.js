
const express = require("express");
const bodyparser = require("body-parser");
  
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
  
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
  
app.post("/bmicalculator", function (req, res) {
    heigh = parseFloat(req.body.Height);
    weigh = parseFloat(req.body.Weight);
    bmi = weigh / (heigh * heigh);
  
	bmi = bmi.toFixed();
  
    req_name = req.body.Name;
  
	if (bmi < 19) {
        res.send("<h3>hai " + req_name + " your BMI is around: " + bmi + "<centre><h1>You are Underweight");
    } else if (19 <= bmi && bmi < 25) {
    	res.send("<h3>hai " + req_name + " your BMI is around: " + bmi + "<centre><h1>You are Normalweight");
    } else if (25 <= bmi && bmi < 30) {
        res.send("<h3>hai " + req_name + " your BMI is around: " + bmi + "<centre><h1>You are Overweight");
    } else {
        res.send("<h3>hai " + req_name + " your BMI is around: " + bmi + "<centre><h1>You are Obese");
    }
});
app.listen(3000, function() {
  console.log("port active at 3000");
});