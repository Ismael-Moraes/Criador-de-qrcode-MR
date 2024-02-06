function gerarQRCode() {
        document.getElementById("qrcode").innerHTML = ""
    var texto = document.getElementById("smile").value;
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: texto,
        width: 250,
        height: 250,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    })};