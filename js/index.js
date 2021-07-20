
var form = document.getElementById("form")

maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

form.addEventListener("submit", function (e) {
    var DD = document.getElementById("date").value
    var MM = document.getElementById("month").value
    var userYear = document.getElementById("year").value
    var man = document.getElementById("male")
    e.preventDefault()

    if (DD <= 0 || DD > 31) {
        alertDate()
        return
    } else {
        //console.log(man.checked)
    }
    if (MM <= 0 || MM > 12) {
        alertMonth()
    } else {
        //console.log(woman.checked)
    }

    var newYear = userYear.toString()

    // console.log(newYear)
    var firstDigit = newYear[0]
    var firstSecond = newYear[1]
    var firstThird = newYear[2]
    var firstFourth = newYear[3]

    var CC = firstDigit + firstSecond
    var YY = firstThird + firstFourth

    if (newYear < 1945 || newYear > 2021){
        alertYear()
        return
    } else {
        //console.log(woman.checked)
    }

    var roundedDay = Math.floor(bornDay)

    console.log(roundedDay)

    if (man.checked == true) {
        var bornDay = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
        var key = parseInt(bornDay)
        console.log(maleNames[key])
        document.getElementById("output").innerHTML = maleNames[key]
    }
})
form.addEventListener("submit", function (e) {
    var DD = document.getElementById("date").value
    var MM = document.getElementById("month").value
    var userYear = document.getElementById("year").value
    var woman = document.getElementById("female")
    e.preventDefault()

    if (DD <= 0 || DD > 31) {
        alertDate()
        return
    } else {
        //console.log(woman.checked)
    }
    if (MM <= 0 || MM > 12) {
        alertMonth()
        return
    } else {
        //console.log(woman.checked)
    }

    var newYear = userYear.toString()

    // console.log(newYear)
    var firstDigit = newYear[0]
    var firstSecond = newYear[1]
    var firstThird = newYear[2]
    var firstFourth = newYear[3]


    var CC = firstDigit + firstSecond
    var YY = firstThird + firstFourth
    
    if (newYear < 1945 || newYear > 2021){
        alertYear()
        return
    } else {
        //console.log(woman.checked)
    }


    if (woman.checked == true) {
        var bornDay = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
        var key = parseInt(bornDay)
        console.log(femaleNames[key])
        document.getElementById("output").innerHTML = femaleNames[key]

    }
    function alertDate() {
        alert("Date is invalid")
    }
})
function alertMonth() {
    alert("Month is invalid")
}
function alertYear() {
    alert("Year is invalid")
}