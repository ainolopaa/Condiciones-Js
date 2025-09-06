

let img = document.getElementById("foto");
    img.onclick = function() {
      if (img.style.border) {
        img.style.border = "";
      } else {
        img.style.border = "2px solid red";
      }
    }