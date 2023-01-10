
console.log("test")

var table = document.getElementById("myTable");


var JsonData = {};
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];

//let fest = 100.0
//list5.push(fest)
let tempVar = 0;
function test(){
    tempVar = 0;
    var in1 = document.getElementById("description").value;
    var in2 = document.getElementById("date").value;
    var in3 = document.getElementById("category").value;
    var in4 = document.getElementById("amount").value;
    console.log(in1)
    list1.push(in1)
    list2.push(in2)
    list3.push(in3)


    for (let i =0; i< list4.length +1; i++) {
        list4[i]=parseFloat(list4[i])
        tempVar = tempVar + parseFloat(list4[i])
        console.log(tempVar)

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



    document.getElementById("11").innerHTML=list1
    document.getElementById("12").innerHTML=list2
    document.getElementById("13").innerHTML=list3
    document.getElementById("14").innerHTML=list4
    document.getElementById("15").innerHTML=list5

}



