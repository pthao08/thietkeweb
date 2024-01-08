function doanSo() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;

    var guess = parseInt(prompt("Hãy đoán số từ 1 đến 10:"));

    var resultElement = document.getElementById("result");

    while (guess !== randomNumber) {
        guess = parseInt(prompt("Số bạn đoán không đúng. Hãy đoán lại:"));
    }
    resultElement.textContent = "Chúc mừng! Bạn đã đoán đúng số " + randomNumber;
}