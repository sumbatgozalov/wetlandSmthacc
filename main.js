const barbtn = document.querySelector(".hamburger");
const btnHAM = document.querySelector(".btnOPENC");
const navmenu = document.querySelector(".container");

barbtn.addEventListener("click", () => {
  navmenu.classList.add("show-nav");
});
btnHAM.addEventListener("click", () => {
  navmenu.classList.remove("show-nav");
});




const items = document.querySelectorAll(".accordion-container");

items.forEach((con) => {
  const content = con.querySelector(".accordion-content");
  const btn = con.querySelector(".btn");

  con.addEventListener("click", () => {
    const isOpen = con.classList.contains("open");

    items.forEach((subcon) => {
      if (subcon !== con && subcon.classList.contains("open")) {
        subcon.classList.remove("open");
        subcon.querySelector(".accordion-content").style.maxHeight = 0;
        subcon.querySelector(".btn").classList.remove("rotate1");
        subcon.querySelector(".btn").classList.add("rotate2");
      }
    });
    if (!isOpen) {
      con.classList.add("open");
      btn.classList.remove("rotate2");
      btn.classList.add("rotate1");
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      btn.classList.remove("rotate1");
      btn.classList.add("rotate2");
      content.style.maxHeight = 0;
    }
  });
});
