const cursorDot = document.querySelector("[ data-cursor-dot]");
const cursorOutline = document.querySelector("[ data-cursor-outline]");

window.addEventListener("mouseover", () => {
  cursorDot.style = "display:block";
  cursorOutline.style = "display:block";
  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    (cursorDot.style.left = `${posX}px`), (cursorDot.style.top = `${posY}px`);

    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 300, fill: "forwards" }
    );
  });
});

window.addEventListener("mouseout", () => {
  cursorDot.style = "display:none";
  cursorOutline.style = "display:none";
});
