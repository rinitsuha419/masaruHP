const slides = document.querySelector('.slides');
let slideIndex = 0;

function resetSlider() {
    if (slideIndex >= 6) {
        slides.style.transition = 'none'; // トランジションを無効にする
        slides.style.transform = 'translateX(0)'; // 最初のスライドに戻る
        slideIndex = 0;
    }
}

slides.addEventListener('animationiteration', resetSlider);
