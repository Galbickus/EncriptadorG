const encryptText = document.querySelector(".user-text");
const copyText = document.querySelector(".inputCopy");
let message


function encrypt() {
    if (encryptText.value) {
      message = encryptText.value
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat")
        .replaceAll("o", "ober");
  
      copyText.value = message;
      encryptText.value = "";
      textFound.classList.remove("display-none");
      notFound.classList.add("display-none");
    } else {
      textFound.classList.add("display-none");
      notFound.classList.remove("display-none");
    }
  }