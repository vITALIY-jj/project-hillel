class Slider {
    constructor() {
        this.slides = [
            "https://picsum.photos/id/10/800/400",
            "https://picsum.photos/id/11/800/400",
            "https://picsum.photos/id/12/800/400",
            "https://picsum.photos/id/13/800/400",
            "https://picsum.photos/id/10/800/400",
            "https://picsum.photos/id/11/800/400",
            "https://picsum.photos/id/12/800/400",
            "https://picsum.photos/id/13/800/400"
        ];
        this.currentIndex = 0;

        this.slide = document.querySelector('#slide');
        this.nextBtn = document.querySelector('#next-btn');
        this.backBtn = document.querySelector('#back-btn');

        this.nextBtn.addEventListener ('click', this.handleNextBtnClick.bind(this));
        this.backBtn.addEventListener ('click', this.handlebackBtnClick.bind(this));

        this.updateSlider();
    }

     handleNextBtnClick() {
        if (this.currentIndex < this.slides.length -1) {
            this.currentIndex++;
            this.updateSlider();
        }
     }


     handlebackBtnClick() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateSlider();
        }
     }

     updateSlider() {
        this.slide.src = this.slides[this.currentIndex];
     }


}

const slider = new Slider();