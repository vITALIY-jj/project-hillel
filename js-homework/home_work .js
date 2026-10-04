const slides = [
  "https://picsum.photos/id/10/2500/1667",
  "https://picsum.photos/id/11/2500/1667",
  "https://picsum.photos/id/12/2500/1667",
  "https://picsum.photos/id/13/2500/1667",
  "https://picsum.photos/id/10/2500/1667",
  "https://picsum.photos/id/11/2500/1667",
  "https://picsum.photos/id/12/2500/1667",
  "https://picsum.photos/id/13/2500/1667",
];

const slide = document.querySelector('#slide');
const nextBtn = document.querySelector('#next-btn');
const backBtn = document.querySelector('#back-btn');

let currentIndex = 0;

slide.setAttribute("src", slides[currentIndex]);

const handleBackBtnClick = () => {
    if (currentIndex > 0) {
        currentIndex = currentIndex -1;
        updateSlider()

    }
};

backBtn.addEventListener("click", handleBackBtnClick);

const handleNextBtnClick = () => {
    if (currentIndex < slides.length -1) {
        currentIndex = currentIndex +1;
        updateSlider()
    }
};

nextBtn.addEventListener("click", handleNextBtnClick);

const updateSlider = () => {
    slide.setAttribute("src", slides[currentIndex])
};

