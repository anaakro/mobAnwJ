
console.log("test")

var table = document.getElementById("myTable");


var JsonData = {};
var list1 = [];

function test(){
    var in1 = document.getElementById("description").value;
    var in2 = document.getElementById("date").value;
    var in3 = document.getElementById("category").value;
    var in4 = document.getElementById("amount").value;
    var in5 = document.getElementById("balance").value;
    console.log(in1)
    list1.push(in1)
    //console.log(inputForm)
    console.log("hallo")

    localStorage.setItem('description', list1);

}



