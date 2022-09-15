// remember to inspect element to check console

let button_sort = document.getElementById("button_sort");
let select_algo = document.getElementById("select_algo");
let bar_container = document.getElementById("bar_container");

let num_bars = 20;
let min_height = 2;
let max_height = 20;
let height_multiplier = 20; // allows more visually noticable difference between bar heights
let delay_ms = 20;

let my_array = new Array(num_bars);
let current_algo = select_algo.value;
let sorted = false;

// calls function on load
document.addEventListener("DOMContentLoaded", function() {
    randomizeArray();
    renderBars(my_array);
});

select_algo.addEventListener("change", function () {
    console.log(select_algo.value + " selected");
    current_algo = select_algo.value;
});

button_sort.addEventListener("click", function () {
    if (sorted) {
        location.reload();
    } else {
        console.log(current_algo + " running");
        switch (current_algo) {
            case "bubble": 
                sortBubble(my_array); 
                break;
            case "insertion": 
                sortInsertion(my_array);
                break;
            default: 
                break;
        }
        let button_sort_icon = document.getElementById("button_sort_icon");
        button_sort_icon.classList.remove("fa-play");
        button_sort_icon.classList.add("fa-repeat");
        sorted = true;
    }
});

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeArray() {
    for (let i = 0; i < num_bars; i++) {
        my_array[i] = getRandomNum(min_height, max_height);
    }
}

function renderBars(arr) {
    for (let i = 0; i < arr.length; i++) {
        let bar = document.createElement("div"); 
        bar.classList.add("bar");
        bar.style.height = arr[i] * height_multiplier + "px";
        bar_container.appendChild(bar);
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sortBubble(arr) {
    let startTime = performance.now();
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            bars[j].style.backgroundColor = "green";
            bars[j + 1].style.backgroundColor = "green";
            if (arr[j] > arr[j + 1]) {
                // swap array values
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // animate
                bars[j].style.backgroundColor = "green";
                bars[j + 1].style.backgroundColor = "green";
                await sleep(delay_ms);
                bars[j].style.height = arr[j] * height_multiplier + "px";
                bars[j + 1].style.height = arr[j + 1] * height_multiplier + "px";                 
                await sleep(delay_ms);
            } else {
                await sleep(delay_ms);
            }
            bars[j].style.backgroundColor = "black";
            bars[j + 1].style.backgroundColor = "black";
        }
    }
    let endTime = performance.now();
    console.log("done in " + (endTime - startTime) + "ms");
}

async function sortInsertion(array) {
    let startTime = performance.now();
    let bars = document.getElementsByClassName("bar");
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            bars[j + 1].style.height = array[j + 1] * height_multiplier + "px";
            bars[j + 1].style.backgroundColor = "green";
            await sleep(delay_ms);
            bars[j + 1].style.backgroundColor = "black";
            j = j - 1;
        }
        array[j + 1] = key;
        bars[j + 1].style.height = array[j + 1] * height_multiplier + "px";
        bars[j + 1].style.backgroundColor = "green";
        await sleep(delay_ms);
        bars[j + 1].style.backgroundColor = "black";
    }
    let endTime = performance.now();
    console.log("done in " + (endTime - startTime) + "ms");
  }

