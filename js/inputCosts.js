
console.log("test")

var table = document.getElementById("myTable");


var JsonData = {};
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];

var fest = 100.0
list4.push(fest)
tempVar = 0.0;
function test(){
    var in1 = document.getElementById("description").value;
    var in2 = document.getElementById("date").value;
    var in3 = document.getElementById("category").value;
    var in4 = document.getElementById("amount").value;
    var in5 = document.getElementById("balance").value;
    console.log(in1)
    list1.push(in1)
    list2.push(in2)
    list3.push(in3)


    for (let i =0; i< list4.length; i++) {
       tempVar += parseFloat(list4[i])

    }

    list4.push(in4)
    list5.push(tempVar)
    //console.log(inputForm)
    console.log("hallo")

    localStorage.setItem('description', list1);
    localStorage.setItem('date', list2);
    localStorage.setItem('category', list3);
    localStorage.setItem('amount', list4);
    localStorage.setItem('balance', list5);

}



