
function task1(){
let display =""

for(let i = 0; i < 100; i++){
    if(i%6 ===0){
        display=display+"FizBuz"
        //console.log("FizBuz")
    }
    else if(i%3 === 0){
        display=display+"Buz"
        //console.log("Buz")
    }
    else if(i%2 === 0){
        display=display+"Fiz"
        //console.log("Fiz")
    }
    else{
        display=display+i
    }
}
console.log(display)

}

//------Zadanie 2----------------------------------------------

function task2(){
    let radius = "";
    radius = prompt("Gimme radius: ");

    if (radius == "") {
        alert("Given value is invalid");
        document.getElementById("task2").innerHTML = "Given value is invalid";
    }
    else if (isNaN(radius)) {
        alert("Given value is not a number");
        document.getElementById("task2").innerHTML = "Given value is not a number";
    }

    else {
        let circumference = 2 * radius * Math.PI;
        let area = radius * Math.PI * Math.PI;
        console.log("Circumference = " + circumference);
        console.log("Area = " + area);
        document.getElementById("task22").innerHTML = "Radius: " + radius + " Circumference: " + circumference.toFixed(2) + " Area: " + area.toFixed(2);
    }

}
//------Zadanie 3-------------------------------------------------
let tab = []
let counter = 0
let rand

function task3_1(){
    while(counter != 200){
        rand = Math.floor(Math.random() * 10 + 1)
        counter += rand
        if(counter < 200){
            tab.push(rand)
        }
        else if(counter > 200){
            counter -=rand
        }
        else if(counter === 200){
            break
        }
    }
    console.log("Zad1 podpunkt1 wynik tab = "+tab)
    document.getElementById("task3_1").innerHTML = "tab = "+tab
}

let min
let index
function task3_2(){

    if (tab.length === 0) {
        document.getElementById("task3_2").innerHTML = "tab is empty";
        console.log("tab3_2 is empty");
    }
    else{
        min = Math.min(...tab)
        index = tab.indexOf(min)
        tab.splice(index,1)
        console.log(tab)
        document.getElementById("task3_2").innerHTML = "tab = "+tab
    }
       
}

let max
index = 0
function task3_3(){
    if (tab.length === 0) {
        document.getElementById("task3_3").innerHTML = "tab is empty";
        console.log("tab3_3 is empty");
    }
    else{
        max = Math.max(...tab)
        console.log(max)
        lastIndex = tab.lastIndexOf(max)
        tab.splice(lastIndex,1)
        console.log(tab)
        document.getElementById("task3_3").innerHTML = "tab = "+tab
    }

}

let tabcounter = [0,0,0,0,0,0,0,0,0,0,0]
let i = 0
function task3_4(){
    while(tab[i]){
        tabcounter[tab[i]]++
        i++
    }
    console.log(tabcounter)
    document.getElementById("task3_4").innerHTML = "tabcounter = "+tabcounter
}

function task3_5(){
    for (var i = 0; i < 9; i++) {
        tab.push(tab.shift());
    }
    console.log("tab after shift : " + tab);
    document.getElementById("task3_5").innerHTML = "tab = "+tab
}


function task4() {
    var arrayNames = ["Daniel", "Kazimierz", "Jakub", "Grzegorz", "Wladyslaw"];
    document.getElementById("task4").innerHTML = "arrayNames: " + arrayNames;
    console.log("arrayNames: " + arrayNames);
    let codedArray = [];
    function coding(name, index) {
        var temp = name;
        temp = temp.replaceAll('A', '4');
        temp = temp.replaceAll('a', '4');
        temp = temp.replaceAll('E', '3');
        temp = temp.replaceAll('e', '3');

        if (temp.length >= 6) {
            codedArray[index] = "";
            codedArray[index] = codedArray[index] + temp.substring(0, 3);
            codedArray[index] = codedArray[index] + "...";
            codedArray[index] = codedArray[index] + temp.substring((temp.length - 3), temp.length);
        }
        else codedArray[index] = temp;
    }

    arrayNames.forEach(coding);
    console.log("Coded arrayNames: " + codedArray);
    document.getElementById("task4_1").innerHTML = "Coded arrayNames: " + codedArray;
}

function task5() {
    let x = document.getElementById("task5_clear").children
    for (let i = 1; i < x.length; i++) {
        x[i].innerHTML = ""
    }

    let string = "Woda,Maka,Jajka,Mleko,Maslo"
    const stringArray = string.split(',')
    const finalArray = []

    let th = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')

    console.log("Produkty: ")
    for (let name of stringArray) {
        let product = {
            name: name,
            price: ((Math.random() * 100) + 1).toFixed(2)
        }
        console.log(product);
        finalArray.push(product);
    }
    document.getElementById("task5_products").innerHTML = "Lista produktow: ";
    let table = document.getElementById("table")
    th = document.createElement('th')
    th2 = document.createElement('th')
    th.textContent = "Name"
    th2.textContent = "Price"
    table.append(th, th2);
    for (let i = 0; i < finalArray.length; i++) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        td1.textContent = finalArray[i].name
        td2.textContent = finalArray[i].price
        tr.append(td1, td2)
        table.append(tr)
    }

    document.getElementById("task5_list").innerHTML = "Lista zakupow: ";
    const listArray = [];
    let table2 = document.getElementById("table2")
    let sum = 0
    th = document.createElement('th')
    th2 = document.createElement('th')
    th3 = document.createElement('th')
    th.textContent = "Name"
    th2.textContent = "Price"
    th3.textContent = "Quantity"
    table2.append(th, th2, th3)

    console.log("Lista zakupow: ");
    for (let i = 0; i < finalArray.length / 2; i++) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let random = parseInt(Math.random() * finalArray.length)
        let bought = {
            name: finalArray[random].name,
            price: finalArray[random].price,
            amount: parseInt((Math.random() * 100) + 1)
        }
        console.log(bought)
        finalArray.splice(random, 1)
        td1.textContent = bought.name
        td2.textContent = bought.price
        td3.textContent = bought.amount
        tr.append(td1, td2, td3)
        table2.append(tr)
        sum = sum + bought.amount * bought.price
    }
    console.log("Summary: " + sum.toFixed(2));
    document.getElementById("task5_sum").innerHTML = "Suma kupionych produktow: " + sum.toFixed(2);
}