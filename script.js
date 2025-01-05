const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");

const tooltip1 = document.getElementById("tooltip1");
const tooltip2 = document.getElementById("tooltip2");
const tooltip3 = document.getElementById("tooltip3");
const tooltip4 = document.getElementById("tooltip4");

image1.addEventListener("mouseover", () => {
    tooltip1.classList.add("visible");
});

image1.addEventListener("mouseout", () => {
    tooltip1.classList.remove("visible");
});

image2.addEventListener("mouseover", () => {
    tooltip2.classList.add("visible");
});

image2.addEventListener("mouseout", () => {
    tooltip2.classList.remove("visible");
});

image3.addEventListener("mouseover", () => {
    tooltip3.classList.add("visible");
});

image3.addEventListener("mouseout", () => {
    tooltip3.classList.remove("visible");
});

image4.addEventListener("mouseover", () => {
    tooltip4.classList.add("visible");
});

image4.addEventListener("mouseout", () => {
    tooltip4.classList.remove("visible");
});
