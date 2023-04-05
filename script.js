
const slides = document.getElementsByClassName("slide"); 
    const btnLeft = document.querySelector(`#prev`);
    const btnRight = document.querySelector(`#next`);

    let currentSlideIndex = 0;
    let lastSlideIndex = slides.length - 1;

    function goToSlide(slideIndex) {
        [...slides].forEach((s, i) => {
                s.classList.remove('active');           
        });
        [...slides].forEach((s, i) => {
            s.style.transform = `translateX(${110 * (i - slideIndex)}%)`
            s.style.transition = `1s`
            if(slideIndex===i){
                s.classList.toggle('active');                 
            }
        })
        currentSlideIndex = slideIndex;
    }
    goToSlide(currentSlideIndex);

    function readyNextSlide() {

  
        if (currentSlideIndex === lastSlideIndex-1) {
            slides[lastSlideIndex].insertAdjacentElement("afterend", slides[0]);
            slides[lastSlideIndex].style.transform = `translateX(${110}%)`;
            currentSlideIndex--;
        }
        if (currentSlideIndex === 0) {
            slides[0].insertAdjacentElement("beforebegin", slides[lastSlideIndex]);
            slides[0].style.transform = `translateX(-${110}%)`;
            currentSlideIndex++; 
        }
    }

    if (currentSlideIndex === lastSlideIndex-1 || currentSlideIndex === 0) readyNextSlide();

    function shiftSlides(direction) {
        direction ? currentSlideIndex++ : currentSlideIndex--
        if (currentSlideIndex === lastSlideIndex-1 || currentSlideIndex === 0) readyNextSlide();
        goToSlide(currentSlideIndex);
    }

    btnRight.addEventListener("click", shiftSlides.bind(null, 1));
    btnLeft.addEventListener("click", shiftSlides.bind(null, 0));