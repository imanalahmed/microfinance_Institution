const { Alert } = require("bootstrap");

function Captcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
    document.getElementById("mainCaptcha").innerHTML = code
    document.getElementById("mainCaptcha").value = code
}
function ValidCaptcha() {
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
    if (string1 == string2) {
        return true;
    } else {
        return false;
    }
}
function removeSpaces(string){
    return string.split(' ').join('');
}
// chick box type of loan
function Loan() {
    var radios = document.getElementsByName('Loan');
    for (var radio of radios) {
        if (radio.checked) {
            // alert(radio.value);
            return radio.value
        }
    }
}
function paymentMethod() {
    var radios = document.getElementsByName('paymentMethod');
    for (var radio of radios) {
        if (radio.checked) {
            // alert(radio.value);
            return radio.value
        }
    }
}
function anniulTax() {
    var a = Loan();
    if (a === 'saving account') {
        var x = 0.05
    }
    else if (a == 'educational loan') {
        var x = 0.1
    }
    else if (a == 'home loan') {
        var x = 0.11
    }
    else if (a == 'commercial loan') {
        var x = 0.18
    }
    else if (a == '"agricultural loan') {
        var x = 0.14
    }
    else if (a == 'Loan for workshops') {
        var x = 0.12
    }
    else if (a == 'Transportation Loan') {
        x = 0.14
    }
    return x
}
// // chick box number of year
function numberOfYear() {
    var radios = document.getElementsByName('year');
    for (var radio of radios) {
        if (radio.checked) {

            return radio.value
        }
    }
}
// // chick box payment Method
function paymentMethod() {
    var radios = document.getElementsByName('paymentMethod');
    for (var radio of radios) {
        if (radio.checked) {

            return radio.value
        }
    }
}
function wayOfPayment() {
    let e = paymentMethod();
    if (e == 1) {
        return 'Per Year'
    }
    else if (e == 4) { return 'Qurter' }
    else if (e == 12) { return 'Monthly' }
}
function handle() {
    ValidCaptcha()
    if (ValidCaptcha() === true) {

        var fullname = document.getElementById("fullName").value;
        var nationalId = document.getElementById("nationalId").value;
        var birthday = document.getElementById("birthday").value;
        var mobileNumber = document.getElementById("mobileNumber").value;
        var email = document.getElementById("email").value;
        var valueOfTax = document.getElementById("valueOfTax").value;
        localStorage.setItem("fullname", fullname)
        localStorage.setItem("nationalId", nationalId)
        localStorage.setItem("birthday", birthday)
        localStorage.setItem("email", email)
        localStorage.setItem("mobileNumber", mobileNumber)
        localStorage.setItem("valueOfTax", valueOfTax)
        localStorage.setItem("Loan()", Loan())
        localStorage.setItem("numberOfYear()", numberOfYear())
        localStorage.setItem("paymentMethod()", paymentMethod())
        localStorage.setItem("anniulTax()", anniulTax())
        localStorage.setItem("amountOfMoney", amountOfMoney())
        localStorage.setItem("wayOfPayment()", wayOfPayment())
        
//  return true
    }
    else {
        window.localStorage.clear();
      return false}
}
function amountOfMoney() {
    let b = anniulTax();
    let c = paymentMethod();
    let totalAmmount = valueOfTax + (valueOfTax * b);

    let numberOfPayment = numberOfYear * c;
    
    return (totalAmmount / numberOfPayment)
}
function setAction(form) {
    
    var mobileNumber1 = document.getElementById("mobileNumber").value;
    var ID = document.getElementById("nationalId").value;
    let chickMobileNumber = mobileNumber1.toString( );
    let chickID = ID.toString( );
    let chickIdCity =Number(chickID[0]+chickID[1]);

if(chickID.length >= 11 && chickIdCity <14 ){


if ( chickMobileNumber[0] ==0 && chickMobileNumber[1]==9 && chickMobileNumber.length ===10){

    
    if (ValidCaptcha() === true){
    form.action = "result.html";
    alert("Done! click OK ==>");
    return true;}
    else{
        // form.action ="home.html";
        alert('WRONG VALIDATION');
        return false;
    }
  }
  else{
    
    alert("Wrong Mobile number");
    return false
}}
else{
    alert("Wrong ID number");
    
    return false
}
}