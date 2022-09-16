function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeArray() {
    for (let i = 0; i < num_bars; i++) {
        my_array[i] = getRandomNum(min_height, max_height);
    }
}

function renderBars() {
    for (let i = 0; i < my_array.length; i++) {
        let bar = document.createElement("div"); 
        bar.classList.add("bar");
        bar.style.height = my_array[i] * height_multiplier + "px";
        bar_container.appendChild(bar);
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}