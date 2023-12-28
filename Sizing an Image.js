let imageElement = document.getElementById("image");
let imageWidth = document.getElementById("imageWidth");
let warningMsgElement = document.getElementById("warningMessage");
let warningMsgForMax = "Too big. Decrease the size of the Image";
let warningMsgForMin = "Can't Visible. Increase the size of the Image";

let maxImageWidth = 300;
let minImageWidth = 100;
let defaultImageWidth = 200;

function incrementButton() {
    if (defaultImageWidth >= maxImageWidth) {
        warningMsgElement.textContent = warningMsgForMax;
    } else {
        warningMsgElement.textContent = "";
        let updatedWidth = defaultImageWidth + 5;
        imageWidth.textContent = updatedWidth + "px";
        imageElement.style.width = updatedWidth + "px";
        defaultImageWidth = updatedWidth;
    }
}

function decrementButton() {
    if (defaultImageWidth <= minImageWidth) {
        warningMsgElement.textContent = warningMsgForMin;
    } else {
        warningMsgElement.textContent = "";
        let updatedWidth = defaultImageWidth - 5;
        imageWidth.textContent = updatedWidth + "px";
        imageElement.style.width = updatedWidth + "px";
        defaultImageWidth = updatedWidth;
    }
}