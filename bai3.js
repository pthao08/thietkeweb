function doanSo() {
    var randomNumber = Math.floor(Math.random() * 2);

    var guess = parseInt(prompt("Hãy đoán xem số là 0 hay 1:"));

    var resultElement = document.getElementById("result");

    while (guess !== randomNumber) {
        guess = parseInt(prompt("Số bạn đoán không đúng. Hãy đoán lại:"));
    }
    resultElement.textContent = "Chúc mừng! Bạn đã đoán đúng số " + randomNumber;
}