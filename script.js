var czydzial = false;
var a = 0;
var b = 0;
var c = 0;
var dz = "";

function przycisk(jaki) {
    var elem = document.getElementById("wyswietlacz");
    
    if ((elem.value == "0") || (czydzial == true)) {
        czydzial = false;
        elem.value = jaki;
    } else {
        elem.value += jaki;
    }
}

function czysc() {
    var elem = document.getElementById("wyswietlacz");
    elem.value = "0";
}

function dzialanie(dzial) {
    var elem = document.getElementById("wyswietlacz");
    czydzial = true;
    a = parseFloat(elem.value);
    switch (dzial) {
        case "+":
            dz = "+";
                break;
            
        case "-":
            dz = "-";
                break;
            
        case "*":
            dz = "*";
                break;
            
        case "/":
            dz = "/";
                break;
                }
    
}

function rownasie() {
    var elem = document.getElementById("wyswietlacz");
    b = parseFloat(elem.value);
    switch (dz){
        case "+":
            c = a + b;;
                break;
            
        case "-":
            c = a - b;
                break;
            
        case "*":
            c = a * b;
                break;
            
        case "/":
            if (b !=0 ) {
            c = a / b; 
            }
            else {
                c = "blad";
                }
            break;
                 
    }
    elem.value = c;
}

function ujemne() {
    var elem = document.getElementById("wyswietlacz");
    
    if ((elem.value == "0") || (czydzial == true)) {
        elem.value = "-";
    } else {
        elem.value = -elem.value;
    }
}

function kropka() {
    
    var elem = document.getElementById("wyswietlacz");
    var poz = elem.value.indexOf('.');
    if (poz >= 0) {
     //nic   
    } else {
        elem.value += ".";
    }
    if (czydzial == true) {
        elem.value = "0.";
        czydzial = false;
    }
}

function CE() {
var elem = document.getElementById("wyswietlacz");
czydzial = false;
a = 0;
b = 0;
c = 0;
dz = "";  
elem.value = c;
}

function back() {
   
    var elem = document.getElementById("wyswietlacz");
    var dlugosc = elem.value.length;
    if (dlugosc==1) {
        elem.value=0;
    }
    else {
        elem.value = elem.value.substr(0, dlugosc-1);
    }
}