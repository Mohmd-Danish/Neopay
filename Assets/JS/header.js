let menu = document.getElementById("hidden");
      let open = document.getElementById("opener");
      let clos = document.getElementById("closer");

      function opener() {
        menu.style.display = "flex";
        clos.style.display = "inline-block";
        open.style.display = "none";
      }
      function closer() {
        menu.style.display = "none";
        clos.style.display = "none";
        open.style.display = "inline-block";
      }