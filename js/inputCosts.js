
console.log("test")

var table = document.getElementById("myTable");


var JsonData = {};
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];

function test(){
    var in1 = document.getElementById("description").value;
    var in2 = document.getElementById("date").value;
    var in3 = document.getElementById("category").value;
    var in4 = document.getElementById("amount").value;
    var in5 = document.getElementById("balance").value;
    console.log(in1)
    list1.push(in1)
    list1.push(in2)
    list1.push(in3)
    list1.push(in4)
    list1.push(in5)
    //console.log(inputForm)
    console.log("hallo")

    localStorage.setItem('description', list1);
    localStorage.setItem('date', list2);
    localStorage.setItem('category', list3);
    localStorage.setItem('amount', list4);
    localStorage.setItem('balance', list5);

}



