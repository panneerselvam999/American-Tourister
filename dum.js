

// *****************************
$(".laggage-h").mouseenter(function () {
  $(".laggage-b").slideDown();
});
$(".laggage-slide").mouseleave(function () {
  $(".laggage-b").slideUp();
});

$(".backpacks-h").mouseenter(function () {
  $(".backpacks-b").slideDown();
});
$(".backpacks-slide").mouseleave(function () {
  $(".backpacks-b").slideUp();
});

$(".duffles-h").mouseenter(function () {
  $(".duffles-b").slideDown();
});
$(".duffles-slide").mouseleave(function () {
  $(".duffles-b").slideUp();
});

$(".browse-h").mouseenter(function () {
  $(".browse-b").slideDown();
});
$(".browse-slide").mouseleave(function () {
  $(".browse-b").slideUp();
});

$(".discover-h").mouseenter(function () {
  $(".discover-b").slideDown();
});
$(".discover-slide").mouseleave(function () {
  $(".discover-b").slideUp();
});
// *****************************
//  navbar - end


// carousel - start
var img = document.getElementById("kfc")
    arr = ["img/c1.webp", "img/c2.webp", "img/c3.webp", "img/c4.webp", "img/c5.webp", "img/c6.webp"]
    z = 0
    img.src = arr[z]
    function atp() {
        z += 1

        if (z > arr.length - 1) {
            z = 0
        }
        img.src = arr[z]
    }

    setInterval(atp, 5000)
// carousel - end


// sp - products - start
$(document).ready(function(){
  $(".most-popular-btn").click(function(){
    $(".whats-new").hide();
    $(".bestsellers").hide();
    $(".most-popular").show();
  });

  $(".whats-new-btn").click(function(){
    $(".most-popular").hide();
    $(".bestsellers").hide();
    $(".whats-new").show();
  });

  $(".bestsellers-btn").click(function(){
    $(".whats-new").hide();
    $(".most-popular").hide();
    $(".bestsellers").show();
  });

});
// sp - products - end



// carousel - 3 start 
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel-c");
const firstCardWidth = carousel.querySelector(".card-c").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
// carousel - 3 end





/* ************************************************ */
/* ************************************************ */
/* ************************************************ */
/* ************************************************ */
/* ************************************************ */
/* ************************************************ */
/* ************************************************ */
/* ************************************************ */
/* ************************************************ */
/* ************************************************ */
/* ************************************************ */



