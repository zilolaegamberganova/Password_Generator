const passwordChars = ['!', '@', '#', '$', '%', '^', '&', '*', 'Q', 'W', 'E', 'D', 'A', 'H', 'L', 'Z', 'z', 'x', 'c', 'v', 'b', '1', '2', '3', '4', '5'];

function generatePassword(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * passwordChars.length);
        result += passwordChars[randomIndex];
    }
    return result;
}

const shortInput = document.getElementById("shortPass");
const normalInput = document.getElementById("normalPass");
const longInput = document.getElementById("longPass");
const btn = document.getElementById("generateBtn");

btn.addEventListener("click", function() {
    shortInput.value = generatePassword(6);    
    normalInput.value = generatePassword(10);  
    longInput.value = generatePassword(15);    
});