const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","_","-"];

let passEl = document.getElementById("inputone")
let pass2El = document.getElementById("inputtwo")

let passlength = 15

function randomNumber() {
    let randomNo = Math.floor(Math.random() * characters.length)
    return characters[randomNo]
}

function generateCharaOne() {
    let randomPass = " "
    for (let i = 0; i < passlength; i++) {3
        randomPass += randomNumber()
    }
    return randomPass
}
function generateCharaTwo() {
    let randomPass = " "
    for (let i = 0; i < passlength; i++) {3
        randomPass += randomNumber()
    }
    return randomPass
}

function generatepassone() {
    console.log(generateCharaOne())
    passEl.value = generateCharaOne()
    pass2El.value = generateCharaTwo()
}
