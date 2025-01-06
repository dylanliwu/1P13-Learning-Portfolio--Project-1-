const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");

const tooltip1 = document.getElementById("tooltip1");
const tooltip2 = document.getElementById("tooltip2");
const tooltip3 = document.getElementById("tooltip3");
const tooltip4 = document.getElementById("tooltip4");
const tooltip5 = document.getElementById("tooltip5");

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

image5.addEventListener("mouseover", () => {
    tooltip5.classList.add("visible");
});

image5.addEventListener("mouseout", () => {
    tooltip5.classList.remove("visible");
});

const block1Front = document.getElementById("block1Front");
const block1Back = document.getElementById("block1Back");

const block2Front = document.getElementById("block2Front");
const block2Back = document.getElementById("block2Back");

const block3Front = document.getElementById("block3Front");
const block3Back = document.getElementById("block3Back");

const toggleVisibility = (hide, show) => {
    hide.style.display = "none";
    show.style.display = "flex";
};

block1Front.addEventListener("click", () =>
    toggleVisibility(block1Front, block1Back)
);

block1Back.addEventListener("click", () =>
    toggleVisibility(block1Back, block1Front)
);

block2Front.addEventListener("click", () =>
    toggleVisibility(block2Front, block2Back)
);

block2Back.addEventListener("click", () =>
    toggleVisibility(block2Back, block2Front)
);

block3Front.addEventListener("click", () =>
    toggleVisibility(block3Front, block3Back)
);

block3Back.addEventListener("click", () =>
    toggleVisibility(block3Back, block3Front)
);

