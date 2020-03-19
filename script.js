var nextBtn = document.querySelector(".nextBtn");
var prevBtn = document.querySelector(".prevBtn");
var container = document.querySelector(".images");
var body = document.getElementsByTagName("body");
var h = document.querySelectorAll(".selected");

h.forEach(function(selected) {
    selected.addEventListener("mouseover", function() {
        selected.style.backgroundColor = "#BA55D3";
    })
})

h.forEach(function(selected) {
    selected.addEventListener("mouseout", function() {
        selected.style.backgroundColor = "rgb(222,192,222)";
    })
})

var measures = {
    0:60,
    1:70,
    2:80,
    3:79,
    4:62,
    5:65,
    6:65
};

var counter = 0;

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click",prevSlide);

function nextSlide() {
    if(counter === 6) {
        counter = -1;
    }
    counter ++;
    console.log(counter);

    container.style.backgroundImage = `url('images/izabrane/${counter}.PNG')`;
    container.style.minHeight = `${measures[counter]}vh`;
}

function prevSlide() {
    if(counter === 0) {
        counter = 7;
    }

    counter --;
    console.log(counter);
    
    container.style.backgroundImage = `url('images/izabrane/${counter}.PNG')`;
    container.style.minHeight = `${measures[counter]}vh`;
}