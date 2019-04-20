// JavaScript Document

document.getElementById("search_input").addEventListener("keyup", myFunction);

    function myFunction() {
      var e = document.getElementById("search_input");
      e.value = e.value.toLowerCase();

      const ahref = document.querySelectorAll('.gallery a');

      for (let i = 0; i < ahref.length; i++) {

      var string = ahref[i].getAttribute('data-title').toLocaleLowerCase();
      var n = string.includes(e.value);

        if (n == true) {
          ahref[i].style.display = "flex";
        }
        else {
          ahref[i].style.display = "none";
        }
    }
  }