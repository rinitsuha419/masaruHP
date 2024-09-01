let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    // スライドを進ませる
    currentSlide = (currentSlide + 1) % (slides.length + 1); // +1はループに対応
    if (currentSlide === slides.length) { // 最後まで来たら最初に戻る
        currentSlide = 0;
        document.querySelector('.slides').style.transition = 'none'; // トランジションを無効化して瞬時に戻る
        document.querySelector('.slides').style.transform = 'translateX(0)';
        setTimeout(() => { //次のフレームでアニメーションを有効化して自然な遷移を実現
            document.querySelector('.slides').style.transition = 'transform 0.5s';
        }, 20); // 短い待ち時間（20ms）を追加
        return;
    }
    showSlide(currentSlide);
}

// スライドの遷移間隔を10秒に設定
setInterval(nextSlide, 10000); // 10秒ごとにスライド