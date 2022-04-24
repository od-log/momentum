const images = [
    "0.jpg",
    "1.jpg",
    // "2.png"
];

const choseImages = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

// bgImage.src = `img/${choseImages}`;
// document.body.appendChild(bgImage);
document.body.style.background = `url(img/${choseImages}) no-repeat right top`;
