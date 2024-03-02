// TextAreas
const encryptText = document.querySelector(".user-text");
const copyText = document.querySelector(".inputCopy");

// Boton de resultado
const textFound = document.querySelector(".text-found");
const notFound = document.querySelector(".not-found");

// Mensaje
let message;

document.addEventListener("keyup", () => {
  let de = "ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç´",
    a = "AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc",
    re = new RegExp("[" + de + "]", "ug");

  encryptText.value = encryptText.value.replace(re, (match) =>
    a.charAt(de.indexOf(match))
  );

  encryptText.value = encryptText.value.toLowerCase();
});

function encriptar() {
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

function desencriptar() {
  if (encryptText.value) {
    message = encryptText.value
      .replaceAll("ai", "a")
      .replaceAll("imes", "i")
      .replaceAll("enter", "e")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");

    copyText.value = message;
    encryptText.value = "";
    textFound.classList.remove("display-none");
    notFound.classList.add("display-none");
  } else {
    textFound.classList.add("display-none");
    notFound.classList.remove("display-none");
  }
}

function copiar() {
  copyText.select();
  copyText.setSelectionRange(0, 99999); // para moviles

  // funcion copiar texto
  navigator.clipboard.writeText(copyText.value);
}

