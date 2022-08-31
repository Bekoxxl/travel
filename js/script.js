// pul qiymatlari
var dollarUZS =  10958.01;
var euroUZS =  10936.09;

// sayohat rasxotlari

var hotelUSD = 300;
var ovqatUSD = 120;
var parkEURO =415;

// hisob kitob

var hotelUZS = 500 * dollarUZS;
var ovqatUZS = 120 * dollarUZS;
var parkUZS = 415 * euroUZS;

// obshy itago

var totalMoney = Math.round(hotelUZS + ovqatUZS + parkUZS)

// chaqrib olamz
var elSiteForm = document.querySelector('.site-form-js');
var elUserEmail = document.querySelector('.inputEmail');
var elUserName = document.querySelector('.inputName');
var elUserMoney = document.querySelector('.inputMoney');

var elformAnswer = document.querySelector('.form-answer')

// form ketib qomasligi un

elSiteForm.addEventListener("submit", function (e) {
    event.preventDefault()

    var nameValue = elUserName.value;
    var emailValue = elUserEmail.value;
    var moneyValue = elUserMoney.value;

    var noMoney = totalMoney - moneyValue

    if (moneyValue >= totalMoney) {
        elformAnswer.textContent = `Hurmatli ${nameValue} siz royhatdan otdingiz sizga adminlarmiz ${emailValue} pochtangiz orqali aloqaga chiqadi`
    }

    else{
        elformAnswer.textContent = `!!! ${nameValue} sizda yetarlikcha mablag yoq iltmos kamchliklarni toldrib qayta urnib koring (sizda ${noMoney}som kamlik qladi) !!!`
        nameValue.style.color='red'

    }
    
})
