// 生成二维码
if (window.QRCode) {
    let qrGenerator = null;
    window.generateQR = function (element) {
        let qrtext = element.value
        if (!qrtext) {
            return;
        }
        if (!qrGenerator) {
            qrGenerator = new QRCode(document.querySelector("#qrcode"), {
                text: qrtext,
                width: 256,
                height: 256,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        } else {
            qrGenerator.clear(); // clear the code.
            qrGenerator.makeCode(qrtext); // make another code.
        }
    }
}

// 解析二维码
window.decodeQR = function (element) {
    if (element.files.length > 0) {
        qrcode.decode(getObjectURL(element.files[0]));
        qrcode.callback = function (data) {
            document.querySelector('#decodeResult').value = data
        }
    } else {
        document.querySelector('#decodeResult').value = ''
    }
}

// 图片转BASE64
function img2Base64(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        document.querySelector("#base64").value = e.target.result
    };
    reader.readAsDataURL(file)
}

var getObjectURL = function (file) {
    let url = null;
    if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    }
    return url;
}
